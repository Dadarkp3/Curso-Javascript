var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

function callAdress() {
  return `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.cidade}, na rua "${endereco.rua}" com nº ${endereco.numero}.`;
}

console.log(callAdress());

function pares(x, y) {
  for (x; x <= y; x++) {
    if (x % 2 == 0) {
      console.log(x);
    }
  }
}
//pares(32, 321);

function temHabilidade(skills) {
  return skills.includes("Javascript");
}
var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills)); // true ou false

function experiencia(anos) {
  if (anos <= 1) {
    return "Iniciante";
  } else if (anos > 1 && anos <= 3) {
    return "Intermediários";
  } else if (anos > 3 && anos <= 6) {
    return "Avançado";
  } else {
    return "Jedi Master";
  }
}
var anosEstudo = 7;
console.log(experiencia(anosEstudo));
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function listUsers() {
  for (let i = 0; i < usuarios.length; i++) {
    console.log(
      `O ${usuarios[i].nome} possui as habilidades: ${usuarios[
        i
      ].habilidades.join(", ")}`
    );
  }
}
listUsers();
