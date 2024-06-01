let lista = [];
let ul = document.getElementById("lista");

function cadastra_lista() {
    let p = document.getElementById("i_lista").value;

    if(p === undefined || p === "" || p === null || p.length < 3){
        return alert('Por favor digite um nome valido')
    }

    lista.push(p)

    document.getElementById("i_lista").value = "";
    desenha_lista();
}

function remove_lista() {
    let p = document.getElementById("i_lista").value;
    let index = lista.findIndex(item => item === p);

    lista.splice(index, 1);

    document.getElementById("i_lista").value = "";
    desenha_lista();
}

function desenha_lista() {
    ul.innerHTML = "";
    for (let x = 0; x < lista.length; x++) {
        ul.innerHTML += `<li> ${lista[x]} </li>`;
    }
}

function show_div() {
    let cont = document.getElementById("conteudo");
    console.log(cont)
    if (cont.style.visibility == "visible") {
        return cont.style.visibility = "hidden";
    }

    cont.style.visibility = "visible";
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('i_lista').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Impede o comportamento padrão de submissão do formulário
            cadastra_lista(); // Chama a função add() quando Enter é pressionado
        }
    });
});