using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;

namespace PFS.Server.Core.Entities
{
    public enum FsEntityType
    {
        Disk,
        Folder,
        File        
    }

    public class FsEntity
    {
        public int Id { get; set; }

        public string DriveName { get; set; }
        public string ParentDirPath { get; set; }

        public string Name { get; set; }
        public FsEntityType Type { get; set; }
        public string Path { get; set; }
    }

    internal static class TypeSystem
    {

        internal static Type GetElementType(Type seqType)
        {
            Type ienum = FindIEnumerable(seqType);
            if (ienum == null) return seqType;
            return ienum.GetGenericArguments()[0];
        }

        private static Type FindIEnumerable(Type seqType)
        {
            if (seqType == null || seqType == typeof(string))
                return null;

            if (seqType.IsArray)
                return typeof(IEnumerable<>).MakeGenericType(seqType.GetElementType());

#if WinOnly
            if (seqType.IsGenericType)
#endif
#if AnyOS
            if(seqType.IsConstructedGenericType)
#endif
            {
                foreach (Type arg in seqType.GetGenericArguments())
                {
                    Type ienum = typeof(IEnumerable<>).MakeGenericType(arg);

                    if (ienum.IsAssignableFrom(seqType))
                    {
                        return ienum;
                    }
                }
            }

            Type[] ifaces = seqType.GetInterfaces();
            if (ifaces != null && ifaces.Length > 0)
            {
                foreach (Type iface in ifaces)
                {
                    Type ienum = FindIEnumerable(iface);
                    if (ienum != null) return ienum;
                }
            }

#if WinOnly
            if (seqType.BaseType != null && seqType.BaseType != typeof(object))
            {
                return FindIEnumerable(seqType.BaseType);
            }
#endif

            return null;
        }
    }
    
    public abstract class QueryProvider : IQueryProvider
    {
        protected QueryProvider()
        {

        }
         

        IQueryable IQueryProvider.CreateQuery(Expression expression)
        {
            Type elementType = TypeSystem.GetElementType(expression.Type);
            try
            {
                return (IQueryable)Activator
                    .CreateInstance(typeof(Query<>)
                    .MakeGenericType(elementType), new object[] { this, expression });
            }
            catch (TargetInvocationException tie)
            {
                throw tie.InnerException;
            }
        }

        IQueryable<TElement> IQueryProvider.CreateQuery<TElement>(Expression expression)
        {
            return new Query<TElement>(this, expression);
        }

        object IQueryProvider.Execute(Expression expression)
        {
            return Execute(expression);
        }

        TResult IQueryProvider.Execute<TResult>(Expression expression)
        {
            return (TResult)Execute(expression);
        }
        public abstract string GetQueryText(Expression expression);
        public abstract object Execute(Expression expression);
    }

    public class Query<T> : IQueryable<T>,
        IQueryable,
        IEnumerable<T>,
        IEnumerable,
        IOrderedQueryable<T>,
        IOrderedQueryable
    {
        QueryProvider provider;
        Expression expression;

        public Query(QueryProvider provider)
        {
            this.provider = provider;
            this.expression = Expression.Constant(this);
        }

        public Query(QueryProvider provider, Expression expression)
        {
            this.provider = provider;
            this.expression = expression;

            if (!typeof(IQueryable<T>).IsAssignableFrom(expression.Type))
            {
                throw new ArgumentOutOfRangeException("expression");
            }
        }

        Expression IQueryable.Expression
        {
            get { return expression; }
        }
                
        Type IQueryable.ElementType
        {
            get { return typeof(T); }
        }
        
        IQueryProvider IQueryable.Provider
        {
            get { return provider; }
        }
        
        public IEnumerator<T> GetEnumerator()
        {
            return ((IEnumerable<T>)provider.Execute(expression)).GetEnumerator();
        }
        
        IEnumerator IEnumerable.GetEnumerator()
        {
            return ((IEnumerable)provider.Execute(expression)).GetEnumerator();
        }
        
        public override string ToString()
        {
            return provider.GetQueryText(expression);
        }
    }

    public class FsQuery
    {
        public  class TakePart
        {
            public bool IsDefined { get; set; }
            public int TakeValue { get; set; }
        }

        public class OrderPart
        {
            public enum OrderDirection
            {
                Asc, Desc
            }
            public string PropertyName { get; set; }
            public OrderDirection Direction { get; set; }
        }

        public class WherePart
        {
            public string PropertyName { get; set; }
            public ExpressionType Comparator { get; set; }
            public string Value { get; set; }
        }

        public TakePart Take { get; set; }
        public List<OrderPart> Orders { get; set; }
        public List<WherePart> Filters { get; set; }

        public FsQuery()
        {
            Take = new TakePart();
            Orders = new List<OrderPart>();
            Filters = new List<WherePart>();
        }
         
        public IEnumerable<FsEntity> GetResults()
        {
            var results = ApplyFilters();
            results = ApplyOrders(results);
            results = ApplyTakes(results);

            return results;
        }

        private IEnumerable<FsEntity> ApplyTakes(IEnumerable<FsEntity> queryResults)
        {
            if (!Take.IsDefined) return queryResults;

            return queryResults;
        }

        private IEnumerable<FsEntity> ApplyOrders(IEnumerable<FsEntity> queryResults)
        {
            foreach (var orderPart in Orders)
            {
                if (orderPart.Direction == OrderPart.OrderDirection.Asc)
                {
                    switch (orderPart.PropertyName)
                    {
                        case "DriveName": return queryResults.OrderBy(o => o.DriveName); 
                        case "ParentDirPath": return queryResults.OrderBy(o => o.ParentDirPath); 
                        case "Name": return queryResults.OrderBy(o => o.Name); 
                        case "Type": return queryResults.OrderBy(o => o.Type); 
                        case "Path": return queryResults.OrderBy(o => o.Path); 
                        default:
                            throw new NotImplementedException();
                    }
                   
                }
                else if (orderPart.Direction == OrderPart.OrderDirection.Desc)
                {
                    switch (orderPart.PropertyName)
                    {
                        case "DriveName": return queryResults.OrderByDescending(o => o.DriveName);
                        case "ParentDirPath": return queryResults.OrderByDescending(o => o.ParentDirPath);
                        case "Name": return queryResults.OrderByDescending(o => o.Name);
                        case "Type": return queryResults.OrderByDescending(o => o.Type);
                        case "Path": return queryResults.OrderByDescending(o => o.Path);
                        default:
                            throw new NotImplementedException();
                    }
                }
            }

            return queryResults;
        }

        private IEnumerable<FsEntity> ApplyFilters()
        {
            WherePart driveFilter = Filters.FirstOrDefault(f=>f.PropertyName == "DriveName");
            WherePart parentFolderFilter = Filters.FirstOrDefault(f => f.PropertyName == "ParentDirName");


            if (driveFilter == null & parentFolderFilter == null)
                return GetDrives();


            return new FsEntity[] { };
        }

        private IEnumerable<FsEntity> GetDrives()
        {
            var retVal = new List<FsEntity>();
            var drives = DriveInfo.GetDrives();

            foreach (var drive in drives)
            {
                var pfsDrive = new FsEntity();

                try
                {
                    pfsDrive.Name = drive.VolumeLabel;
                }
                catch (Exception ex)
                {
                    pfsDrive.Name = ex.Message;
                }

                try
                {
                    pfsDrive.Path = drive.RootDirectory.FullName;
                }
                catch
                {
                    continue;
                }

                retVal.Add(pfsDrive);
            }

            return retVal;
        }
    }

    public class FsQueryProvider : QueryProvider
    {
        internal class FsQueryTranslator : ExpressionVisitor
        {

            private FsQuery Query { get; set; }

            public FsQueryTranslator()
            {
                Query = new FsQuery();
            }

            bool isTakeScope = false;
            bool isOrderByScope = false;
            bool isOrderByDescendingScope = false;
            bool isWhereScope = false;

            internal List<FsEntity> Translate(Expression expression)
            {
                this.Visit(expression);

                return Query.GetResults().ToList();
            }

            private static Expression StripQuotes(Expression e)
            {
                while (e.NodeType == ExpressionType.Quote)
                {
                    e = ((UnaryExpression)e).Operand;
                }

                return e;
            }

            protected override Expression VisitMethodCall(MethodCallExpression m)
            {
                if (m.Method.DeclaringType == typeof(Queryable) && m.Method.Name == "Take")
                {
                    isTakeScope = true;

                    this.Visit(m.Arguments[0]);
                    
                    this.Visit(m.Arguments[1]);

                    isTakeScope = false;

                    return m;

                }

                if (m.Method.DeclaringType == typeof(Queryable) && m.Method.Name == "OrderBy")
                {
                    isOrderByScope = true;

                    this.Visit(m.Arguments[0]);

                    LambdaExpression lambda = (LambdaExpression)StripQuotes(m.Arguments[1]);

                    this.Visit(lambda.Body);

                    isOrderByScope = false;

                    return m;

                }

                if (m.Method.DeclaringType == typeof(Queryable) && m.Method.Name == "OrderByDescending")
                {
                    isOrderByDescendingScope = true;

                    this.Visit(m.Arguments[0]);

                    LambdaExpression lambda = (LambdaExpression)StripQuotes(m.Arguments[1]);

                    this.Visit(lambda.Body);

                    isOrderByDescendingScope = false;

                    return m;

                }

                if (m.Method.DeclaringType == typeof(Queryable) && m.Method.Name == "Where")
                {
                    isWhereScope = true;
                    //sb.Append("SELECT * FROM(");

                    this.Visit(m.Arguments[0]);

                    //sb.Append(") AS T WHERE ");

                    LambdaExpression lambda = (LambdaExpression)StripQuotes(m.Arguments[1]);

                    this.Visit(lambda.Body);

                    isWhereScope = false;
                    return m;
                }

             

                throw new NotSupportedException($"The method { m.Method.Name } is not supported");
            }

            //protected override Expression VisitUnary(UnaryExpression u)
            //{

            //    switch (u.NodeType)
            //    {

            //        case ExpressionType.Not:

            //            //sb.Append(" NOT ");

            //            this.Visit(u.Operand);

            //            break;

            //        default:

            //            throw new NotSupportedException($"The unary operator ‘{u.NodeType}’ is not supported");

            //    }

            //    return u;

            //}

            protected override Expression VisitBinary(BinaryExpression b)
            {
                


                //sb.Append("(");
                this.Visit(b.Left);
                switch (b.NodeType)
                {
                    case ExpressionType.And:
                       // sb.Append(" AND ");
                        break;

                    case ExpressionType.Or:
                        //sb.Append(" OR");
                        break;

                    case ExpressionType.Equal:
                       // sb.Append(" = ");
                        break;

                    case ExpressionType.NotEqual:
                       // sb.Append(" <> ");
                        break;

                    case ExpressionType.LessThan:
                      //  sb.Append(" < ");
                        break;

                    case ExpressionType.LessThanOrEqual:
                       // sb.Append(" <= ");
                        break;

                    case ExpressionType.GreaterThan:
                      //  sb.Append(" > ");
                        break;

                    case ExpressionType.GreaterThanOrEqual:
                       // sb.Append(" >= ");
                        break;

                }

                this.Visit(b.Right);
                //sb.Append(")");
                return b;

            }

            protected override Expression VisitConstant(ConstantExpression c)
            {

                IQueryable q = c.Value as IQueryable;

                if (q != null)
                { 

                }
                else if (c.Value == null)
                {  
                }
                else
                {

                    object container = c.Value;
                    var genericArgs = container.GetType().GetGenericArguments();

                    var props = container.GetType().GetProperties();

                    var value = props[0].GetValue(c.Value);
                }
                return c;
            }

            protected override Expression VisitMember(MemberExpression m)
            {
                if (m.Expression != null && m.Expression.NodeType == ExpressionType.Parameter)
                {
                    if (isOrderByScope) Query.Orders.Add(new FsQuery.OrderPart() { Direction = FsQuery.OrderPart.OrderDirection.Asc, PropertyName = m.Member.Name });
                    if (isOrderByDescendingScope) Query.Orders.Add(new FsQuery.OrderPart() { Direction = FsQuery.OrderPart.OrderDirection.Desc, PropertyName = m.Member.Name });

                    return m;
                }

                if (m.Expression != null && m.Expression.NodeType == ExpressionType.Constant)
                {
                    this.Visit(m.Expression);
                }

                return m;
                 
            }
        }


        public override object Execute(Expression expression)
        {
            return new FsQueryTranslator().Translate(expression);
        }

        public override string GetQueryText(Expression expression)
        {
            throw new NotImplementedException();
        }
    }
    
}
