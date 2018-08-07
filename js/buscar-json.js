var listaInicial = [];

function request(source,funcao){

    var req = new XMLHttpRequest(); // Faz nova requisição http;

    req.onreadystatechange = () => { //aguarda resposta da request e executa;
        if (req.readyState == XMLHttpRequest.DONE) {
        
        var loadingIcon = document.querySelector(".loading-icon");
        loadingIcon.classList.add("invisivel");

        }
    };

    req.open("GET", source, true);
    req.setRequestHeader("secret-key", "$2a$10$RMCo1uUgCJKiU.CEXpAZbutR2tOFDnFUdyMY9hUKWU8zajL9EAeHO");

    req.addEventListener("load", function(){
        if (req.status == 200) { //req.status: valor do status da conexao;
            var resposta = req.responseText; // .responseText: texto da resposta;
            var dados = JSON.parse(resposta)// JSON.parse(): parseia a string em objeto JSON;
            listaInicial = dados;

            listaInicial.sort(function (obj1, obj2) { //Ordena JSON.
                return obj1.nome < obj2.nome ? -1 :
                (obj1.nome > obj2.nome ? 1 : 0);
                });

            dados.forEach( function(dados){
                funcao(dados);
                
            })
        };
    });

    req.send();

}