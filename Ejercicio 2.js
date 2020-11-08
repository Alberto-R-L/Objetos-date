
//Ejercicio 4.15

var fechaHoy = new Date();
var fecha85 = new Date();

fecha85.setDate(fechaHoy.getDate()+85    )

//fechahoy
document.write(fechaHoy.getDate() + "/");
document.write(fechaHoy.getMonth() + "/");
document.write(fechaHoy.getFullYear() + "<br>");

document.write(fechaHoy.getHours() + ":");
document.write(fechaHoy.getMinutes() + ":");
document.write(fechaHoy.getSeconds() + "<br>");

//Fecha 85
document.write("Fecha85 <br>")
document.write(fecha85.getDate() + "/");
document.write(fecha85.getMonth() + "/");
document.write(fecha85.getFullYear() + "<br>");

document.write(fecha85.getHours() + ":");
document.write(fecha85.getMinutes() + ":");
document.write(fecha85.getSeconds() + "<br>");
