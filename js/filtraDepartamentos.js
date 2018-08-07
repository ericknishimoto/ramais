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



/*campoFiltro.addEventListener("input", function(){ //input: escuta o input de dados;
    
    var pacientes = document.querySelectorAll(".paciente");

    if ( this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++ ){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            var expressao = new RegExp(this.value, "i"); //new RegExp(valor, "i"): cria uma expressao regular, "i" = case insensitive;

            if ( !expressao.test(nome) ){ //expressao.test(value): testa a expressao regular e retorna true or false;
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for (var i = 0; i < pacientes.length; i++ ){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
            }
        }

})*/