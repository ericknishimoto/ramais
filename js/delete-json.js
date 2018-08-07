let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};

req.open("DELETE", "http://api.jsonbin.io/b/5b5ba256dc72f955bb7975e3", true);
req.setRequestHeader("secret-key", "$2a$10$RMCo1uUgCJKiU.CEXpAZbutR2tOFDnFUdyMY9hUKWU8zajL9EAeHO");
req.send();