/* Conforme explicado no enunciado adicione as palavras reservadas let ou const nas variaveis */

const distance = 25000;
const time = 710;
const gender = "male";
const pushUps = 40;
const abs = 35
/* 

    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar: 

    if(gender === 'male)
    ...

*/

function testTAF(distance, time, gender, pushUps, abs) {
  let passed = false; 
  
  function gender(genero){
    if(genero == "male" ){
      return genero; 
    }else if(genero == "female"){
      return genero
    }

  }
  function distance(movimento){
    if(movimento >= 24000){
    return movimento;
    }
  }
  function time(min){
    if (min <= 720){
      return min;
    }else if(min <= 840){
      return min;
    }
  }
  function pushUps(flecios){
    if(flecios >= 40){
      return flecios;
    }else if (flecios >= 20){
      return flecios;
    }
  }
  function abs(abdominais){
    if(abdominais >= 35){
      return abdominais;
    }else if(abdominais >= 30){
      return abdominais;
    }
  }

  //Sua logica deve ser inserida aqui:
  if (gender === "male") {
    if (distance >= 24000 && time <= 720 && pushUps >= 40 && abs >= 35) {
      passed = true;
    }
  } else if (gender === "female") {
    if (distance >= 24000 && time <= 840 && pushUps >= 20 && abs >= 30) {
      passed = true;
    }
  }
  
  // Retorno da variavel passed onde para o candidato passar ele deve ter o valor de: true
  return passed;
}


//para executar o script no terminal digite: node ./script.js
//para executar os testes no terminal digite: node --test ./test_cases.js

console.log(
  "Candidato passou no teste?: \nresposta: ",

  testTAF(distance, time, gender, pushUps, abs)
);

module.exports = testTAF;