using System.Collections.Generic;
using PFS.Server.Core.Shared.Entities;

namespace PFS.Server.Core.Shared.Abstractions
{
    public interface IPfsDataProvider<T>
    {
        IEnumerable<T> Rows { get; }

        void Add(T entity);
        void Remove(T entity);
        void Update(T entity);
    }
}