function enviarParaJson(dado) {
    let req = new XMLHttpRequest();

req.open("PUT", "https://api.jsonbin.io/b/5b5e35aee013915146c937e5", false);
req.setRequestHeader("Content-type", "application/json");
req.setRequestHeader("secret-key", "$2a$10$RMCo1uUgCJKiU.CEXpAZbutR2tOFDnFUdyMY9hUKWU8zajL9EAeHO");
req.setRequestHeader("versioning", "false");
req.send(JSON.stringify(dado));
}