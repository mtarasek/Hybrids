using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HybridDataAccess.Interfaces;
using HybridDataAccess.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HybridWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NailPolishController : ControllerBase
    {
        private IHybridNailPolishesRepository _hybridNailPolishes;
        public NailPolishController(IHybridNailPolishesRepository hybridNailPolishes)
        {
            _hybridNailPolishes = hybridNailPolishes;
        }
        [HttpGet]
        public IActionResult GetAllNailPolish()
        {
            var hybrids = _hybridNailPolishes.GetNailPolishes();
            return Ok(hybrids);
        }
    }

}