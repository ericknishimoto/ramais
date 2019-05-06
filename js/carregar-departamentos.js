//executa a funcao request, passando o endereço do Json, mais uma funcao e a chave da json privada
request(jsonDepartamentos,adicionaDepartamento, key);

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

function filtraDepartamentos(departamento){
    var colaboradores = document.querySelectorAll(".container__card");
    var div = document.querySelector(".container-direita__flex-cards");
    var botaoTodos = document.querySelector("#mostrarTodos");
    var todos = botaoTodos.textContent;

    for (var i = 0; i < colaboradores.length; i++ ){
        var colaborador = colaboradores[i];
        var rotulo = colaborador.querySelector(".info-departamento");
        var departamentoLista = rotulo.textContent;

        if ( departamentoLista != departamento  && departamento != todos){ //expressao.test(value): testa a expressao regular e retorna true or false;
            colaborador.classList.add("invisivel");
        }else if( departamento == "Todos"){
            colaborador.classList.remove("invisivel");
            div.classList.remove("invisivel");
        }else{
            colaborador.classList.remove("invisivel");
            div.classList.remove("invisivel");
        }
    }

}

// function toggleDepartamentos(){
//     var containerDepartamento = document.querySelector(".container-esquerda__departamentos");
//     if (containerDepartamento.style.display == "" || containerDepartamento.style.display == "none"){
//         containerDepartamento.style.display = "block";
//         var botaoDepartamento = document.querySelector(".botao-departamentos");
//         botaoDepartamento.textContent = "Ocultar todos";
//     } else {
//         containerDepartamento.style.display = "none";
//         var botaoDepartamento = document.querySelector(".botao-departamentos");
//         botaoDepartamento.textContent = "Mostar departamentos";
//     }
// }