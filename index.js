const formTextarea = document.getElementById("form__textarea");
const asideTextarea = document.getElementById("aside__textarea");
const encryptButton = document.getElementById("article__encrypt-btn");
const decryptButton = document.getElementById("article__decrypt-btn");
const asideTitle = document.getElementById("aside__title");
const asideDescription = document.getElementById("aside__description");
const asideClipboard = document.getElementById("aside__clipboard");

// Funcion para encritar el mensaje
function encryptMessage (e) {
  let word = e.value.replace(
    // Tomo las posibles opciones
    /(a)|(e)|(i)|(o)|(u)/g,
    (_, regex1, regex2, regex3, regex4, regex5) => {
     // comprubo, si matchea, remplazo por el string
     if (regex1) return "ai"
     if (regex2) return "enter"
     if (regex3) return "imes"
     if (regex4) return "ober"
     if (regex5) return "ufat"
    }
  )
  // seteo el texto del textarea con lo que devuelva
  // el método replace
  asideTextarea.innerHTML = word
}

// Function para desencriptar el mensaje
function decryptMessage (e) {
  let word = e.value.replace(
    // Tomo las posibles opciones
    /(ai)|(enter)|(imes)|(ober)|(ufat)/g,
    (_, regex1, regex2, regex3, regex4, regex5) => {
     // comprubo, si matchea, remplazo por el string
     if (regex1) return "a"
     if (regex2) return "e"
     if (regex3) return "i"
     if (regex4) return "o"
     if (regex5) return "u"
    }
  )
  // seteo el texto del textarea con lo que devuelva
  // el método replace
  asideTextarea.innerHTML = word
}

// Function que oculta los elementos del aside cuando se ingresa algun texto
function hideElement() {
  if (formTextarea.value !== "") {
    asideTitle.style.display = "none";
    asideDescription.style.display = "none";
    asideTextarea.style.display = "block";
    asideClipboard.style.display = "block";
  } else {
    asideTitle.style.display = "block";
    asideDescription.style.display = "block";
    asideTextarea.style.display = "none";
    asideClipboard.style.display = "none";
  }
}

// Función que copia el texto encriptado o
// desencriptado al portapapeles
function copyToClipboard(elementId) {
  // Obtenemos el elemento pasado a la función
  const copyText = document.getElementById(elementId);
  // corroboramos que el elemento tenga algo que copiar
  if (copyText.value !== "") {
    // se copia el texto que haya en el el capo de texto
    navigator.clipboard
      .writeText(copyText.textContent)
      .then(() => alert("Copied to clipboard"))
      .catch(() => console.error("Something failed"));
    // se manda un alerta con el texto copiado
    // se corta la ejecución para que no pase al siguiente alert
    return;
  }
  // si no hay nada que copiar en el campo de texto
  // se envía un alert pertinenete
  alert("Nothing to copy to clipboard");
}

encryptButton.onclick = () => encryptMessage(formTextarea);
decryptButton.onclick = () => decryptMessage(formTextarea);
asideClipboard.onclick = () => copyToClipboard(asideTextarea.id);
formTextarea.onchange = hideElement;

