var listaInicial = [];

function request(source,funcao, key){

    var req = new XMLHttpRequest(); // Faz nova requisição http;

    req.onreadystatechange = () => { //aguarda resposta da request e executa;
        if (req.readyState == XMLHttpRequest.DONE) { //se conectar...
        //adiciona classe invisivel para o gif de loading
        var loadingIcon = document.querySelector(".loading-icon");
        loadingIcon.classList.add("invisivel");
        }
    };

    req.open("GET", source, true);
    //passa a chave secreta para acessar o json privado
    req.setRequestHeader("secret-key", key);
    req.addEventListener("load", function(){
        if (req.status == 200) { //se o status da conexão for 200 (requisicao bem sucedida)...
            var resposta = req.responseText; // .responseText: texto da resposta;
            var dados = JSON.parse(resposta)// JSON.parse(): parseia a string em objeto JSON;
            listaInicial = dados;
            //ordena a listaInicial de objetos por ordem alfabética
            listaInicial.sort(function (obj1, obj2) { //Ordena JSON.
                return obj1.nome < obj2.nome ? -1 :
                (obj1.nome > obj2.nome ? 1 : 0);
                });
            //para cada um faça a função passada    
            dados.forEach(function(dados){
                funcao(dados);
            })
        };
    });
    req.send();
}