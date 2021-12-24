using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Interfaces
{
   public interface IDailyService
    {
        void AddDailyTask(Daily entity);
        void DeleteDailyTask(int id);
        List<Daily> GetAllDailyTask();
        Daily GetByIdDailyTask(int id);
        void UpdateDailyTask(Daily entity);
    }
}
