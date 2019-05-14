using HybridDataAccess.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace HybridDataAccess.Interfaces
{
    public interface IHybridNailPolishesRepository
    {
        List<Inspiration> GetInspirations();
        List<NailPolish> GetNailPolishes();
    }
}
