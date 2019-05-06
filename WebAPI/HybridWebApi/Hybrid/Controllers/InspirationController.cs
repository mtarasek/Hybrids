using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HybridDataAccess.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HybridWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InspirationController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllInspirations()
        {
            var repo = new HybridNailPolishesRepository();
            var inspirations = repo.GetInspirations();
            return Ok(inspirations);
        }
    }
}