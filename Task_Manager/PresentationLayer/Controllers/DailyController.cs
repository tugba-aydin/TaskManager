using BLL.Interfaces;
using DAL.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PresentationLayer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DailyController : ControllerBase
    {
        private IDailyService dailyService;
        public DailyController(IDailyService _dailyService)
        {
            dailyService = _dailyService;
        }

        [HttpGet]
        public ActionResult GetDailyTask()
        {
            try
            {
                var list = dailyService.GetAllDailyTask();
                return Ok(list);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet("{id}")]
        public ActionResult GetDailyTaskById(int id)
        {
            try
            {
                var dailyTask = dailyService.GetByIdDailyTask(id);
                return Ok(dailyTask);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public ActionResult AddDailyTask([FromBody] Daily daily)
        {
            try
            {
                dailyService.AddDailyTask(daily);
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPut]
        public ActionResult UpdateDailyTask([FromBody] Daily daily)
        {
            try
            {
                dailyService.UpdateDailyTask(daily);
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteDailyTask(int id)
        {
            try
            {
                dailyService.DeleteDailyTask(id);
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
