import './digimon-card';

class DigimonList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"})
    }

    set digimon(digimon) {
        this._digimon = digimon;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = ""
        this._digimon.forEach(digimons => {
            const digimonElement = document.createElement("digimon-card");
            digimonElement.digimons = digimons
            this.shadowDOM.appendChild(digimonElement);
        }) 
    }
}

customElements.define("digimon-list", DigimonList);