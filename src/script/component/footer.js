

class FooterBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"})
    }
    

    connectedCallback() {
        this.render();
    }

    render () {
        this.shadowDOM.innerHTML = `
        <style>
        .copy {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background-color:#0779e4;
            height:30px;
            display:flex;
            justify-content:center;
            margin-top:3%;
            color:#fef6fb
          }
          
         
          </style>

          <div>
            <h3 class="copy"> copyright@2020-aderahmanp 
            </div>
        `
    }
}

customElements.define("footer-bar", FooterBar);