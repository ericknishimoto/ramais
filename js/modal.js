//ao clicar em close, limpar form

const botaoClose = document.querySelector("#botaoClose")
botaoClose.addEventListener("click", function (){

    let form = document.querySelector("#form-adiciona");
    form.reset();
    var mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML = "" ;// .innerHTML: controlar html dentro de um elemento;
    let select = document.querySelector("#departamento");
    select.value = "";

})
