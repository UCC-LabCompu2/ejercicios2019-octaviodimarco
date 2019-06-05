/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function saludar() {
  alert("Hello world");
}

function convertir(id_elem, valor_elem) {
  if (isNaN(valor_elem)) {
    alert("El valor " + id_elem + " debe ser numerico");
    document.getElementById(id_elem).value = "";
  }

  if (!isNaN(valor_elem)) {
    if (id_elem == "metro") {
      document.getElementById("pulgada").value = valor_elem * 39.3701;
      document.getElementById("pie").value = valor_elem * 3.28084;
      document.getElementById("yarda").value = valor_elem * 1.09361;
    }
    if (id_elem == "pulgada") {
      document.getElementById("metro").value = valor_elem * 0.0254;
      document.getElementById("pie").value = valor_elem * 0.08333;
      document.getElementById("yarda").value = valor_elem * 0.0277778;
    }

    if (id_elem == "pie") {
      document.getElementById("metro").value = valor_elem * 0.3048;
      document.getElementById("pulgada").value = valor_elem * 12;
      document.getElementById("yarda").value = valor_elem * 0.333333;
    }

    if (id_elem == "yarda") {
      document.getElementById("pulgada").value = valor_elem * 36;
      document.getElementById("pie").value = valor_elem * 3;
      document.getElementById("metro").value = valor_elem * 0.9144;
    }
  }
}

function dibujarCircCuad() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "#1845ac";
  ctx.beginPath();
  ctx.rect(0, 0, 30, 40);
  ctx.fill();
  ctx.closePath();

  ctx.fillStyle = "#af3679";
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 30, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}

function Cuadriculado() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#000";
  ctx.beginPath();

  for (var i = 10; i < canvas.width; i += 10) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
  }
  for (var i = 10; i < canvas.height; i += 10) {
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
  }
  ctx.stroke();
  ctx.closePath();
}

function dibujarImg(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    var img = new Image();
    img.src = "images/auto.png";

    ctx.drawImage(img, 20, 20);
}