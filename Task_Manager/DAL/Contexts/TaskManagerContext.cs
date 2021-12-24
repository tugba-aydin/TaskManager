using DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Contexts
{
    public class TaskManagerContext:DbContext
    {
        DbSet<Daily> Dailies { get; set; }
        DbSet<Weekly> Weeklies { get; set; }
        DbSet<Monthly> Monthlies { get; set; }

        public TaskManagerContext(DbContextOptions<TaskManagerContext> options) : base(options)
        {

        }
    }
}
