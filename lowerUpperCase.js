import {
  alpabetEn, alpabetEnLower, alpabetRu, alpabetRuLower,
} from './altKey';

let counter = 0;

const numberKeyLower = ['1', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53'];

function lowerUpperCase() {
  const p30 = document.querySelector('.p30');
  if (localStorage.changelanguage === 'en' || localStorage.changelanguage === undefined) {
    if (counter === 1) {
      counter -= 1;
      // counter--;
      for (let i = 0; i < numberKeyLower.length; i += 1) {
        const p = document.querySelector(`.p${numberKeyLower[i]}`);
        p.innerHTML = alpabetEn[numberKeyLower[i] - 1];
      }
      p30.classList.add('animCapsLkOff');
      p30.classList.remove('animCapsLkOn');
    } else {
      counter += 1;
      // counter++;
      for (let i = 0; i < numberKeyLower.length; i += 1) {
        const p = document.querySelector(`.p${numberKeyLower[i]}`);
        p.innerHTML = alpabetEnLower[numberKeyLower[i] - 1];
      }
      p30.classList.add('animCapsLkOn');
      p30.classList.remove('animCapsLkOff');
    }
  }
  if (localStorage.changelanguage === 'ru') {
    if (counter === 1) {
      counter -= 1;
      // counter--;
      for (let i = 0; i < numberKeyLower.length; i += 1) {
        const p = document.querySelector(`.p${numberKeyLower[i]}`);
        p.innerHTML = alpabetRu[numberKeyLower[i] - 1];
      }
      p30.classList.add('animCapsLkOff');
      p30.classList.remove('animCapsLkOn');
    } else {
      counter += 1;
      // counter++;
      for (let i = 0; i < numberKeyLower.length; i += 1) {
        const p = document.querySelector(`.p${numberKeyLower[i]}`);
        p.innerHTML = alpabetRuLower[numberKeyLower[i] - 1];
      }
      p30.classList.add('animCapsLkOn');
      p30.classList.remove('animCapsLkOff');
    }
  }
}

export { counter, lowerUpperCase };
