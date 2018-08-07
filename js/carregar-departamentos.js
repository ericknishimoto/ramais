request("https://api.jsonbin.io/b/5b5c7c51f24d8943d04f1626/1",adicionaDepartamento);

function toggleDepartamentos(){
    var containerDepartamento = document.querySelector(".container-esquerda__departamentos");
    if (containerDepartamento.style.display == "" || containerDepartamento.style.display == "none"){
        containerDepartamento.style.display = "block";
        var botaoDepartamento = document.querySelector(".botao-departamentos");
        botaoDepartamento.textContent = "Ocultar todos";
    } else {
        containerDepartamento.style.display = "none";
        var botaoDepartamento = document.querySelector(".botao-departamentos");
        botaoDepartamento.textContent = "Mostar departamentos";
    }
}

document.getElementById("mostrarTodos").addEventListener("click", function(){
    filtraDepartamentos(this.textContent);
});

function adicionaDepartamento(dado) {
    var divContainer = montaBotao(dado);
    var containerDepartamento = document.querySelector(".container-esquerda__departamentos");
    containerDepartamento.appendChild(montaBotao(dado.departamentos, "botao"));
}

function montaBotao(dado, classe){
    var button = document.createElement("button");
    button.textContent = dado;
    button.classList.add(classe);
    button.addEventListener("click", function(){
        filtraDepartamentos(button.textContent);
    });
    return button;
}

/*function adicionaUsuarioNaTabela(dado) {
    var usuarioTr = montaTr(dado);
    var tabela = document.querySelector("#tabela-ramais");
    tabela.appendChild(usuarioTr);
}

function montaTr(dado){

    var usuarioTr = document.createElement("tr"); //.createElement: criar um elemento HTML definido em ();
    usuarioTr.classList.add("colaborador");
    usuarioTr.appendChild(montaTd(dado.departamento, "info-departamento")); //.appendChild: insere como filho o definido em ();
    usuarioTr.appendChild(montaTd(dado.nome, "info-nome")); //.appendChild: insere como filho o definido em ();
    usuarioTr.appendChild(montaTd(dado.ramal, "info-ramal")); //.appendChild: insere como filho o definido em ();
    usuarioTr.appendChild(montaTd(dado.celular, "info-celular")); //.appendChild: insere como filho o definido em ();
    return usuarioTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
*/