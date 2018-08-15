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
};        

//Mascara de celular
$("#celular").bind('input propertychange',function(){
 
  var texto = $(this).val();
  
  texto = texto.replace(/[^\d]/g, '');
  
  if (texto.length > 0)
  {
  texto = "(" + texto;
      
      if (texto.length > 3)
      {
          texto = [texto.slice(0, 3), ") ", texto.slice(3)].join('');  
      }
      if (texto.length > 12)
      {      
          if (texto.length > 13) 
              texto = [texto.slice(0, 10), "-", texto.slice(10)].join('');
          else
              texto = [texto.slice(0, 9), "-", texto.slice(9)].join('');
      }                 
          if (texto.length > 15)                
             texto = texto.substr(0,15);
  }
 $(this).val(texto);     
})

//Mascara de ramal
$("#ramal").bind('input propertychange',function(){
 
  var texto = $(this).val();
  
  texto = texto.replace(/[^\d]/g, '');
  
  if (texto.length > 0)
  {
      if (texto.length > 4)
      {
          texto = [texto.slice(0, 4), "/", texto.slice(4)].join('');  
      }
  }
 $(this).val(texto);     
})
