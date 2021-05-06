// JS goes here

let paxButtons = document.querySelectorAll(".paxNumber");
const quantities = document.querySelectorAll(".qty");
// clone quantities and create an array out of it
let copiedArr = Array.prototype.map.call(quantities, function (quantity) {
  return quantity.cloneNode(true);
});

// calculate the quantities needed according to the number of people
paxButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    quantities.forEach((quantity, index) => {
      quantity.innerText =
        Number(copiedArr[index].innerText) * Number(event.target.innerText);
    });
  });
});
