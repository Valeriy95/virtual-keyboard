import { counter, lowerUpperCase } from './lowerUpperCase';
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
