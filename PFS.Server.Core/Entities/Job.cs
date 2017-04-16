using PFS.Server.Core.Abstractions;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PFS.Server.Core.Entities
{
    public enum JobStatus
    {
        NotStarted,
        InProgress,
        Done
    }

    public class Job : IEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }

        public JobStatus Status { get; set; }
        public DateTime? Started { get; set; }
        public DateTime? Finished { get; set; }
        public int? PlannedActionsCount { get; set; }
        public int? CompletedActionsCount { get; set; }
    }
}
