// Desafio 1 - Crie a função compareTrue

const compareTrue = (parametro1, parametro2) => (parametro1 === true && parametro2 === true) && true;
const girafa = true;
const elefante = true;
const macaco = false;

// Desafio 2 - Crie a função splitSentence

const splitSentence = (frase) => frase.split(' ');

// Desafio 3 - Crie a função concatName

const concatName = (arrayString) => `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => 3 * wins + ties;

// Desafio 5 - Crie a função highestCount

const arrange = (arrayNumbers) => arrayNumbers.sort((a, b) => a - b).reverse();

const highestCount = (arrayNumbers) => {
  let frequenciaMaior = 1;
  // for (let index of arrange(arrayNumbers)) {
  for (let index = 1; index < arrange(arrayNumbers).length; index += 1) {
    if (arrange(arrayNumbers)[index] === arrange(arrayNumbers)[index - 1]) {
      frequenciaMaior += 1;
    } else {
      break;
    }
  }
  return frequenciaMaior;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => (base * height) / 2;

const calcRectangleArea = (base, height) => base * height;

function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  }
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
}

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => { }),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => { }),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => { }),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => { }),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => { }),
  concatName: typeof concatName === 'function' ? concatName : (() => { }),
  decode: typeof decode === 'function' ? decode : (() => { }),
  encode: typeof encode === 'function' ? encode : (() => { }),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => { }),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  techList: typeof techList === 'function' ? techList : (() => { }),
};
