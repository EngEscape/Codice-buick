

document.addEventListener("DOMContentLoaded", function () {
  const codigosCorrectos = {
    puzzle: "709153",
    maze: "4391516",
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


});

