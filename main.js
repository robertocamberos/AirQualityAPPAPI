
   
    fetch(`https://rest-sandbox.coinapi.io/v1/exchangerate/BTC?apikey=1E963784-B603-4CA8-B2C0-A70F5999D941`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      randomNum = Math.floor(Math.random() * 165)
      console.log(data)
      document.querySelector('.first').innerHTML = data.rates[randomNum].rate
      document.querySelector('.second').innerHTML = data.rates[randomNum].time
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
