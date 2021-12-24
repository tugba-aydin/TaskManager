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
    public class WeeklyController : ControllerBase
    {
        private readonly IWeeklyService weeklyService;
        public WeeklyController(IWeeklyService _weeklyService)
        {
            weeklyService = _weeklyService;
        }

        [HttpGet]
        public ActionResult GetWeeklyTasks()
        {
            try
            {
                var list = weeklyService.GetAllWeeklyTask();
                return Ok(list);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet("{id}")]
        public ActionResult GetWeeklyTaskById(int id)
        {
            try
            {
                var weeklyTask = weeklyService.GetByIdWeeklyTask(id);
                return Ok(weeklyTask);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public ActionResult AddWeeklyTask([FromBody] Weekly weekly)
        {
            try
            {
                weeklyService.AddWeeklyTask(weekly);
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPut]
        public ActionResult UpdateWeeklyTask([FromBody] Weekly weekly)
        {
            try
            {
                weeklyService.UpdateWeeklyTask(weekly);
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteWeeklyTask(int id)
        {
            try
            {
                weeklyService.DeleteWeeklyTask(id);
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}

