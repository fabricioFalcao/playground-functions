// Desafio 1 - Crie a função compareTrue

const compareTrue = (parametro1, parametro2) => (parametro1 === true && parametro2 === true);

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
  for (let index = 1; index < arrange(arrayNumbers).length; index += 1) {
    if (arrange(arrayNumbers)[index] === arrange(arrayNumbers)[index - 1]) {
      frequenciaMaior += 1;
    } else {
      break;
    }
  }
  return frequenciaMaior;
};

console.log(highestCount([2, 4, 3, 3, 6, 3, 2]));

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

const distCat1 = (mouse, cat1) => Math.abs(cat1 - mouse);

const distCat2 = (mouse, cat2) => Math.abs(cat2 - mouse);

function catAndMouse(mouse, cat1, cat2) {
  if (distCat1(mouse, cat1) < distCat2(mouse, cat2)) {
    return 'cat1';
  }
  if (distCat1(mouse, cat1) > distCat2(mouse, cat2)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8 - Crie a função fizzBuzz

const fizzBuzzer = (numbers) => {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      numbers[index] = 'fizzBuzz';
    }
  }
  return numbers;
};

const fizzer = (numbers) => {
  const fB = fizzBuzzer(numbers);
  for (let index = 0; index < fB.length; index += 1) {
    if (typeof fB[index] === 'number' && fB[index] % 3 === 0 && fB[index] % 5 !== 0) {
      fB[index] = 'fizz';
    }
  }
  return numbers;
};

const buzzer = (numbers) => {
  const f = fizzer(numbers);
  for (let index = 0; index < f.length; index += 1) {
    if (typeof f[index] === 'number' && f[index] % 3 !== 0 && f[index] % 5 === 0) {
      f[index] = 'buzz';
    }
  }
  return numbers;
};

function fizzBuzz(numbers) {
  const b = buzzer(numbers);
  for (let index = 0; index < b.length; index += 1) {
    if (typeof b[index] === 'number' && b[index] % 3 !== 0 && b[index] % 5 !== 0) {
      b[index] = 'bug!';
    }
  }
  return numbers;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9 - Crie a função encode e a função decode

function encode(frase) {
  const splt = frase.split('');
  for (let letras = 0; letras < splt.length; letras += 1) {
    if (splt[letras] === 'a') {
      splt[letras] = 1;
    } if (splt[letras] === 'e') {
      splt[letras] = 2;
    } if (splt[letras] === 'i') {
      splt[letras] = 3;
    } if (splt[letras] === 'o') {
      splt[letras] = 4;
    } if (splt[letras] === 'u') {
      splt[letras] = 5;
    }
  }
  return splt.join('');
}

function decode(code) {
  const splt2 = code.split('');
  for (let letras = 0; letras < splt2.length; letras += 1) {
    if (splt2[letras] === '1') {
      splt2[letras] = 'a';
    } if (splt2[letras] === '2') {
      splt2[letras] = 'e';
    } if (splt2[letras] === '3') {
      splt2[letras] = 'i';
    } if (splt2[letras] === '4') {
      splt2[letras] = 'o';
    } if (splt2[letras] === '5') {
      splt2[letras] = 'u';
    }
  }
  return splt2.join('');
}

// Desafio 10 - Crie a função techList

const techList = (techs, names) => {
  let sorted = techs.sort();
  const lista = [];
  for (let index = 0; index < techs.length; index += 1) {
    lista[index] = { tech: sorted[index], name: names };
  }
  return lista;
};

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
