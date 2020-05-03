function main() {

    const baseUrl = "https://digimon-api.herokuapp.com/api/digimon"
    const digimonHeroku = "https://app-digimon.herokuapp.com/"
    const getDigimon = () => {

        fetch(`${baseUrl}`,{
            method:'GET'
        })
            .then(response => {
                return response.json();
             })
                .then(responseJson => {
                showDigimon (responseJson)
                
            })
                .catch(error => {
                console.log(error);
            });
     };
     getDigimon();

     const createDigimon = () => {
       console.log("jalan gan")
       fetch(`${digimonHeroku}/digimon`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json"
         },
         body: JSON.stringify(digimon)
       
       })
       console.log(body)
       .then(response => {
         return response.json();
       })
       .then(responseJson => {
         showResponseMessage(responseJson.message)
       })
       .catch(error => {
         showResponseMessage(error)
       })
    }



     
     const showDigimon = (digimons) => {
         const digimonElement = document.querySelector('#digimon-card');
         digimonElement.innerHTML = ""; 

         digimons.forEach(digimon => {
            digimonElement.innerHTML += ` 
             <style>
             .card {
                 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                 transition: 0.3s;
                 width: 15%;
                 margin-top:3%;
                 margin-left:4%;
                 background-color: #bdd4e7;
                 background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);
                 border-radius:5px;
               }
               
               .card:hover {
                 box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
               }
               
               .container {
                 padding: 2px 16px;
               }

                .test {
                  color: white;
                  border-radius: 4px;
                  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
              }
               </style>
     
               <div class="card">
               <img id="digimonImg" value=${digimon.img} src="${digimon.img}" style="width:100%">
               <div class="container">
                 <p class="text-center" id="digimonLevel" value=${digimon.level}">${digimon.level}</p> 
                 <h3 class="text-center" id="digimonName" value=${digimon.name}">${digimon.name}</h3> 
                  </div>
                
               <button id="createDigimon" type="button" class="btn btn-secondary button-create">Favorite</button>
               </div>
             `
        });


      document.createEventListener("DOMCcontentLoade", () => {
        const digimonName = document.querySelector("#digimonName");
        const digimonImg = document.querySelector("#digimonImg")
        const digimonLevel = document.querySelector("$digimonLevel");
        const buttonCreate = document.querySelectorAll("createDigimon")
        buttonCreate.addEventListener("click", function() {
          const digimon = {
            name:digimonName.value,
            img:digimonImg.value,
            level:digimonLevel.value 
          };
          createDigimon(digimon)
        });

       })
      }

      const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
      };



    }


export default main;
