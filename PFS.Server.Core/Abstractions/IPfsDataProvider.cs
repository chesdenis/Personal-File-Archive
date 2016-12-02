using System.Collections.Generic;
using PFS.Server.Core.Entities;

namespace PFS.Server.Core.Abstractions
{
    public interface IPfsDataProvider<T>
    {
        IEnumerable<T> Rows { get; }

        void Add(T entity);
        void Remove(T entity);
        void Update(T entity);
    }
}