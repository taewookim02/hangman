'use strict';

const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');
const color = '#333';
context.lineWidth = 4;

// 1. HANGER BOTTOM HORIZONTAL
context.beginPath();
context.moveTo(50, 400);
context.lineTo(300, 400);
context.strokeStyle = color;
context.stroke();

// 2. HANGER LEFT VERTICAL
context.beginPath();
context.moveTo(100, 100);
context.lineTo(100, 400);
context.strokeStyle = color;
context.stroke();

// 3. HANGER TOP HORIZONTAL
context.beginPath();
context.moveTo(100, 100);
context.lineTo(200, 100);
context.strokeStyle = color;
context.stroke();

// 4. HANGER TOP VERTICAL
context.beginPath();
context.moveTo(200, 100);
context.lineTo(200, 150);
context.strokeStyle = color;
context.stroke();

// 5. HEAD
context.beginPath();
context.fillStyle = color;
context.arc(200, 175, 25, 0, Math.PI * 2, true);
context.stroke();

// 6. BODY
context.beginPath();
context.moveTo(200, 200);
context.lineTo(200, 295);
context.strokeStyle = color;
context.stroke();

// 7. ARMS
context.beginPath();
context.strokeStyle = color;
context.moveTo(200, 200);
context.lineTo(150, 230);
context.moveTo(200, 200);
context.lineTo(250, 230);
context.stroke();

// 8. LEGS
context.beginPath();
context.strokeStyle = color;
context.moveTo(200, 295);
context.lineTo(150, 350);
context.moveTo(200, 295);
context.lineTo(250, 350);
context.stroke();
