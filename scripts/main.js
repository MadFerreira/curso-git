var minhaImagem = document.querySelector("img");

minhaImagem.onclick = function(){
    var mySrc = minhaImagem.getAttribute("src");
    if(mySrc === "images/logo_POB.png"){
        minhaImagem.setAttribute("src", "images/logo_POB-2.png");
    }
    else{
        minhaImagem.setAttribute("src", "images/logo_POB.png");
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
function setUserName() {
    var myName = prompt('Por favor, digite seu nome.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }