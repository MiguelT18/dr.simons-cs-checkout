const w = window;
const d = document;

w.addEventListener("DOMContentLoaded", () => {
  let totalSegundos = 9 * 24 * 60 * 60;

  const intervalID = setInterval(() => {
    totalSegundos--;

    const dias = Math.floor(totalSegundos / (24 * 60 * 60));
    const horas = Math.floor((totalSegundos % (24 * 60 * 60)) / (60 * 60));
    const minutos = Math.floor(totalSegundos % (60 * 60)) / 60;
    const segundos = Math.floor(totalSegundos % 60);

    d.getElementById(
      "countdown"
    ).innerText = `${dias} ${horas} ${minutos} ${segundos}`;

    if (totalSegundos === 0) {
      clearInterval(intervalID);
    }
  }, 1000);
});
