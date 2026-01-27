const form = document.querySelector("#form");
const password = document.querySelector("#password");
const button = document.querySelector("#submit");
const formTwo = document.querySelector("#formTwo");
const passwordTwo = document.querySelector("#passwordTwo");
const answer = document.querySelector("#answer");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

formTwo.addEventListener("submit", (event) => {
  event.preventDefault();
});

function formSubmit() {
  if (password.value !== "senha") {
    alert("Senha incorreta");
  } else if (password.value === "easter-egg") {
    alert("Olha só ma oi");
  } else {
    alert("Senha Correta");
    form.classList.add("hidden");
    formTwo.classList.remove("hidden");
  }
}

function formTwoSubmited() {
  if (passwordTwo.value !== "verde") {
    alert("Senha incorreta");
  } else if (passwordTwo.value === "easter-egg  ") {
    alert("Senha incorreta");
  } else {
    alert("Senha Correta");
    formTwo.classList.add("hidden");
    answer.classList.remove("hidden");
  }
}
