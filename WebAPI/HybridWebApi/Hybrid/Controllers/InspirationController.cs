﻿using System;
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
    public class InspirationController : ControllerBase
    {
        private IHybridNailPolishesRepository _hybridNailPolishes;

        public InspirationController(IHybridNailPolishesRepository hybridNailPolishes)
        {
            _hybridNailPolishes = hybridNailPolishes;
        }

        [HttpGet]
        public IActionResult GetAllInspirations()
        {
            var inspirations = _hybridNailPolishes.GetInspirations();
            return Ok(inspirations);
        }
    }
}