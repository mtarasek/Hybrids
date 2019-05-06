using HybridDataAccess.Context;
using HybridDataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HybridDataAccess.Repositories
{
    public class HybridNailPolishesRepository
    {
        public List<Inspiration> GetInspirations()
        {
            using (var dbContext = new HybridDataAccessContext())
            {
                return dbContext.Inspirations.ToList();
            }
        }
    }
}
