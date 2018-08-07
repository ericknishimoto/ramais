request("https://api.jsonbin.io/b/5b5e35aee013915146c937e5",adicionaUsuario);

function adicionaUsuario(dado) {
    var colaboradorUl = montaUl(dado);
    var ul = document.querySelector(".container-direita__flex-cards");
    ul.appendChild(colaboradorUl);
}

function montaUl(dado){

    var colaboradorUl = document.createElement("ul");
    colaboradorUl.classList.add("container__card");

    //colaboradorUl.appendChild(montaLiRotulo("Nome:", "container__card__li"));
    colaboradorUl.appendChild(montaIRotulo("", "fas","fa-user", "user-icon"));
    colaboradorUl.appendChild(montaLiDado(dado.nome, "info-nome"));

    colaboradorUl.appendChild(montaLiRotulo("Departamento:", "container__card__li"));
    colaboradorUl.appendChild(montaLiDado(dado.departamento, "info-departamento"));

    colaboradorUl.appendChild(montaLiRotulo("Ramal:", "container__card__li"));
    colaboradorUl.appendChild(montaLiDado(dado.ramal, "info-ramal"));

    colaboradorUl.appendChild(montaLiRotulo("Celular:", "container__card__li"));
    colaboradorUl.appendChild(montaLiDado(dado.celular, "info-celular"));
    
    return colaboradorUl;
}

function montaIRotulo(rotulo,classe1,classe2,classe3){
    var IRotulo = document.createElement("i")
    IRotulo.classList.add(classe1,classe2,classe3);
    IRotulo.appendChild(montaSpan(rotulo));
    return IRotulo;
}

function montaLiRotulo(rotulo,classe){
    var liRotulo = document.createElement("li")
    liRotulo.classList.add(classe);
    liRotulo.appendChild(montaSpan(rotulo));
    return liRotulo;
}

function montaSpan(rotulo){
    var span = document.createElement("span");
    span.textContent = rotulo;
    return span;
}

function montaLiDado(dado,classe){
    var liDado = document.createElement("li")
    liDado.classList.add(classe);
    liDado.appendChild(montaH2(dado,classe));
    return liDado;
}

function montaH2(dado, classe){
    var h2 = document.createElement("h2");
    h2.textContent = dado;
    h2.classList.add(classe);
    return h2;
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