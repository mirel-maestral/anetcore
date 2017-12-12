using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    public class MathController : Controller
    {
        // GET api/values
    
        [HttpPost("add")]
        public IActionResult Add([FromBody] Data data)
        {
            var result = data.Number1 + data.Number2;
            return Ok(new ResultWrapper() { Result = result });
        }
               
    }

    public class Data
    {
        public int Number1 { get; set; }

        public int Number2 { get; set; }
    }

    public class ResultWrapper
    {
        public int Result { get; set; }
    }
}
