import { counter } from './lowerUpperCase.js';

const alpabetRuLower = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '&bsol;', 'Del', 'CapsLook', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];

const alpabetRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '&bsol;', 'Del', 'CapsLook', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];

const alpabetEnLower = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '&bsol;', 'Del', 'CapsLook', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];

const alpabetEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&bsol;', 'Del', 'CapsLook', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];

let languageRu = false;

function changelanguageKey() {
  if (languageRu === false) {
    languageRu = true;
    if (counter === 1) {
      for (let i = 0; i < alpabetRuLower.length; i += 1) {
        const divKey = document.querySelectorAll('div')[i];
        divKey.innerHTML = alpabetRuLower[i];
      }
    } else {
      for (let i = 0; i < alpabetRu.length; i += 1) {
        const divKey = document.querySelectorAll('div')[i];
        divKey.innerHTML = alpabetRu[i];
      }
    }
    localStorage.setItem('changelanguage', 'ru');
  } else {
    languageRu = false;
    if (counter === 1) {
      for (let i = 0; i < alpabetEnLower.length; i += 1) {
        const divKey = document.querySelectorAll('div')[i];
        divKey.innerHTML = alpabetEnLower[i];
      }
    } else {
      for (let i = 0; i < alpabetEn.length; i += 1) {
        const divKey = document.querySelectorAll('div')[i];
        divKey.innerHTML = alpabetEn[i];
      }
    }
    localStorage.setItem('changelanguage', 'en');
  }
}

export {
  alpabetEn, alpabetEnLower, alpabetRu, alpabetRuLower, changelanguageKey,
};
