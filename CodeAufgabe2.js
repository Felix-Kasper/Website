
function anzeigen(){
    "use strict";
    let bereichAusgabe=document.getElementById("bereichAusgabe");
    let startwert=parseInt(document.getElementById("startwert").value);
    let endwert=parseInt(document.getElementById("endwert").value);
    let inkrement=parseInt(document.getElementById("inkrement").value);
    let ausgabe="";
    

    if(isNaN=startwert.value && startwert.value!=0){
        if(isNaN=endwert.value && endwert.value!=0){
            if(isNaN=inkrement.value && inkrement.value!=0){
                alert("Falsche Eingabe");
            }
        }
    }
    
    if(inkrement.value<0){
        inkrement*(-1);

    }


    if(startwert>endwert){
        for(let i=startwert;i>=endwert;i-=inkrement){
            ausgabe+=i + "<br> ";
        }
    }
    else{
        for(let i=startwert;i<=endwert;i+=inkrement){
            ausgabe+=i + "<br> ";
        }

    }

    bereichAusgabe.innerHTML=ausgabe;


}
