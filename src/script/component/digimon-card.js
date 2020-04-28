
class DigimonCard extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"})
    }

    // connectedCallback() {
    //     this.render();
    // }

    set digimon(digimon) {
      this._digimon = digimon;
      this.render();
    }

    render () {
        this.shadowDOM.innerHTML = `
        <style>
        .card {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            width: 20%;
            margin-top:3%;
            margin-left:2%;
          }
          
          .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
          }
          
          .container {
            padding: 2px 16px;
          }
          </style>

          <div class="card">
          <img src="${this._digimon.img}" style="width:100%">
          <div class="container">
            <h4><b>${this._digimon.level}</b></h4> 
            <p>${this._digimon.name}</p> 
          </div>
        </div>
        `
    }
}

customElements.define("digimon-card", DigimonCard);