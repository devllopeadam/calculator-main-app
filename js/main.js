// Declare all the variables

const HTML = document.querySelector("html");
const toggler = document.querySelector(".toggler-box");
const buttons = [...document.querySelector(".main-calculator__keypad").children];
const numbersOperators = document.querySelectorAll(".show");
const input = document.querySelector("input");
const del = document.querySelector(".del");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equal");

numbersOperators.forEach(key => key.onclick = () => showValue(key));
del.onclick = () => delValue();
reset.onclick = () => resetValue();
equal.onclick = () => result();

// For the theme

toggler.onclick = () => {
  makeTheme(toggler);
};
function makeTheme(toggler) {
  if (toggler.dataset.toggler === "theme1") {
    toggler.dataset.toggler = "theme2";
    HTML.dataset.theme = 'theme2';
  } else if (toggler.dataset.toggler === "theme2") {
    toggler.dataset.toggler = "theme3";
    HTML.dataset.theme = 'theme3';
  } else {
    toggler.dataset.toggler = "theme1";
    HTML.dataset.theme = 'theme1';
  }
}

// For the animation on click on a button
buttons.forEach(btn => {
  btn.onmousedown = () => {
    btn.classList.add("active");
  };
  btn.onmouseup = () => {
    btn.classList.remove('active');
  };
});


// all the function for the buttons

function resetValue() {
  input.value = "";
}

function delValue() {
  value = input.value;
  input.value = input.value.slice(0, value.length - 1);
}

function showValue(key) {
  input.value += key.dataset.value;
}

function result() {
  value = eval(input.value.replaceAll("x", "*").replaceAll(",", "."));
  input.value = value.toString().replaceAll(".", ",");
}