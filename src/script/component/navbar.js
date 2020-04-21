class NavBar extends HTMLElement {
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
        body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
          }
          
          .topnav {
            overflow: hidden;
            background-color: #0779e4;
          }
          
          .topnav a {
            float: left;
            display: block;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
          }
          
          .topnav a:hover {
            background-color: #ddd;
            color: black;
          }
          
          .to{
            background-color: #30475e;
            color: white;
          }
          
          .topnav .icon {
            display: none;
          }

          .favorite {
              margin-right:15%;
          }
          
          @media screen and (max-width: 600px) {
            .topnav a:not(:first-child) {display: none;}
            .topnav a.icon {
              float: right;
              display: block;
            }
          }
          
          @media screen and (max-width: 600px) {
            .topnav.responsive {position: relative;}
            .topnav.responsive .icon {
              position: absolute;
              right: 0;
              top: 0;
            }
            .topnav.responsive a {
              float: none;
              display: block;
              text-align: left;
            }
          }
          </style>

          <div class="topnav" id="myTopnav">
            <a href="#home" >Digimon</a>
            <a href="#favorite" class="favorite">Favotite</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
            </div>
        `
    }
}

customElements.define("nav-bar", NavBar);