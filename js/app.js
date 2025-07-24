document.addEventListener("DOMContentLoaded", function () {
  const codigosCorrectos = {
    puzzle: "351907",
    maze: "569878",
    binari: "05012125",
    difference: "35573",
    sequence: "741239",
  };

  function verificarCodigos() {
    let todosCorrectos = true;

    for (let key in codigosCorrectos) {
      const input = document.getElementById(key);
      const icon = document.getElementById("icon-" + key);
      if (input.value.trim() === codigosCorrectos[key]) {
        input.className = "correct";
        icon.textContent = "✔️";
        icon.className = "icon success";
      } else {
        input.className = "incorrect";
        icon.textContent = "❌";
        icon.className = "icon error";
        todosCorrectos = false;
      }
    }

    const result = document.getElementById("result");
    if (todosCorrectos) {
      result.textContent = "✅ CODICE liberado. Clave de AURORA es 18061956.";
      result.style.color = "green";
    } else {
      result.textContent = "❌ Algunos códigos son incorrectos. Intenta de nuevo.";
      result.style.color = "red";
    }
  }

  const button = document.querySelector("button");
  button.addEventListener("click", verificarCodigos);


let totalSeconds = 45 * 60;
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  countdownElement.textContent = `Tiempo restante: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    clearInterval(timer);
    countdownElement.textContent = "⏰ Tiempo finalizado";
  }
}

const timer = setInterval(updateCountdown, 1000);

  
});
