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
  if (password.value !== "social") {
    alert("Senha incorreta");
    password.value = "";
  } else if (password.value === "easteregg") {
    alert("Olha só ma oi");
  } else {
    alert("Senha Correta");
    form.classList.add("hidden");
    formTwo.classList.remove("hidden");
  }
}

function formTwoSubmited() {
  if (passwordTwo.value !== "636f736d6f73") {
    alert("Senha incorreta");
    password.value = "";
  } else if (passwordTwo.value === "easter-egg  ") {
    alert("Senha incorreta");
  } else {
    alert("Senha Correta");
    formTwo.classList.add("hidden");
    answer.classList.remove("hidden");
  }
}

console.log("As vezes a vida pode dar voltas    ");






