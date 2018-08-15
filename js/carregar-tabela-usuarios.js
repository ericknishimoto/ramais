//executa a funcao request, passando o endereço do Json, mais uma funcao e a chave da json privada
request(jsonColaboradores,listaInicialUsuario, key);

var cadastrandoUsuario = true;

function listaInicialUsuario(dado) {
    var colaboradorTr = montaTr(dado);
    var tr = document.querySelector("#tabela-usuarios");
    tr.appendChild(colaboradorTr);
}

function montaTr(dado){

    var colaboradorTr = document.createElement("tr");
    colaboradorTr.classList.add("colaborador");

    colaboradorTr.appendChild(montaTd(dado.nome,"info-nome"));
    colaboradorTr.appendChild(montaTd(dado.departamento,"info-departamento"));
    colaboradorTr.appendChild(montaTd(dado.ramal,"info-ramal"));
    colaboradorTr.appendChild(montaTd(dado.celular,"info-celular"));
    colaboradorTr.appendChild(montaTdBotao("info-acoes",dado,dado.nome));

    return colaboradorTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function montaTdBotao(classe,dado,nome){
    var botao = document.createElement("td");
    botao.appendChild(montaBotaoAlterar("icone-acao-alterar","fas","fa-pencil-alt",nome));
    botao.appendChild(montaBotaoApagar("icone-acao-apagar","fas","fa-trash-alt",dado));
    botao.classList.add(classe);
    return botao;
}

function montaBotaoAlterar(classe, classe1, classe2,nome){
    var botao = document.createElement("i");
    botao.classList.add(classe,classe1, classe2);
    botao.setAttribute("title","Alterar dados");
    botao.addEventListener("click", function() {        
        alteraUsuario(nome);
    })
    return botao;
}

function montaBotaoApagar(classe, classe1, classe2,dado){
    var botao = document.createElement("i");
    botao.classList.add(classe,classe1, classe2);
    botao.setAttribute("title","Excluir usuário");
    botao.addEventListener("click", function() {

        var r = confirm("Deseja realmente apagar?");
        if (r == true) { 
            apagarUsuario(dado);
            apagaTabela();
            apagaBuscar();
            request(jsonColaboradores,listaInicialUsuario, key); 
        } else {
            return;
        }   
    })
    return botao;
}

function apagaTabela(){
    var tr = document.querySelector("#tabela-usuarios");
    tr.innerHTML = "";
}

function apagaBuscar(){
    var buscar = document.querySelector("#filtrar-colaboradores");
    buscar.value = "";
}