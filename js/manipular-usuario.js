var botaoAdicionar = document.querySelector("#adicionar-usuario");

botaoAdicionar.addEventListener("click", function(){ //.addEventListener: adiciona um escutador de evento definido em ("evento", function *anonima ou ñ*);    
    event.preventDefault(); // event.preventDefault: previne o evento padrão do comportamento do browser;
    
    if (cadastrandoUsuario) { //Se esta cadastrando usuario faça

        var form = document.querySelector("#form-adiciona");
        var usuario = obtemUsuarioDoFormulario(form);
        var erros = validaUsuario(usuario);

        if (erros.length > 0){
            exibeMensagensDeErro(erros);    
            return; // return vazio, da um break na function;
        }
    
        listaInicialDeEnvio = adicionaUsuarioLista(listaInicial,usuario);
        enviarParaJson(listaInicialDeEnvio);
        document.getElementById('id02').style.display='none';
        document.getElementById('id03').style.display='block';
    
        form.reset(); //Limpa o formulário
    
        var mensagemErro = document.querySelector("#mensagens-erro");
        mensagemErro.innerHTML = "" ;// .innerHTML: controlar html dentro de um elemento;
    
        apagaTabela();
        apagaBuscar();
        request(jsonColaboradores,listaInicialUsuario, key);

    } else { //alterando usuario

        var form = document.querySelector("#form-adiciona");
        var usuario = obtemUsuarioDoFormulario(form);
    
        var erros = validaUsuario(usuario);
    
        
        if (erros.length > 0){
            exibeMensagensDeErro(erros);  
            return; // return vazio, da um break na function;
        }

        for ( var i = 0; i < listaInicial.length; i++) { //adicionar os campos do for no array
            if (listaInicial[i].nome == nomeHidden.value){
            
                var nome = document.querySelector("#nome");
                listaInicial[i].nome = nome.value;
    
                var select = document.getElementById("departamento");
                var departamento = select.options[select.selectedIndex].value;
                listaInicial[i].departamento = departamento; 
    
                var ramal = document.querySelector("#ramal");
                listaInicial[i].ramal = ramal.value;
    
                var celular = document.querySelector("#celular");
                listaInicial[i].celular = celular.value;
                
            break;
            }
        }

        enviarParaJson(listaInicial);
    
        document.getElementById('id02').style.display='none';
        document.getElementById('id05').style.display='block';
    
        form.reset(); //Limpa o formulário
    
        var mensagemErro = document.querySelector("#mensagens-erro");
        mensagemErro.innerHTML = "" ;// .innerHTML: controlar html dentro de um elemento;
    
        apagaTabela();
        apagaBuscar();
        request(jsonColaboradores,listaInicialUsuario, key);

    }

}); 

function adicionaUsuarioLista(array,usuario){
    array.push(usuario);
    return array;
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "" ;// .innerHTML: controlar html dentro de um elemento;

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemUsuarioDoFormulario(form){

    var usuario = { //Criação de Objeto
        nome: form.nome.value, //.value: captura o valor;
        departamento: form.departamento.value,
        ramal: form.ramal.value,
        celular: form.celular.value,
        nomeHidden: form.nomeHidden.value,
    }

    return usuario;
}

function validaUsuario(usuario) {

    var erros =[];

    if (usuario.nome.length == 0){
        erros.push("O nome não estar em branco.")
    }
    if (usuario.departamento.length == 0){
        erros.push("O departamento não estar em branco.")
    }
    if (usuario.ramal.length == 0){
        erros.push("O ramal não estar em branco.")       
    }

    return erros;
}

function alteraUsuario(nome){

    for ( var i = 0; i < listaInicial.length; i++) {

        if (listaInicial[i].nome == nome){
            var nome = document.querySelector("#nome");
            nome.value = listaInicial[i].nome;

            var nome = document.querySelector("#nomeHidden");
            nomeHidden.value = listaInicial[i].nome;

            var departamento = document.querySelector("#departamento-item");
            departamento.textContent = listaInicial[i].departamento;

            var ramal = document.querySelector("#ramal");
            ramal.value = listaInicial[i].ramal;

            var celular = document.querySelector("#celular");
            celular.value = listaInicial[i].celular;

            document.getElementById('id02').style.display='block';

            cadastrandoUsuario = false;
        }
    }
    
}

function apagarUsuario(colaborador){
    listaInicial.splice( listaInicial.indexOf(colaborador), 1 );
    enviarParaJson(listaInicial);
    document.getElementById('id04').style.display='block';
}