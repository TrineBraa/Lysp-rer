let lightOnOrOff = false;

function offAndOn() {
    lightOnOrOff = !lightOnOrOff;
    if (lightOnOrOff == true) {                 //må passe på å ha med denne for å aktivere Boolean. og huse å ha 2 likhetstegn.
        document.getElementById("bulbWithLight").style.backgroundColor = "Yellow";
        document.getElementById("switchForLight").innerHTML = `Off`;
    } else {                                    // Dette er det som skjer dersom variabelen vår ikke er true.
        document.getElementById("bulbWithLight").style.backgroundColor = "";
        document.getElementById("switchForLight").innerHTML = `On`;
    }

}

