document.getElementById("noNetBrut").innerHTML = "";
document.getElementById("welcheMwst").innerHTML = "";

output1 = document.getElementById("output1").innerHTML = 0 + "€";

output2 = document.getElementById("output2").style.fontSize = "2rem";

output1 = document.getElementById("output1").style.fontSize = "2rem";
//eingabeErforderlich = document.getElementById("nixAusgewählt").style.fontSize = "2rem";
//eingabeErforderlich = document.getElementById("nixAusgewählt").style.color = "red";



function berechne() {

    //auswahl "Was soll berechnet werden?"

    let NettoOderBrutto = "";
    // const betrag = Number(document.getElementById('betrag').value);
    //console.log(betrag);
    // document.getElementById("output1").innerHTML = betrag + "€";
    if (document.getElementById("checkbox1").checked) {
        NettoOderBrutto = "nettoZuBrutto";
        document.getElementById("nettoBrutto").innerHTML = "Nettobetrag (Preis ohne MwSt) in Euro";
        document.getElementById("h3output").innerHTML = "Bruttobetrag(Endpreis)";
        document.getElementById("noNetBrut").innerHTML = "";
    } else if (
        document.getElementById("checkbox2").checked) {
        NettoOderBrutto = "bruttoZuNetto";
        document.getElementById("nettoBrutto").innerHTML = "Bruttobetrag (Preis inkl. MwSt) in Euro";
        document.getElementById("h3output").innerHTML = "Nettobetrag";
        document.getElementById("noNetBrut").innerHTML = "";
    } else (
        eingabeErforderlich = document.getElementById("noNetBrut").innerHTML = "Bitte die jeweiligen Parameter auswählen!");

    console.log(NettoOderBrutto);

    // auswahl Mehrwertsteuersatz

    let mwst = "";

    if (document.getElementById("check19mwst").checked) {
        mwst = 19;
        document.getElementById("welcheMwst").innerHTML = "";
    } else if (document.getElementById("check7mwst").checked) {
        mwst = 7;
        document.getElementById("welcheMwst").innerHTML = "";
    } else {
        document.getElementById("welcheMwst").innerHTML = "Bitte MWSt-Satz auswählen!"
    }

    console.log(mwst);

    //betrag aus eingabe

    let betragMitKomma = document.getElementById('betrag').value;
    let betrag = Number(betragMitKomma.replace(",", "."));
    console.log(betrag);



    let mwstBetrag = "";
    let mwstFinal = "";

    if (document.getElementById("checkbox1").checked && mwst > 0) {
        mwstBetrag = betrag / 100 * mwst;
        document.getElementById("output1").innerHTML = mwstBetrag.toFixed(2) + " €";
        mwstFinal = betrag + mwstBetrag;
        document.getElementById("output2").innerHTML = mwstFinal.toFixed(2) + " €";
    } else if (document.getElementById("checkbox2").checked && mwst > 0) {
        mwstBetrag = betrag / (100 + mwst) * mwst;
        document.getElementById("output1").innerHTML = mwstBetrag.toFixed(2) + " €";
        mwstFinal = betrag - mwstBetrag;
        document.getElementById("output2").innerHTML = mwstFinal.toFixed(2) + " €"
    } else {
        document.getElementById("output1").innerHTML = "Bitte Eingaben überprüfen!";
        document.getElementById("output2").innerHTML = "Bitte Eingaben überprüfen!";
    }
}