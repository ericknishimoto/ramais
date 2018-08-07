var campoFiltro = document.querySelector("#filtrar-colaboradores");

campoFiltro.addEventListener("input", function(){ //input: escuta o input de dados;
    
    var colaboradores = document.querySelectorAll(".container__card");
    var div = document.querySelector(".container-direita__flex-cards");

    if ( this.value.length > 0){
        for (var i = 0; i < colaboradores.length; i++ ){
            var colaborador = colaboradores[i];
            var tdNome = colaborador.querySelector(".info-nome");
            var nome = tdNome.textContent;

            var expressao = new RegExp(this.value, "i"); //new RegExp(valor, "i"): cria uma expressao regular, "i" = case insensitive;

            if ( !expressao.test(nome) ){ //expressao.test(value): testa a expressao regular e retorna true or false;
                colaborador.classList.add("invisivel");
            }else{
                colaborador.classList.remove("invisivel");
                div.classList.remove("invisivel");
                colaborador.classList.add("fadeIn");
            }
        }
    }else{
        for (var i = 0; i < colaboradores.length; i++ ){
            var colaborador = colaboradores[i];
            colaborador.classList.remove("invisivel");
        }
    }
})

/*var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){ //input: escuta o input de dados;
    
    var colaboradores = document.querySelectorAll(".colaborador");
    var tabela = document.querySelector(".tabela");

    if ( this.value.length > 0){
        for (var i = 0; i < colaboradores.length; i++ ){
            var colaborador = colaboradores[i];
            var tdNome = colaborador.querySelector(".info-nome");
            var nome = tdNome.textContent;

            var expressao = new RegExp(this.value, "i"); //new RegExp(valor, "i"): cria uma expressao regular, "i" = case insensitive;

            if ( !expressao.test(nome) ){ //expressao.test(value): testa a expressao regular e retorna true or false;
                colaborador.classList.add("invisivel");
            }else{
                colaborador.classList.remove("invisivel");
                tabela.classList.remove("invisivel");
            }
        }
    }else{
        for (var i = 0; i < colaboradores.length; i++ ){
            var colaborador = colaboradores[i];
            colaborador.classList.remove("invisivel");
            tabela.classList.add("invisivel");
        }
    }
})*/