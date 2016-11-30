using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.Core.Abstractions
{
    public interface IPfsODataTable<T> where T : IEntity
    {
        IEnumerable<T> Rows { get; }
        void Add(T entity);
        void Update(T entity);
        void Remove(T entity);
    }
}
