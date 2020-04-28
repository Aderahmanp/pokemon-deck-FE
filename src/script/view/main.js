function main() {

    const baseUrl = "https://digimon-api.herokuapp.com/api/digimon"
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
               <img src="${digimon.img}" style="width:100%">
               <div class="container">
                 <p class="text-center">${digimon.level}</p> 
                 <h3 class="text-center">${digimon.name}</h3> 
               </div>
               <button type="button" class="btn btn-secondary">Favorite</button>
             </div>
             `
        });
        


}

export default main;
