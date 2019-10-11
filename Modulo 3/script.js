function checaIdade(idade) {
  return new Promise(function(resolve, reject) {
    if (idade >= 18) {
      return resolve("Worked fine");
    } else {
      return reject("Fuck!");
    }
  });
}

checaIdade(12)
  .then(function() {
    console.log("Maior que 18");
  })
  .catch(function() {
    console.log("Menor que 18");
  });

function search() {
  var input = document.querySelector("input");
  var ul = document.querySelector("ul");
  ul.appendChild(createElementandText("li", "Carregando..."));
  axios
    .get("https://api.github.com/users/" + input.value + "/repos")
    .then(function(response) {
      ul.innerHTML = "";
      for (repo of response.data) {
        ul.appendChild(createElementandText("li", repo.name));
      }
    })
    .catch(function(error) {
      console.warn(error);
    });
}

function createElementandText(element, text) {
  var li = document.createElement("li");
  li.innerText = text;
  return li;
}
