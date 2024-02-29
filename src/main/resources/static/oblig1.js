
    const billettArray = [];

    function kjopBillett() {
    const film = document.getElementById("velg").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    let isValid = true;

    const tlfNrRegex = /^\d{3}[\s-]?\d{2}[\s-]?\d{3}$/;
    const epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (film === "nøytral") {
    document.getElementById("filmMangel").innerHTML = "Må velge en film";
    isValid = false;
} else {
    document.getElementById("filmMangel").innerHTML = "";
}

    if (antall === "") {
    document.getElementById("antallMangel").innerHTML = "Må skrive inn et gyldig tall";
    isValid = false;
} else if (Number(antall) >= 1) {
    document.getElementById("antallMangel").innerHTML = "";
} else {
    document.getElementById("antallMangel").innerHTML = "Velg gyldig antall";
    isValid = false;
}

    if (fornavn === "") {
    document.getElementById("fornavnMangel").innerHTML = "Må skrive noe inn i fornavnet";
    isValid = false;
} else {
    document.getElementById("fornavnMangel").innerHTML = "";
}

    if (etternavn === "") {
    document.getElementById("etternavnMangel").innerHTML = "Skriv inn noe i etternavn";
    isValid = false;
} else {
    document.getElementById("etternavnMangel").innerHTML = "";
}

    if (telefonnr === "") {
    document.getElementById("telefonMangel").innerHTML = "Må skrive inn telefonnr";
    isValid = false;
} else if (!tlfNrRegex.test(telefonnr)) {
    document.getElementById("telefonMangel").innerHTML = "Skriv inn gyldig telefonnr";
    isValid = false;
} else {
    document.getElementById("telefonMangel").innerHTML = "";
}

    if (epost === "") {
    document.getElementById("epostMangel").innerHTML = "Må skrive noe inn i epost";
    isValid = false;
} else if (!epostRegex.test(epost)) {
    document.getElementById("epostMangel").innerHTML = "Skriv inn gyldig epost";
    isValid = false;
} else {
    document.getElementById("epostMangel").innerHTML = "";
}

    if (!isValid) {
    return;
}

    const person = {
    film: film,
    antall: antall,
    fornavn: fornavn,
    etternavn: etternavn,
    telefonnr: telefonnr,
    epost: epost,
};
    billettArray.push(person);
    visBillett();

    function visBillett() {
    let ut = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";
    for (let personInfo of billettArray) {
    ut += "<tr>";
    ut += "<td>" + personInfo.film + "</td><td>" + personInfo.antall + "</td><td>" + personInfo.fornavn + "</td><td>" + personInfo.etternavn + "</td><td>" + personInfo.telefonnr + "</td><td>" +
    personInfo.epost + "</td>";
    ut += "</tr>";
}
    document.getElementById("ut").innerHTML = ut;
}

    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("velg").value = "nøytral";
}

    function slettBillett() {
    billettArray.length = 0;
    document.getElementById("ut").innerHTML = "";
}
