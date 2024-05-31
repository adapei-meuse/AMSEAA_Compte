window.onbeforeprint = beforePrint;

let modeAsso = "AMSEAA";

document.getElementById("nomInput").addEventListener("change", (e) => {
    document.getElementById("nomOutput").innerText = e.target.value;
    nomToIdentifiantInput(e);
    document.getElementsByTagName("title").item(0).innerText = e.target.value;
    }
);

document.getElementById("identifiantInput").addEventListener("change", (e) => 
    Array.from(document.getElementsByClassName("identifiantOutput")).forEach((element) => {
        inputToOutput(element, e)
    })
);

document.getElementById("identifiantInput").addEventListener("change", (e) => 
    Array.from(document.getElementsByClassName("identifiantOutput2")).forEach((element) => {
        inputToOutput(element, e)
    })
);

document.getElementById("passwordInput").addEventListener("change", (e) => 
    Array.from(document.getElementsByClassName("passwordOutput")).forEach((element) => {
        inputToOutput(element, e)
    })
);

function inputToOutput(element, e){
    element.innerText = e.target.value
}

function nomToIdentifiantInput(eNom){
    let stringId = (eNom.target.value.split(" ")[0].charAt(0) + eNom.target.value.split(" ")[1]).toLowerCase();
    let identifiantInput = document.getElementById("identifiantInput");
    identifiantInput.value = stringId;
    identifiantInput.dispatchEvent(new Event("change"));
}

/*prenom.nom@amseaa.fr*/
function nomToIdentifiantInput2(eNom) {
    let noms = eNom.target.value.split(" ");
    let mot1 = noms[0].toLowerCase();
    let mot2 = noms[1].toLowerCase();
    let stringId = mot1 + "." + mot2;
    let identifiantInput2 = document.getElementById("identifiantInput");
    identifiantInput.value = stringId;
    identifiantInput.dispatchEvent(new Event("change"));
}

function beforePrint(){
    let date = new Date();
    let formattedDate = date.getDate() + " " + mois[date.getMonth()] + " " + date.getFullYear();
    document.getElementById("dateOutput").innerText = formattedDate;
}

function changeLogo(){
    let logoPage = document.getElementById("logoPage");
    let vague = document.getElementById("vague");
    if(modeAsso === "AMSEAA"){
        document.getElementById("titrePage").innerText = "Comptes Informatiques AMSEAA";
        logoPage.src ="assets/img/logo_amseaa.jpg";
        vague.src ="assets/img/vague_amseaa.jpg";
        document.getElementById("changeLogoBtn").innerText = "AMSEAA"
        modeAsso = "AMSEAA";
    } else {
        document.getElementById("titrePage").innerText = "Comptes Informatiques AMSEAA";
        logoPage.src ="assets/img/logo_amseaa.jpg";
        logoPage.crossOrigin ="anonymous";
        vague.src ="assets/img/vague_amseaa.jpg";
        document.getElementById("changeLogoBtn").innerText = "AMSEAA"
        modeAsso = "AMSEAA"; 
    }
}

var mois = new Array( "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre" );
