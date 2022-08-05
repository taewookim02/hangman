'use strict';

// const randomWord = require('random-words');
const randomWord = 'screen';
const canvas = document.querySelector('.canvas');
let dashes = document.querySelector('.dashes');
const wrongCharacters = document.querySelector('.wrong-chars');
const wrongCharacter = document.querySelector('.wrong-char');
const context = canvas.getContext('2d');
const alphabetRegex = new RegExp(/^[A-Za-z]*$/);

// CONFIG
const color = '#333';
context.strokeStyle = color;
context.lineWidth = 4;

const draw = function (x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
};

////////////////////////////////////////////////////////
console.log(randomWord);
// Display _ _ _ _ based on the length of random word
const wordList = randomWord.split('');
wordList.forEach(el => (dashes.innerText += '_'));
const dashesWordHelperList = dashes.firstChild.data.split('');

////////////////////////////////////////////////////////

// Listen to keyboard, check if they are Alphabets
document.addEventListener('keydown', function (e) {
  if (e.key.length < 2 && alphabetRegex.test(e.key)) {
    if (wordList.indexOf(e.key) > -1) {
      console.log('Success');
      // replace all dashes that contains the e.key using index
      wordList.forEach((char, i) => {
        if (char === e.key) {
          // Modify _ _ _ _ dashes with char based on index
          dashesWordHelperList[i] = char;
          dashes.firstChild.data = dashesWordHelperList.join('');
        }
      });
      return;
    }

    if (!wrongCharacter.innerText.includes(e.key)) {
      wrongCharacter.innerText += e.key;

      switch (wrongCharacter.innerText.length) {
        case 1:
          draw(50, 400, 300, 400);
          break;
        case 2:
          draw(100, 100, 100, 400);
          break;
        case 3:
          draw(100, 100, 200, 100);
          break;
        case 4:
          draw(200, 100, 200, 150);
          break;
        case 5:
          context.beginPath();
          context.arc(200, 175, 25, 0, Math.PI * 2, true);
          context.stroke();
          break;
        case 6:
          draw(200, 200, 200, 295);
          break;
        case 7:
          draw(200, 200, 150, 230);
          draw(200, 200, 250, 230);
        case 8:
          draw(200, 295, 150, 350);
          draw(200, 295, 250, 350);
      }
    }
  }
});

// TODO:
// CORRECT STATE
// Use switch for drawing in canvas based on the length of wrongCharacter.innerText length.

/*
// 1. HANGER BOTTOM HORIZONTAL
const hangerBottomHorizontal = draw(50, 400, 300, 400);

// 2. HANGER LEFT VERTICAL
const hangerLeftVertical = draw(100, 100, 100, 400);

// 3. HANGER TOP HORIZONTAL
const hangerTopHorizontal = draw(100, 100, 200, 100);

// 4. HANGER TOP VERTICAL
const hangerTopVertical = draw(200, 100, 200, 150);

// 5. HEAD
context.beginPath();
context.arc(200, 175, 25, 0, Math.PI * 2, true);
context.stroke();

// 6. BODY
const body = draw(200, 200, 200, 295);

// 7. ARMS
const armLeft = draw(200, 200, 150, 230);
const armRight = draw(200, 200, 250, 230);

// 8. LEGS
const legLeft = draw(200, 295, 150, 350);
const legRight = draw(200, 295, 250, 350);
 */
////////////////////////////////
// LOGIC

// listen to keyboard input

// display keyboard input
// if right
//// render characters in the right dashes
// if all right
//// render success popup

// if wrong && count < 8
//// render drawing
//// render character at .wrong-char div
// if count === 8
//// render failure popup

////////////////////////////////
// VIEW

// write success popup (try again button)
// write failure popup (try again button)
// TODO: Guard clausing
