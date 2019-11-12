axios.get("https://api.irail.be/stations/?format=json")
    .then ( (response)=> {
        console.log(response)
    })