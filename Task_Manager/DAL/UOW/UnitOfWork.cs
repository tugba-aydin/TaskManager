using DAL.Contexts;
using DAL.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.UOW
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly TaskManagerContext _context;
        public UnitOfWork(TaskManagerContext context)
        {
            _context = context;
        }
        public void Dispose()
        {
            _context.Dispose();
        }

        public IRepository<T> GetRepository<T>() where T : class
        {
            return new Repository<T>(_context);
        }

        public int SaveChanges()
        {
            return _context.SaveChanges();
        }
    }
}
