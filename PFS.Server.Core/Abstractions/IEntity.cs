﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.Core.Abstractions
{
    public interface IEntity
    {
        int Id { get; set; }
        string Name { get; set; }
    }
}
