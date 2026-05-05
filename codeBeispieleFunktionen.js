//Prüfen auf positive Zahl
/*
Welche Aufgabe soll die Funktion erfüllen?
Prüfen, ob ein Wert nicht Nan ist und eine Zahl grösser als 0

Welche Parameter benötigt die Funktion, damit sie ihre Aufgabe erfüllen kann?
Einen Parameter, der vom Datentyp number sein muss

Liefert die Funktion einen Funktionswert?
positive Zahl => true
negative Zahl => false
*/

function isPositiveNumber(einWert){
    let result=false;
    if(isNaN(einWert)){
        result= false;
    }else if(einWert>0){
        result= true;
    }
    return result;
}




//Dividieren von zwei Zahlen
/*
Welche Aufgabe soll die Funktion erfüllen?
Zwei Zahlen dividieren

Welche Parameter benötigt die Funktion, damit sie ihre Aufgabe erfüllen kann?
Zwei Parameter, die vom Datentyp number sein müssen

Liefert die Funktion einen Funktionswert?
zweite Zahl 0 => 0
sonst => Divisionesergebnis
*/

function dividiere(zahl1, zahl2){
    if(zahl2===0){
        return 0;
    }
    return zahl1/zahl2;
}



//HTML aus einem Array erzeugen
/*
Welche Aufgabe soll die Funktion erfüllen?
Aus den Inhalten eines Arrays soll HTML generiert werden, wobei jeder Feldinhalt zwischen Start- und Endtag gesetzt wird

Welche Parameter benötigt die Funktion, damit sie ihre Aufgabe erfüllen kann?
Drei Parameter: StartTag, EndTag, eindimensionales Array

Liefert die Funktion einen Funktionswert?
Die generierte HTML-Zeichenkette
*/

function createHTMLFromArray(startTag, endTag, werte){
    let htmlText="";
    for(let i=0; i<werte.length; i++){
        htmlText += startTag + werte[i] + endTag;
    }
    return htmlText;
}


//Addieren von beliebigen Zahlen
/*
Welche Aufgabe soll die Funktion erfüllen?
Beliebig viele Zahlen addieren

Welche Parameter benötigt die Funktion, damit sie ihre Aufgabe erfüllen kann?
Keine, wir greifen auf die Anweisung "arguments" zurück, da wir ja nicht wissen, wie viele Zahlen übergeben werden

Liefert die Funktion einen Funktionswert?
Additionsergebnis
*/

function addiere(){
    let ergebnis=0;
    for(let i=0, anzahl=arguments.length; i<anzahl; i++){
        ergebnis += arguments[i];
    }
    return ergebnis;
}



//Addieren von beliebigen Zahlen (Variante mit Rest-Parameter)
/*
Welche Aufgabe soll die Funktion erfüllen?
Beliebig viele Zahlen addieren

Welche Parameter benötigt die Funktion, damit sie ihre Aufgabe erfüllen kann?
Einen Rest-Parameter (!!!! ECMA 6 !!!!)

Liefert die Funktion einen Funktionswert?
Additionsergebnis
*/

function addiereMitParameter(...zahlen){
    let ergebnis=0;
    for(let i=0, anzahl=zahlen.length; i<anzahl; i++){
        ergebnis += zahlen[i];
    }
    return ergebnis;
}

//Addieren von mindestens zwei Zahlen und weiteren beliebigen Zahlen (Variante mit Rest-Parameter)
/*
Welche Aufgabe soll die Funktion erfüllen?
Mindestens zwei Zahlen und beliebig viele weitere Zahlen addieren

Welche Parameter benötigt die Funktion, damit sie ihre Aufgabe erfüllen kann?
Zwei Parameter für die ersten zwei Zahlen und einen Rest-Parameter (!!!! ECMA 6 !!!!)

Liefert die Funktion einen Funktionswert?
Additionsergebnis
*/

function addiereMitParameter1(zahl1, zahl2,...zahlen){
    let ergebnis=zahl1+zahl2;
    for(let i=0, anzahl=zahlen.length; i<anzahl; i++){
        ergebnis += zahlen[i];
    }
    return ergebnis;
}

//HTML erzeugen, das Information zu einer Veranstaltung erzeugt
/*
Welche Aufgabe soll die Funktion erfüllen?
Eine Veranstaltungsbezeichnung, einen Veranstaltungsort, und eine Liste von Teilnehmern als HTML zusammensetzen

Welche Parameter benötigt die Funktion, damit sie ihre Aufgabe erfüllen kann?
Veranstaltungsbezeichnung, Veranstaltungsort,  einen Rest-Parameter für die Teilnehmer (!!!! ECMA 6 !!!!)

Liefert die Funktion einen Funktionswert?
Die generierte HTML-Zeichenkette
*/

function createHTMLVeranstaltung(veranstaltungName, veranstaltungOrt, ...teilnehmer){
    let htmlText="";
    htmlText="<h1>" + veranstaltungName + "</h1>";
    htmlText += "<h2>" + veranstaltungOrt + "</h2>";
    htmlText += "<p>Angemeldete Teilnehmer</p>";
    htmlText += "<ul>";
    for(let i=0, anzahl=teilnehmer.length; i<anzahl; i++){
        htmlText += "<li>" + teilnehmer[i] + "</li>";
    }
    htmlText += "</ul>";
    return htmlText;
}








