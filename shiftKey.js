import { counter } from './lowerUpperCase';

const keyCodesForShift = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash'];

const keyCodesForShiftOnCapsEnBack = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '&bsol;', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'];

const keyCodesForShiftOffCapsEnBack = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&bsol;', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];

const keyCodesForShiftOnCapsRuBack = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '&bsol;', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.'];

const keyCodesForShiftOffCapsRuBack = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '&bsol;', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'];

const keyCodesForShiftOffCapsEn = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?'];

const keyCodesForShiftOnCapsEn = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'];

const keyCodesForShiftOffCapsRu = ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ','];

const keyCodesForShiftOnCapsRu = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ','];

function shiftKeyUp() {
  if (localStorage.changelanguage === 'en' || localStorage.changelanguage === undefined) {
    if (counter === 1) {
      for (let i = 0; i < keyCodesForShift.length; i += 1) {
        const p = document.querySelector(`[data-key="${keyCodesForShift[i]}"]`);
        p.innerHTML = keyCodesForShiftOnCapsEnBack[i];
      }
    } else {
      for (let i = 0; i < keyCodesForShift.length; i += 1) {
        const p = document.querySelector(`[data-key="${keyCodesForShift[i]}"]`);
        p.innerHTML = keyCodesForShiftOffCapsEnBack[i];
      }
    }
  } else if (counter === 1) {
    for (let i = 0; i < keyCodesForShift.length; i += 1) {
      const p = document.querySelector(`[data-key="${keyCodesForShift[i]}"]`);
      p.innerHTML = keyCodesForShiftOnCapsRuBack[i];
    }
  } else {
    for (let i = 0; i < keyCodesForShift.length; i += 1) {
      const p = document.querySelector(`[data-key="${keyCodesForShift[i]}"]`);
      p.innerHTML = keyCodesForShiftOffCapsRuBack[i];
    }
  }
}

function shiftKeyDown() {
//   const capsLk = document.querySelector('.p30');
  if (localStorage.changelanguage === 'en' || localStorage.changelanguage === undefined) {
    if (counter === 1) {
      for (let i = 0; i < keyCodesForShift.length; i += 1) {
        const p = document.querySelector(`[data-key="${keyCodesForShift[i]}"]`);
        p.innerHTML = keyCodesForShiftOffCapsEn[i];
      }
    } else {
      for (let i = 0; i < keyCodesForShift.length; i += 1) {
        const p = document.querySelector(`[data-key="${keyCodesForShift[i]}"]`);
        p.innerHTML = keyCodesForShiftOnCapsEn[i];
      }
    }
  } else if (counter === 1) {
    for (let i = 0; i < keyCodesForShift.length; i += 1) {
      const p = document.querySelector(`[data-key="${keyCodesForShift[i]}"]`);
      p.innerHTML = keyCodesForShiftOffCapsRu[i];
    }
  } else {
    for (let i = 0; i < keyCodesForShift.length; i += 1) {
      const p = document.querySelector(`[data-key="${keyCodesForShift[i]}"]`);
      p.innerHTML = keyCodesForShiftOnCapsRu[i];
    }
  }
}

export { shiftKeyUp, shiftKeyDown };
