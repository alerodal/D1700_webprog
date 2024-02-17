
const billettArray = [];
function kjopBillett(){
    const antall = parseInt(document.getElementById("antall").value);
    const film = document.getElementById("velg").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    let isValid = true;

    const tlfNrRegex = /^\d{3}[\s-]?\d{2}[\s-]?\d{3}$/;
    const epostRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

    if (film == "Velg film her"){
        document.getElementById("filmMangel").textContent="Må velge en film";
        isValid=false;
    }else{
        document.getElementById("filmMangel").textContent="";
    }

    if (!antall || isNaN(antall)) {
        document.getElementById("antallMangel").textContent ="Må skrive inn et gyldig tall";
        isValid=false;
    } else {
        document.getElementById("antallMangel").textContent ="";
    }


    if (!fornavn){
        document.getElementById("fornavnMangel").textContent="Må skrive noe inn i fornavnet";
        isValid=false;
    }else {
        document.getElementById("fornavnMangel").textContent ="";
    }


    if(!etternavn){
        document.getElementById("etternavnMangel").textContent="Skriv inn noe i etternavn";
        isValid=false;
    }else{
        document.getElementById("etternavnMangel").textContent="";
    }


    if (!telefonnr){
        document.getElementById("telefonMangel").textContent="Må skrive inn telefonnr";
        isValid=false;
    }else if(!tlfNrRegex.test(telefonnr)){
        document.getElementById("telefonMangel").textContent="Skriv inn gyldig telefonnr";
    }else{
        document.getElementById("telefonMangel").textContent="";
    }


    if (!epost){
        document.getElementById("epostMangel").textContent ="Må skrive noe inn i epost";
        isValid = false;
    }else if(!epostRegex.test(epost)){
        document.getElementById("epostMangel").textContent="Skriv inn gyldig epost";
    }else{
        document.getElementById("epostMangel").textContent="";
    }

    if(!isValid){
        return;
    }

    const person = {
        fornavn : fornavn,
        etternavn : etternavn,
        telefonnr : telefonnr,
        epost : epost,
        antall : antall,
        film : film
    };
    billettArray.push(person);


    let ut = "";
    ut+= "<table><tr>"+
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>"+"</tr>";

    for (let personInfo of billettArray){
        ut+="<tr>";
        ut+="<td>"+personInfo.film+"</td><td>"+personInfo.antall+"</td><td>"+personInfo.fornavn+"</td><td>"+personInfo.etternavn+"</td><td>"+personInfo.telefonnr+"</td><td>"+
            personInfo.epost+"</td>";
        ut+="</tr>";
    }
    document.getElementById("ut").innerHTML=ut;


    document.getElementById("fornavn").value="";
    document.getElementById("etternavn").value="";
    document.getElementById("telefonnr").value="";
    document.getElementById("epost").value="";
    document.getElementById("antall").value = "";
    document.getElementById("velg").value="";
}


function slettBillett(){
    billettArray.length=0;
    document.getElementById("ut").innerHTML="";
}