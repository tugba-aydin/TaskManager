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
    public class WeeklyService : IWeeklyService
    {
        private readonly IRepository<Weekly> repository;
        private readonly IUnitOfWork unitOfWork;
        public WeeklyService(IRepository<Weekly> _repository, IUnitOfWork _unitOfWork)
        {
            repository = _repository;
            unitOfWork = _unitOfWork;
        }
        public void AddWeeklyTask(Weekly entity)
        {
            repository.Add(entity);
            unitOfWork.SaveChanges();
        }

        public void DeleteWeeklyTask(int id)
        {
            repository.Delete(id);
            unitOfWork.SaveChanges();
        }

        public List<Weekly> GetAllWeeklyTask()
        {
            var list = repository.GetAll();
            return list;
        }

        public Weekly GetByIdWeeklyTask(int id)
        {
            var dailyTask = repository.GetById(id);
            return dailyTask;
        }

        public void UpdateWeeklyTask(Weekly entity)
        {
            repository.Update(entity);
            unitOfWork.SaveChanges();
        }
    }
}
