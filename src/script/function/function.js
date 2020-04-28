

function myDigimon() {
    var input, filter, card, div, h3, p, i, txtValue;
    input = document.getElementById("inputName");
    filter = input.value.toUpperCase();
    card = document.getElementById("digimon-card");
    div = card.getElementsByTagName("div");
    for (i = 0; i < div.length; i++) {
        h3 = div[i].getElementsByTagName("h3")[0];
        txtValue = h3.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
    
}

function fresh() {
    var button, filter, card, div, p,  i, txtValue;
    button = document.getElementById("fresh");
    filter = button.value.toUpperCase();
    card = document.getElementById("digimon-card");
    div = card.getElementsByTagName("div");
    for (i = 0; i < div.length; i++) {
        p = div[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
    
}

function training() {
    var button, filter, card, div, p,  i, txtValue;
    button = document.getElementById("training");
    filter = button.value.toUpperCase();
    card = document.getElementById("digimon-card");
    div = card.getElementsByTagName("div");
    for (i = 0; i < div.length; i++) {
        p = div[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
    
}

function rookie() {
    var button, filter, card, div, p,  i, txtValue;
    button = document.getElementById("rookie");
    filter = button.value.toUpperCase();
    card = document.getElementById("digimon-card");
    div = card.getElementsByTagName("div");
    for (i = 0; i < div.length; i++) {
        p = div[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
    
}


function champion() {
    var button, filter, card, div, p,  i, txtValue;
    button = document.getElementById("champion");
    filter = button.value.toUpperCase();
    card = document.getElementById("digimon-card");
    div = card.getElementsByTagName("div");
    for (i = 0; i < div.length; i++) {
        p = div[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
    
}

function ultimate() {
    var button, filter, card, div, p,  i, txtValue;
    button = document.getElementById("ultimate");
    filter = button.value.toUpperCase();
    card = document.getElementById("digimon-card");
    div = card.getElementsByTagName("div");
    for (i = 0; i < div.length; i++) {
        p = div[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
    
}

module.exports = {myDigimon, fresh, training, rookie, champion, ultimate};




