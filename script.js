const buttons = document.querySelectorAll(".button"); // store the node list
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target);
    if (event.target.id === "gray") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "black") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "blue") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "yellowgreen") {
      body.style.backgroundColor = event.target.id;
    }
  });
});
