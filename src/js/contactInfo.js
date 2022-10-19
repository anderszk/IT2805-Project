function opencontactinfo();{
    let div = document.createElement("div");
    let p = document.createElement("p");
    div.prepend("Some text", p);
    
    console.log(div.childNodes); // NodeList [ #text "Some text", <p> ]
}

function myFunction(p1, p2) {
    return p1 * p2;
  }