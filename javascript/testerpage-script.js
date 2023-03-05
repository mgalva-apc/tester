var fischlPersona = document.getElementByID("fiscl");
var kokomiPersona = document.getElementByID("kokomi");
var fischlText = document.getElementByID("fischl-text");
var kokomiText = document.getElementByID("kokomi-text");
function swapPersona(n) {
  if (n == 0) {
    kokomiPersona.style.opacity = "0";
    kokomiPersona.style.height= "0";
    fischlPersona.style.opacity= "1"; 
    fischlPersona.style.height = //whatever the height is supposed to be for it;
  }
  if (n == 1) {
    fischlPersona.style.opacity = "0";
    fischlPersona.style.height= "0";
    kokomiPersona.style.opacity= "1"; 
    kokomiPersona.style.height = //whatever the height is supposed to be for it;
  }
}

function swapText(n) {
  if (n == 0) {
    kokomiText.style.opacity = "0";
    kokomiText.style.height= "0";
    fischlText.style.opacity= "1"; 
    fischlText.style.height = //whatever the height is supposed to be for it;
  }
  if (n == 1) {
    fischlText.style.opacity = "0";
    fischlText.style.height= "0";
    kokomiText.style.opacity= "1"; 
    kokomiText.style.height = //whatever the height is supposed to be for it;
  }
}