'use strict';

// const randomWord = require('random-words');
const randomWord = 'screen';
const canvas = document.querySelector('.canvas');
const dashes = document.querySelector('.dashes');
const wrongCharacters = document.querySelector('.wrong-chars');
const wrongCharacter = document.querySelector('.wrong-char');
const context = canvas.getContext('2d');

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
randomWord.split('').forEach(el => (dashes.innerText += '_'));

// WRONG STATE
// Regular expression for alphabets
const alphabetRegex = new RegExp(/^[A-Za-z]*$/);
// Listen to keyboard output
document.addEventListener('keydown', function (e) {
  if (e.key.length < 2 && alphabetRegex.test(e.key)) {
    // Check if character in innerText
    if (!wrongCharacter.innerText.includes(e.key)) {
      // Append character to view
      wrongCharacter.innerText += e.key;
      // Use switch for drawing in canvas based on the length of wrongCharacter.innerText length.
    }
  }
});

// TODO:
// CORRECT STATE
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
