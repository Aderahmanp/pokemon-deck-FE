// function main() {


//     const getDigimon = () => {
    

//         fetch("https://digimon-api.herokuapp.com/api/digimon")
//             .then(response => {
//                 return response.json();
//              })
//                 .then(responseJson => {
//                 renderAllBooks (responseJson.books)
//             })
//                 .catch(error => {
//                 console.log(error);
//             });
//      };
// }

class GetDigimon {
    static searchdigimon(keyword) {
        return fetch("https://digimon-api.herokuapp.com/api/digimon")
        .then(response => {
            return response.json();
         })
            .then(responseJson => {
            if (responseJson[0]) {
                return Promise.resolve(responseJson[0])
            } else {
                return Promise.reject(` ${keyword} not found data `)
            }
        })
            .catch(error => {
            console.log(error);
        });
    }
}

export default GetDigimon