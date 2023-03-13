using Prueba.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace Prueba.Controllers
{
    public class ApiController : System.Web.Http.ApiController
    {
        /// <summary>
        /// Return random numbert and color
        /// </summary>
        /// <returns></returns>
        [System.Web.Http.HttpGet]
        public ActionResult GetRandomNumberAndColor()
        {
            Random random = new Random();

            int number = random.Next(0, 36);
            string color = random.Next(1, 2) == 1 ? "ROJO" : "NEGRO";

            return new JsonResult();
        }

        /// <summary>
        /// Add new user
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [System.Web.Http.HttpPost]
        public ActionResult AddUser([FromBody] User user)
        {
            return new JsonResult();
        }

        public ActionResult GetMontoApuesta(int Monto, string Color, int Numero, string Tipo)
        {

            return new JsonResult();
        }

    }
}
