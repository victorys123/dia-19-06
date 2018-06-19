//111111111 alert("Bem vindo a pagina dos dois gatos");

//let titulo = document.querySelector("#titulo");

//titulo.classList.add("bemgrande");

//console.log("Classe do HTML adicionada com sucesso")


const certo = document.querySelector("#certo");
const errado = document.querySelector("#errado");

// 1111 function gatoErrado(){
//    alert("GATO ERRADO, CLIQUE NO OUTRO GATO");
//}


function gatoErrado(){
    errado.src = "groselha";
}


function gatoCerto(){
    certo.src = "http://placekitten.com/350/350";
    alert("Parabens clicou no gato certo mas ele foi embora rkx que veio outro");
}

//111111 errado.onclick = gatoErrado;

errado.onmouseenter = gatoErrado;
certo.onclick = gatoCerto;

