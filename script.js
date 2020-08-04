//number 1
let snack = document.querySelectorAll(".snack");
let totalDiv = document.querySelector(".total");

let total = 0;

snack.forEach((button) => {
  button.addEventListener("click", () => {
    let price = parseFloat(button.getAttribute("data-price"));
    total += price;
    totalDiv.innerText = `Total: ${total}`;
  });
});



//number2





//number 3
let lightBulb = document.querySelector(".light-bulb");
let onButton = document.querySelector(".on");
let offButton = document.querySelector(".off");
let toggleButton = document.querySelector(".toggle");
let endButton = document.querySelector(".end");

toggleButton.addEventListener("click", () => {
  lightBulb.classList.toggle("turn-on");
});

onButton.addEventListener("click", () => {
  lightBulb.classList.add("turn-on");
});

offButton.addEventListener("click", () => {
  lightBulb.classList.remove("turn-on");
});

endButton.addEventListener("click", () => {
  onButton.disabled = true;
  offButton.disabled = true;
  toggleButton.disabled = true;
  endButton.disabled = true;
});       