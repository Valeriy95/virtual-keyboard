import { counter, lowerUpperCase } from './lowerUpperCase';
import { shiftKeyUp, shiftKeyDown } from './shiftKey';
import {
  alpabetEn, alpabetEnLower, alpabetRu, alpabetRuLower, changelanguageKey,
} from './altKey';

const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const body = document.querySelector('body');

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
body.append(textarea);

const section = document.createElement('section');
section.className = 'container';
body.append(section);

function createKey(lang = 'en') {
  if (lang === 'en') {
    for (let i = 0; i < alpabetEn.length; i += 1) {
      // let divKey = document.createElement('div');
      const divKey = document.createElement('div');
      divKey.innerHTML = alpabetEn[i];
      divKey.className = `p${i + 1}`;
      divKey.setAttribute('data-key', keyCodes[i]);
      section.append(divKey);
    }
  }
  if (lang === 'ru') {
    for (let i = 0; i < alpabetRu.length; i += 1) {
      // let divKey = document.createElement('div');
      const divKey = document.createElement('div');
      divKey.innerHTML = alpabetRu[i];
      divKey.className = `p${i + 1}`;
      divKey.setAttribute('data-key', keyCodes[i]);
      section.append(divKey);
    }
  }
}

createKey(localStorage.changelanguage);

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  if (keyCodes.includes(e.code) === true) {
    const display = document.querySelector('.textarea');
    const p = document.querySelector(`[data-key="${e.code}"]`);

    if (e.code === 'Tab') {
      const positionCursor = display.selectionEnd + 3;
      const arrText = display.value.split('');
      arrText.splice(display.selectionEnd, 0, '   ');
      display.value = arrText.join('');
      display.selectionStart = positionCursor;
      display.selectionEnd = positionCursor;
    } else if (e.code === 'Enter') {
      const part1 = display.value.split('').splice(0, display.selectionStart).join('');
      const part2 = display.value.split('').splice(display.selectionEnd).join('');
      display.value = `${part1} \n${part2}`;
      display.selectionStart = part1.length + +2;
      display.selectionEnd = part1.length + +2;
    } else if (e.code === 'Delete') {
      const part1 = display.value.split('').splice(0, display.selectionEnd).join('');
      const part2 = display.value.split('').splice(display.selectionEnd + 1).join('');
      display.value = part1 + part2;
      display.selectionStart = part1.length;
      display.selectionEnd = part1.length;
      display.focus();
    } else if (e.code === 'CapsLock') {
      lowerUpperCase();
    } else if (e.code === 'Space') {
      const positionCursor = display.selectionEnd + 1;
      const arrText = display.value.split('');
      arrText.splice(display.selectionEnd, 0, ' ');
      display.value = arrText.join('');
      display.selectionStart = positionCursor;
      display.selectionEnd = positionCursor;
    } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      if (e.repeat) {
        e.preventDefault();
      } else {
        shiftKeyDown();
      }
    } else if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
      display.value += '';
    } else if (e.code === 'MetaLeft') {
      display.value += '';
    } else if (e.code === 'AltLeft' || e.code === 'AltRight') {
      display.value += '';
    } else if (e.code === 'Backspace') {
      let part1 = display.value.split('').splice(0, display.selectionEnd - 1).join('');
      if (part1[part1.length - 1] === ' ') {
        part1 = part1.split('').splice(0, part1.length - 1).join('');
      }
      const part2 = display.value.split('').splice(display.selectionEnd).join('');
      display.value = part1 + part2;
      display.selectionStart = part1.length;
      display.selectionEnd = part1.length;
    } else {
      const positionCursor = display.selectionEnd + 1;
      const arrText = display.value.split('');
      arrText.splice(display.selectionEnd, 0, p.textContent);
      display.value = arrText.join('');
      display.selectionStart = positionCursor;
      display.selectionEnd = positionCursor;
    }

    function animationStart() {
      p.classList.add('animation');
    }

    if (e.repeat) {
      e.preventDefault();
    } else {
      animationStart();
    }

    if (e.altKey && e.ctrlKey) {
      changelanguageKey();
    }
  } else {
    return;
  }
});
