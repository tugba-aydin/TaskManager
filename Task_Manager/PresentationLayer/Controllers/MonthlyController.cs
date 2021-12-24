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
    public class MonthlyController : ControllerBase
    {
        private readonly IMonthlyService monthlyService;
        public MonthlyController(IMonthlyService _monthlyService)
        {
            monthlyService = _monthlyService;
        }

        [HttpGet]
        public ActionResult GetMonthlyTask()
        {
            try
            {
                var list = monthlyService.GetAllMonthlyTask();
                return Ok(list);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet("{id}")]
        public ActionResult GetMonthlyTaskById(int id)
        {
            try
            {
                var monthlyTask = monthlyService.GetByIdMonthlyTask(id);
                return Ok(monthlyTask);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public ActionResult AddMonthlyTask([FromBody] Monthly monthly)
        {
            try
            {
                monthlyService.AddMonthlyTask(monthly);
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPut]
        public ActionResult UpdateMonthlyTask([FromBody] Monthly monthly)
        {
            try
            {
                monthlyService.UpdateMonthlyTask(monthly);
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteMonthlyTask(int id)
        {
            try
            {
                monthlyService.DeleteMonthlyTask(id);
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
