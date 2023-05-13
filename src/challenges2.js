// Desafio 11 - Crie a função generatePhoneNumber

const verifyLength = (numbersArray) => numbersArray.length === 11;

const verifyDigits = (numbersArray) => {
  for (let value of numbersArray) {
    if (value > 9 || value < 0) {
      return false;
    }
  }
  return true;
};

const verifyRepeated = (numbersArray) => {
  let contador = {};
  for (let i = 0; i < numbersArray.length; i += 1) {
    let atual = numbersArray[i];
    if (contador[atual] === undefined) {
      contador[atual] = 1;
    } else {
      contador[atual] += 1;
    }
  }
  return contador;
};

const verifyRepetition = (numbersArray) => {
  let repet = verifyRepeated(numbersArray);

  for (let i in repet) {
    if (repet[i] >= 3) {
      return false;
    }
  }
  return true;
};

const generatePhoneNumber = (numbersArray) => {
  if (verifyLength(numbersArray) === false) {
    return 'Array com tamanho incorreto.';
  }
  if (!verifyDigits(numbersArray) || !verifyRepetition(numbersArray)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  numbersArray.splice(0, 0, '(');
  numbersArray.splice(3, 0, ') ');
  numbersArray.splice(9, 0, '-');
  return numbersArray.join('');
};

// Desafio 12 -  Crie a função triangleCheck

const sumCheck = (lineA, lineB, lineC) => lineA < (lineB + lineC)
  && lineB < (lineA + lineC) && lineC < (lineA + lineB);

const differenceCheck = (lineA, lineB, lineC) => lineA > Math.abs(lineB - lineC)
  && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB);

const triangleCheck = (lineA, lineB, lineC) =>
  sumCheck(lineA, lineB, lineC) && differenceCheck(lineA, lineB, lineC);

// Desafio 13 - Crie a função hydrate

const hydrate = (alcohool) => {
  let doses = alcohool.match(/\d/g);
  let soma = doses.reduce((total, parcial) => Number(total) + Number(parcial), 0);
  return soma !== 1 ? `${soma} copos de água` : `${soma} copo de água`;
};

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => { }),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => { }),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => { }),
};
