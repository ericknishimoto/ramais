function apagarUsuario(colaborador){
    
    console.log(colaborador)
    listaInicial.splice( listaInicial.indexOf(colaborador), 1 );

    enviarParaJson(listaInicial);

    document.getElementById('id04').style.display='block';

}