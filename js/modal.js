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

function mostrarCadastro(){
    document.getElementById('id02').style.display='block';
    var titulo = document.querySelector(".modal__cabecalho__titulo");
      titulo.textContent= "Cadastrar usuário";

    var element = document.getElementById('ramal');
    var maskOptions = {
      mask: '0000/0000'
    };
    var mask = new IMask(element, maskOptions);

        var element = document.getElementById('celular');
    var maskOptions = {
      mask: '(00)00000-0000'
    };
    var mask = new IMask(element, maskOptions);
};        
