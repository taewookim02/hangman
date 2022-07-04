'use strict';

const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');
const color = '#333';
context.strokeStyle = color;
context.lineWidth = 4;

const draw = function (x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
};

// 1. HANGER BOTTOM HORIZONTAL
const hangerBottomHorizontal = draw(50, 400, 300, 400);
// context.beginPath();
// context.moveTo(50, 400);
// context.lineTo(300, 400);
// context.stroke();

// 2. HANGER LEFT VERTICAL
const hangerLeftVertical = draw(100, 100, 100, 400);
// context.beginPath();
// context.moveTo(100, 100);
// context.lineTo(100, 400);
// context.stroke();

// 3. HANGER TOP HORIZONTAL
const hangerTopHorizontal = draw(100, 100, 200, 100);
// context.beginPath();
// context.moveTo(100, 100);
// context.lineTo(200, 100);
// context.stroke();

// 4. HANGER TOP VERTICAL
const hangerTopVertical = draw(200, 100, 200, 150);
// context.beginPath();
// context.moveTo(200, 100);
// context.lineTo(200, 150);
// context.stroke();

// 5. HEAD
context.beginPath();
context.arc(200, 175, 25, 0, Math.PI * 2, true);
context.stroke();

// 6. BODY
const body = draw(200, 200, 200, 295);
// context.beginPath();
// context.moveTo(200, 200);
// context.lineTo(200, 295);
// context.stroke();

// 7. ARMS
const armLeft = draw(200, 200, 150, 230);
const armRight = draw(200, 200, 250, 230);
// context.beginPath();
// context.moveTo(200, 200);
// context.lineTo(150, 230);
// context.moveTo(200, 200);
// context.lineTo(250, 230);
// context.stroke();

// 8. LEGS
const legLeft = draw(200, 295, 150, 350);
const lefRight = draw(200, 295, 250, 350);
// context.beginPath();
// context.moveTo(200, 295);
// context.lineTo(150, 350);
// context.moveTo(200, 295);
// context.lineTo(250, 350);
// context.stroke();

// class Draw {
//   constructor() {

//   }
// }
