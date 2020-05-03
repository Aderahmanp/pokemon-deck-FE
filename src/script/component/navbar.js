

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

          .topnav .search-container button {
            float: right;
            padding: 6px 10px;
            margin-top: 8px;
            margin-right: 16px;
            background: #ddd;
            font-size: 17px;
            border: none;
            cursor: pointer;
          }
          
          .topnav .search-container button:hover {
            background: #ccc;
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

            .topnav .search-container {
                float: none;
              }
              .topnav a, .topnav input[type=text], .topnav .search-container button {
                float: none;
                display: block;
                text-align: left;
                width: 100%;
                margin: 0;
                padding: 14px;
              }
              .topnav input[type=text] {
                border: 1px solid #ccc;  
              }
            }

          }

          a.active {
            background-color: #4CAF50
          }
          </style>

          <div class="topnav" id="myTopnav">
     
               <a href="index.html" >Digimon</a>
               <a href="/favorite.html" class="favorite">Favorite</a> 
         
            </div>

            <script>
            $(document).ready(function() {
              // get current URL path and assign 'active' class
              var pathname = window.location.pathname;
              $('.topnav > a[href="'+pathname+'"]').parent().addClass('active');
            })
            </script>
        `
    }
}

customElements.define("nav-bar", NavBar);