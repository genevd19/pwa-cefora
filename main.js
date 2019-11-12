axios.get("https://api.irail.be/stations/?format=json")
    .then ( (response)=> {
        console.log(response.data.station)
        let gares = document.querySelector(".gareList")
        response.data.station.forEach(element => {
            gares.innerHTML += `<li>${element}.standarname}</li>`
        })
    })