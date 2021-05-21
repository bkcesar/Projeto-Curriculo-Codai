var nome = "Moises Benites";
var cargo = "Operador CNC";

var nomeHtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");


function colocarNomeNoHtml(nome) {
nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo) {
    cargoHtml.innerHTML = cargo ;
}


function logarNome() {
    console.log(nome);
}

function cliqueNoProjeto() {
    console.log("Clicou no botão projeto");
    texto2.style.display ="block";
    texto1.style.display = "none";
}

function cliqueNoSobre() {
    console.log("Clicou no botão sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";

}


colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);


