
const url = "https://api.nasa.gov/planetary/apod?api_key=4QyjP5pRPqzWp8d64KKnDYKw6teRg6S3hwzt9CjO&count=15";

async function listaImagenes() {
    try {
        let fetchImagenes = await fetch(url);
        let datosImagenes = await fetchImagenes.json();
        console.log(datosImagenes);
        
        const card = document.querySelector("[data-ul]"); // Asegúrate de que este selector sea correcto

        datosImagenes.forEach(elemento => {
            const contenido = `<li class="card">
                                 <img class="card__image" src="${elemento.url}" alt="${elemento.title}">
                                 <h3 class="card__title">${elemento.title}</h3>
                             </li>`;
            
            card.insertAdjacentHTML('beforeend', contenido);
        });
        
    } catch (error) {
        console.log(error);
    }
}

listaImagenes();





// function listaImagenes(){
//     fetch (url)
// .then( Response => Response.json())
// .then( datosImagenes => {
//     console.log(datosImagenes);

//     const card = document.querySelector("[data-ul]")

//     datosImagenes.forEach(Elemento => {
//         const contenido = `<li class="card">
//                     <img class="card__image" src="${Elemento.url}" alt="imagen">
//                     <h3 class="card__title">${Elemento.title}</h3>
//                 </li>`

//                 card.innerHTML = card.innerHTML + contenido
//     })
    
// })
// .catch(error => console.log(error))

// }

// listaImagenes()