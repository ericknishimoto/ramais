function alteraUsuario(nome){

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

    let tituloForm = document.querySelector("#titulo-form");
    tituloForm.textContent = "Alterar cadastro";

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