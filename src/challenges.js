// Desafio 1
function compareTrue(animal1, animal2) {
  if (animal1 === true && animal2 === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
}
// Desafio 3
function splitSentence(frase) {
  let words = frase.split(' ');
  return words;
}
// Desafio 4
function concatName(names) {
  let ultimoPrimeiro = names[names.length-1].concat(', ').concat(names[0]);
  return ultimoPrimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties
  return pontos;
}
// Desafio 6
function highestCount(numeros) {
let bigNumber = -2;
let contador = 0; 
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > bigNumber) { 
      bigNumber = numeros[index];
    }
  }
  for (let index2 = 0; index2 < numeros.length; index2 += 1) {
    if (numeros[index2] === bigNumber) {
      contador += 1;
    }
  }
  return contador;  
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if((Math.abs(mouse - cat1)) < (Math.abs(mouse - cat2))){
    return 'cat1';
  } else if ((Math.abs(mouse - cat1)) === (Math.abs(mouse - cat2))){
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat2';
  }
}    
// Desafio 8
function fizzBuzz(num) {
  let array = []; 
  for(let index in num){
    if(num[index] % 3 === 0 && num[index] % 5 === 0){
      array.push('fizzBuzz');
    } else if(num[index] % 3 === 0){
      array.push('fizz');
    } else if(num[index] % 5 === 0){
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array
}
// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
