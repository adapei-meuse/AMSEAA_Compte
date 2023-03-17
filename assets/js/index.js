window.onbeforeprint = beforePrint;

/*let modeAsso = "ADAPEI";*/

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

