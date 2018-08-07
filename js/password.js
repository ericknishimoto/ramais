function password() {
    event.preventDefault();
    var input = document.getElementById('senha').value;
    var senha = "123"
    if (input == null || input == "" || input != senha) {
        var erro = document.querySelector(".msg-erro");
        erro.textContent = "Senha inválida.";
        return;
    }else{    
    document.getElementById('id01').style.display='none';
    document.getElementById('tabela-geral').style.display='';
    }
}