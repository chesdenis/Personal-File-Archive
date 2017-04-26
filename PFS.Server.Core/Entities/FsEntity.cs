using System;
using System.Collections;
using System.Collections.Generic;
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

            if (seqType.IsGenericType)
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

            if (seqType.BaseType != null && seqType.BaseType != typeof(object))
            {
                return FindIEnumerable(seqType.BaseType);
            }

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

    public class FsQueryProvider : QueryProvider
    {
        internal class FsQueryTranslator : ExpressionVisitor
        {
            private List<FsEntity> QueryResults { get; set; }

            internal FsQueryTranslator()
            {
                QueryResults = new List<FsEntity>();
            }

            internal List<FsEntity> Translate(Expression expression)
            {
                this.Visit(expression);

                return QueryResults;
            }

            protected override Expression VisitMethodCall(MethodCallExpression m)
            {
                Console.WriteLine(m.Method.Name);

                return base.VisitMethodCall(m);
            }

            protected override Expression VisitUnary(UnaryExpression u)
            {
                return base.VisitUnary(u);
            }

            protected override Expression VisitBinary(BinaryExpression b)
            {
                return base.VisitBinary(b);
            }

            protected override Expression VisitConstant(ConstantExpression c)
            {
                return base.VisitConstant(c);
            }

        }


        public override object Execute(Expression expression)
        {
            return Translate(expression);
        }

        public override string GetQueryText(Expression expression)
        {
            throw new NotImplementedException();
        }

        private object Translate(Expression expression)
        {
            return new FsQueryTranslator().Translate(expression);
        }
    }

    //public class FsEntitiesQueryProvider : IQueryProvider
    //{
    //    public IQueryable CreateQuery(Expression expression)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public IQueryable<TElement> CreateQuery<TElement>(Expression expression)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public object Execute(Expression expression)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public TResult Execute<TResult>(Expression expression)
    //    {
    //        throw new NotImplementedException();
    //    }
    //}

    //public class QueryableFsEntities : IQueryable<FsEntity>
    //{

    //    public Expression Expression { get; set; }

    //    public Type ElementType { get; set; }

    //    public IQueryProvider Provider { get; set; }

    //    public IEnumerator<FsEntity> GetEnumerator()
    //    {
    //        throw new NotImplementedException();
    //    }

    //    IEnumerator IEnumerable.GetEnumerator()
    //    {
    //        throw new NotImplementedException();
    //    }
    //}
}
