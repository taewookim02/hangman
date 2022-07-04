'use strict';

const canvas = document.querySelector('.canvas');
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
const lefRight = draw(200, 295, 250, 350);
