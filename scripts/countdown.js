let fechaFinal = new Date("2023-06-30T00:00:00"); // Fecha y hora final

function actualizarContador() {
  let ahora = new Date();
  let diferencia = fechaFinal - ahora; // Diferencia en milisegundos

  // Si la diferencia es negativa, el tiempo ha pasado
  if (diferencia < 0) {
    diferencia = 0;
  }

  let segundos = Math.floor(diferencia / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  // Actualizar los elementos de la página con los nuevos valores
  document.getElementById("seconds").innerHTML = segundos % 60;
  document.getElementById("minutes").innerHTML = minutos % 60;
  document.getElementById("hours").innerHTML = horas % 24;
  document.getElementById("days").innerHTML = dias;
}

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);
