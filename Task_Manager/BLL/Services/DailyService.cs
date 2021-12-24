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
   public class DailyService:IDailyService
    {
        private readonly IRepository<Daily> repository;
        private readonly IUnitOfWork unitOfWork;
        public DailyService(IRepository<Daily> _repository,IUnitOfWork _unitOfWork)
        {
            repository = _repository;
            unitOfWork = _unitOfWork;
        }

        public void AddDailyTask(Daily entity)
        {
            repository.Add(entity);
            unitOfWork.SaveChanges();
        }

        public void DeleteDailyTask(int id)
        {
            repository.Delete(id);
            unitOfWork.SaveChanges();
        }

        public List<Daily> GetAllDailyTask()
        {
            var list=repository.GetAll();
            return list;
        }

        public Daily GetByIdDailyTask(int id)
        {
            var dailyTask=repository.GetById(id);
            return dailyTask;
        }

        public void UpdateDailyTask(Daily entity)
        {
            repository.Update(entity);
            unitOfWork.SaveChanges();
        }
    }
}
