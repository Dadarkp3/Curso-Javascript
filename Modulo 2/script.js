var squareDiv = document.getElementById("squares");

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
var newColor = getRandomColor(); // #E943F0

function createSquare() {
  var square;
  square = document.createElement("div");
  square.classList.add("square");
  square.onmouseover = changeColor;
  squareDiv.appendChild(square);
}

function changeColor(event) {
  event.target.style.background = getRandomColor();
}

function createStudent(nome) {
  var student = document.createElement("li");
  student.innerText = nome;
  students.appendChild(student);
}

var students = document.getElementById("students");
var nomes = ["Diego", "Gabriel", "Lucas"];
nomes.forEach(nome => {
  createStudent(nome);
});

var input = document.querySelector("input");

function adicionar() {
  createStudent(input.value);
  input.value = "";
}
