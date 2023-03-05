var personaGoddess = document.getElementByID("goddess-stuff");
var personaBea = document.getElementByID("bea-stuff");
var goddessTitle = document.getElementByID("god-title");
var goddessDesc = document.getElementByID("god-texboxx");
var beaTitle = document.getElementByID("bea-title");
var beaDesc = document.getElementByID("bea-texboxx");

function swapPersona(persona) {
  if (persona == 0) { //if persona is goddess
    personaBea.style.height = "0";
    personaBea.style.opacity = "1";
    personaGoddess.style.height = "1";
    personaGoddess.style.height = "100%"
  }
  if (persona == 1) { //if persona is bea
    personaGoddess.style.height = "0";
    personaGoddess.style.opacity = "1";
    personaBea.style.height = "1";
    personaBea.style.height = "100%"
  }
}

function swapTitle(persona, textDisplay) {
  if (persona ==  0) { //if persona is goddess
    if (textDisplay == 0) { //if desired display is title
      goddessDesc.style.height = "0";
      goddessDesc.style.opacity = "1";
      goddessTitle.style.height = "1";
      goddessTitle.style.height = "100%"
    }

    if (textDisplay == 1) { //if desired display is desc
      goddessTitle.style.height = "0";
      goddessTitle.style.opacity = "1";
      goddessDesc.style.height = "1";
      goddessDesc.style.height = "50vh"
    }
  }

  if (persona ==  1) { //if persona is bea
    if (textDisplay == 0) { //if desired display is title
      beaDesc.style.height = "0";
      beaDesc.style.opacity = "1";
      beaTitle.style.height = "1";
      beaTitle.style.height = "100%"
    }

    if (textDisplay == 1) { //if desired display is desc
      beaTitle.style.height = "0";
      beaTitle.style.opacity = "1";
      beaDesc.style.height = "1";
      beaDesc.style.height = "100%"
    }
  }
}
swapPersona(0);
swapTitle(0,0)