using BLL.Interfaces;
using DAL.Models;
using DAL.Repository;
using DAL.UOW;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class MonthlyService : IMonthlyService
    {
        private readonly IRepository<Monthly> repository;
        private readonly IUnitOfWork unitOfWork;

        public MonthlyService(IRepository<Monthly> _repository, IUnitOfWork _unitOfWork)
        {
            repository = _repository;
            unitOfWork = _unitOfWork;
        }
        public void AddMonthlyTask(Monthly entity)
        {
            repository.Add(entity);
            unitOfWork.SaveChanges();
        }

        public void DeleteMonthlyTask(int id)
        {
            repository.Delete(id);
            unitOfWork.SaveChanges();
        }

        public List<Monthly> GetAllMonthlyTask()
        {
            var list = repository.GetAll();
            return list;
        }

        public Monthly GetByIdMonthlyTask(int id)
        {
            var dailyTask = repository.GetById(id);
            return dailyTask;
        }

        public void UpdateMonthlyTask(Monthly entity)
        {
            repository.Update(entity);
            unitOfWork.SaveChanges();
        }
    }
}
