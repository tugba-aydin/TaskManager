using DAL.Models;
using DAL.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Interfaces
{
    public interface IWeeklyService
    {
        void AddWeeklyTask(Weekly entity);
        void DeleteWeeklyTask(int id);
        List<Weekly> GetAllWeeklyTask();
        Weekly GetByIdWeeklyTask(int id);
        void UpdateWeeklyTask(Weekly entity);
    }
}
