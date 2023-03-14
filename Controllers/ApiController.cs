using Microsoft.Ajax.Utilities;
using Prueba.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics.Eventing.Reader;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mime;
using System.Web.Http;
using System.Web.Mvc;

namespace Prueba.Controllers
{
    //[System.Web.Http.Route("[controller]")]
    public class ApiController : System.Web.Http.ApiController
    {
        pruebaEntities pruebaEntities = new pruebaEntities();
        private Dictionary<int, string> Elements = new Dictionary<int, string>()
        {
                { 0, "Verde" },
                { 32, "Rojo"},
                { 15, "Negro"},
                { 19, "Rojo" },
                { 4, "Negro" },
                { 21, "Rojo" },
                { 2, "Negro" },
                { 25, "Rojo" },
                { 17, "Negro"},
                { 34, "Rojo" },
                { 6, "Negro" },
                { 27, "Rojo" },
                { 13, "Negro"},
                { 36, "Rojo" },
                { 11, "Negro"},
                { 30, "Rojo" },
                { 8, "Negro" },
                { 23, "Rojo" },
                { 10, "Negro"},
                { 5, "Rojo"},
                { 24, "Negro"},
                { 16, "Rojo"},
                { 33, "Negro"},
                { 1, "Rojo"},
                { 20, "Negro"},
                { 14, "Rojo"},
                { 31, "Negro"},
                { 9, "Rojo"},
                { 22, "Negro"},
                { 18, "Rojo"},
                { 29, "Negro"},
                { 7, "Rojo"},
                { 28, "Negro"},
                { 12, "Rojo"},
                { 35, "Negro"},
                { 3, "Rojo"},
                { 26, "Negro" }
        };

        /// <summary>
        /// Return random numbert and color
        /// </summary>
        /// <returns></returns>
        public ActionResult GetRandomNumberAndColor()
        {
            Random random = new Random();
            int number = random.Next(0, 36);

            var ele = Elements.ToList().Find(a => a.Key == number);

            return new JsonResult() { Data = new { Number = ele.Key, Color = ele.Value }, JsonRequestBehavior = JsonRequestBehavior.AllowGet, ContentType = "application/json;charset=utf-8" };
        }

        /// <summary>
        /// Add new user
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [System.Web.Http.HttpPost]
        public ActionResult AddUser([FromBody] UserDTO user)
        {
            try
            {
                if (pruebaEntities.User.Where(a => a.Name == user.Name).ToList().Count() > 0)
                {
                    return new JsonResult() { Data = new { state = false, errorMessage = "Ya existe un usuario con este nombre" }, JsonRequestBehavior = JsonRequestBehavior.AllowGet, ContentType = "application/json;charset=utf-8" };
                }

                pruebaEntities.User.Add(new Prueba.User()
                {
                    Name = user.Name,
                    Monto = user.Monto,
                });
                pruebaEntities.SaveChanges();
                return new JsonResult() { Data = new { state = true, value = "value" }, JsonRequestBehavior = JsonRequestBehavior.AllowGet, ContentType = "application/json;charset=utf-8" };
            }
            catch (Exception exec)
            {
                return new JsonResult() { Data = new { state = false, errorMessage = exec.Message }, JsonRequestBehavior = JsonRequestBehavior.AllowGet, ContentType = "application/json;charset=utf-8" };
            }
        }

        /// <summary>
        ///  Retorna el monto ganado de la apuesta
        /// </summary>
        /// <param name="TipoApuesta"></param>
        /// <param name="Monto"></param>
        /// <param name="Color"></param>
        /// <param name="Tipo"></param>
        /// <param name="Numero"></param>
        /// <param name="RandomNumber"></param>
        /// <returns></returns>
        [System.Web.Http.HttpGet]
        public ActionResult GetMontoApuesta(int TipoApuesta, int Monto, string Color, string Tipo, int Numero, int RandomNumber)
        {
            try
            {
                JsonResult jsonResult = new JsonResult() { Data = new { }, JsonRequestBehavior = JsonRequestBehavior.AllowGet, ContentType = "application/json;charset=utf-8" };
                var ele = Elements.ToList().Find(a => a.Key == RandomNumber);
                double Resultado = 0.00;

                if (Monto <= 0 && Color == "")
                {
                    jsonResult.Data = new { state = false, errorMessage = "EL monto debe ser mayor que 0 y el color es obligatorio" };
                    return jsonResult;
                };

                switch (TipoApuesta)
                {
                    case 1:
                        if (Color == ele.Value) Resultado = Monto / 2;
                        break;
                    case 2:
                        if (Tipo != "PAR" && Tipo != "INPAR")
                        {
                            jsonResult.Data = new { state = false, errorMessage = "" };
                            return jsonResult;
                        };

                        if (Color == ele.Value)
                        {
                            if (Tipo == "PAR" && ele.Key % 2 == 0) Resultado = Monto;
                            if (Tipo == "INPAR" && ele.Key % 2 != 0) Resultado = Monto;
                        }
                        break;
                    case 3:

                        if (Numero < 0 || Numero > 36)
                        {
                            jsonResult.Data = new { state = false, errorMessage = "El numero de la apuesta esta fuera de rango" };
                            return jsonResult;
                        };

                        if (Color == ele.Value && Numero == ele.Key) Resultado = Monto * 3;

                        break;
                }

                return new JsonResult() { Data = new { state = true, montoGanado = Resultado }, JsonRequestBehavior = JsonRequestBehavior.AllowGet, ContentType = "application/json;charset=utf-8" };
            }
            catch (Exception exec)
            {
                return new JsonResult() { Data = new { state = false, errorMessage = exec.Message }, JsonRequestBehavior = JsonRequestBehavior.AllowGet, ContentType = "application/json;charset=utf-8" };
            }
        }

    }
}
