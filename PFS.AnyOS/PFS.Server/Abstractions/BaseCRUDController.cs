using PFS.Server.Core.Abstractions;
using Microsoft.AspNetCore.OData;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.Abstractions
{
    public abstract class BaseCRUDController<RepType, EntType> : Controller
        where RepType : PfsCRUDRepository<EntType>
        where EntType : IEntity
    {
        protected readonly RepType Rep;

        protected BaseCRUDController(RepType rep)
        {
            Rep = rep;
        }

        [HttpGet]
        [EnableQuery]
        public virtual IQueryable<EntType> Get()
        {
            return Rep.Get().AsQueryable();
        }

        //[HttpGet]
        //public virtual EntType Get(int key)
        //{
        //    return Rep.Get(key);
        //}

        [HttpPost]
        public virtual IActionResult Post(EntType entity)
        {
            var createdEntity = Rep.Post(entity);
            return Created(Request.Path.Value, createdEntity);
        }

        [HttpPut]
        public virtual IActionResult Put(int key, [FromBody]EntType entity)
        {
            Rep.Put(key, entity);
            return new NoContentResult();
        }

        [HttpDelete]
        public virtual IActionResult Delete(int key)
        {
            Rep.Delete(key);
            return new NoContentResult();
        }
    }
}
