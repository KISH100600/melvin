function getNames(p1, p2) {
  const head = document.getElementById("head");
  head.style.background = "yellow";
  head.innerText = "Mouse Hovered";
  console.log("it is shown");
}
function resetNames(p1, p2) {
  const head = document.getElementById("head");
  head.style.background = "";
  head.innerText = "Welcome";
  console.log("it is shown");
}

const getData = (p1, p2) => {
  console.log(add(p1, p2));
};

const add = (a, b) => {
  return a + b;
};

const suzuki = {
  name: "suzuki",
  model: 2000,
  color: "red",
  dealer: {
    name: "kish",
    address: "devakottai",
    branches: 2,
    employee: {
      name: "kish",
      id: 1,
      contact: 848483934,
    },
  },
};

console.log(suzuki["dealer"]["employee"]["contact"]);
