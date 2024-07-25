
function pegarTemperatura() {

  return new Promise(function (resolve, reject) {
    console.log('pegando temperatura');

    setTimeout(function () {
      resolve('40 na sombra');
    }, 2000);
  })
}

// usando a promise
let temp = pegarTemperatura();
temp.then(function(result) {
  console.log(`Temperatura: ${result}`);
});

temp.catch(function(error){
  console.log("eita deu erro!");
});