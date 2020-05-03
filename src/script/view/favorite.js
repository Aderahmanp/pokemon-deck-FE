function favorite() {
    const digimonHeroku = "https://app-digimon.herokuapp.com/"

    const digimonFavorite = () => {

        fetch(`${digimonHeroku}`,{
            method:'GET'
        })
            .then(response => {
                return response.json();
             })
                .then(responseJson => {
                showFavorite (responseJson.data)
            })
                .catch(error => {
                console.log(error);
            });
     };
      digimonFavorite();

    const removeDigimon = (digimonId) => {
      fetch(`https://app-digimon.herokuapp.com/digimon/${digimonId}`, {
        method: "DELETE",
        headers: {
          "Content-Type" : "application/json"
        },
        })
        .then(response => {
          return response.json();
      })
      .then(responseJson => {
        showResponseMessage("Digimon success to remove");
        console.log(responseJson)
        digimonFavorite();
      })
      .catch(err => {
        showResponseMessage(err)
      });
    }



const showFavorite = (digimonsFavorite) => {
    const digimonFavoriteElement = document.querySelector('#digimon-favorite');
    digimonFavoriteElement.innerHTML = ""; 

    digimonsFavorite.forEach(digimon => {
       digimonFavoriteElement.innerHTML += ` 
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
          <button type="button" class="btn btn-danger button-delete" id=${digimon._id} >Remove</button>
        </div>
        `;
   });

   const buttons = document.querySelectorAll(".button-delete");
   buttons.forEach(button => {
     button.addEventListener("click", event => {
       const digimonId = event.target.id;
       removeDigimon(digimonId)
     })
   })
 };


 const showResponseMessage = (message = "Check your internet connection") => {
  alert(message);
};

}

 export default favorite