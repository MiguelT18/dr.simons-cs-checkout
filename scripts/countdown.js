let reloj = localStorage.getItem("contador")
  ? JSON.parse(localStorage.getItem("contador"))
  : {
      day: 8,
      hours: 4,
      minutes: 1,
      seconds: 4,
    };

//Definimos y ejecutamos los segundos
function cargarSegundos() {
  let txtSeconds;

  if (reloj.seconds < 0) {
    reloj.seconds = 59;
  }

  //Mostrar seconds en pantalla
  if (reloj.seconds < 10) {
    txtSeconds = "0" + reloj.seconds;
  } else {
    txtSeconds = reloj.seconds;
  }
  document.getElementById("seconds").innerHTML = txtSeconds;
  reloj.seconds--;

  cargarMinutos(reloj.seconds);

  // Guardar el estado actual en localStorage
  localStorage.setItem("contador", JSON.stringify(reloj));
}

//Definimos y ejecutamos los minutos
function cargarMinutos(seconds) {
  let txtMinutes;

  if (seconds == -1 && reloj.minutes !== 0) {
    setTimeout(() => {
      reloj.minutes--;
    }, 500);
  } else if (seconds == -1 && reloj.minutes == 0) {
    setTimeout(() => {
      reloj.minutes = 59;
    }, 500);
  }

  //Mostrar minutes en pantalla
  if (reloj.minutes < 10) {
    txtMinutes = "0" + reloj.minutes;
  } else {
    txtMinutes = reloj.minutes;
  }
  document.getElementById("minutes").innerHTML = txtMinutes;
  cargarHoras(reloj.seconds, reloj.minutes);

  // Guardar el estado actual en localStorage
  localStorage.setItem("contador", JSON.stringify(reloj));
}

function cargarHoras(seconds, minutes) {
  let txtHours;

  if (seconds == -1 && minutes == 0 && reloj.hours !== 0) {
    setTimeout(() => {
      reloj.hours--;
    }, 500);
  } else if (seconds == -1 && minutes == 0 && reloj.hours !== 0) {
    setTimeout(() => {
      reloj.hours = 2;
    }, 500);
  }

  //Mostrar hours en pantalla
  if (reloj.hours < 10) {
    txtHours = "0" + reloj.hours;
  } else {
    txtHours = reloj.hours;
  }
  document.getElementById("hours").innerHTML = txtHours;
  cargarDias(reloj.seconds, reloj.minutes, reloj.hours);

  // Guardar el estado actual en localStorage
  localStorage.setItem("contador", JSON.stringify(reloj));
}

function cargarDias(seconds, minutes, hours) {
  let txtDays;

  if (seconds == -1 && minutes == 0 && hours == 0 && reloj.day == 0) {
    setTimeout(() => {
      reloj.day--;
    }, 500);
  } else if (seconds == -1 && minutes == 0 && hours == 0 && reloj.day == 0) {
    setTimeout(() => {
      reloj.day = 30;
    }, 500);
  }

  // Mostrar días en pantalla
  if (reloj.day < 10) {
    txtDays = "0" + reloj.day;
  } else {
    txtDays = reloj.day;
  }
  document.getElementById("days").innerHTML = txtDays;

  // Guardar el estado actual en localStorage
  localStorage.setItem("contador", JSON.stringify(reloj));
}

//Ejecutamos cada second
setInterval(cargarSegundos, 1000);
