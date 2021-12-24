using DAL.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repository
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly TaskManagerContext _context;
        private readonly DbSet<T> table;

        public Repository(TaskManagerContext context)
        {
            _context = context;
            table = _context.Set<T>();
        }
        public void Add(T entity)
        {
            table.Add(entity);
        }

        public void Delete(int id)
        {
            T existing = table.Find(id);
            table.Remove(existing);
        }

        public List<T> GetAll()
        {
            return table.ToList();
        }

        public T GetById(int id)
        {
            return table.Find(id);
        }

        public void Update(T entity)
        {
            table.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
        }
    }
}
