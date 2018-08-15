var campoFiltro = document.querySelector("#filtrar-colaboradores");

campoFiltro.addEventListener("input", function(){ //input: escuta o input de dados;
    
    var usuarios = document.querySelectorAll(".colaborador");

    if ( this.value.length > 0){
        for (var i = 0; i < usuarios.length; i++ ){
            var usuario = usuarios[i];
            var tdNome = usuario.querySelector(".info-nome");
            var nome = removeAcentos(tdNome.textContent);

            var expressao = new RegExp(removeAcentos(this.value), "i"); //new RegExp(valor, "i"): cria uma expressao regular, "i" = case insensitive;

            if ( !expressao.test(nome) ){ //expressao.test(value): testa a expressao regular e retorna true or false;
                usuario.classList.add("invisivel");
            }else{
                usuario.classList.remove("invisivel");
            }
        }
    }else{
        for (var i = 0; i < usuarios.length; i++ ){
            var usuario = usuarios[i];
            usuario.classList.remove("invisivel");
            }
        }

})