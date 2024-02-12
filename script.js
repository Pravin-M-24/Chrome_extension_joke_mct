
let joke = document.getElementById("jokes");

async function fetchJokes (){
     
    let joke_content = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1" , {
        method:"GET",
        headers:{
            "X-Api-Key" : "Vn3IHHXO9/EsrUV2Deg9LA==88toxNZH9zYHUjg3"
        }
    })
      
    let parsedData = await joke_content.json();

    joke.innerHTML = parsedData[0].joke;

}

fetchJokes();