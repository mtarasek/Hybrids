using HybridDataAccess.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;


namespace HybridDataAccess.Context
{
    public class HybridDataAccessContext : DbContext
    {
        public DbSet<NailPolish> NailPolishes { get; set; }
        public DbSet<Inspiration> Inspirations { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=DESKTOP-8TQ2GIH\SQLEXPRESS;Initial Catalog=HybidNailPolishes;Integrated Security=True");
        }
    }
}
