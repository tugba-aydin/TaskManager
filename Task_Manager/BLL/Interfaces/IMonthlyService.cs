using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Interfaces
{
   public interface IMonthlyService
    {
        void AddMonthlyTask(Monthly entity);
        void DeleteMonthlyTask(int id);
        List<Monthly> GetAllMonthlyTask();
        Monthly GetByIdMonthlyTask(int id);
        void UpdateMonthlyTask(Monthly entity);
    }
}
