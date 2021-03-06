window.requestAnimationFrame(meter);

function meter(){
// read canvas
var canvas = document.getElementById('canvasPaper');
var ctx = canvas.getContext('2d');
ctx.save();

ctx.clearRect(0,0,150,150);
ctx.translate(75,75);
ctx.scale(0.4,0.4);
ctx.rotate(-Math.PI/2);
ctx.strokeStyle = 'black';
ctx.fillStyle = 'white';
ctx.lineWidth = 8;
ctx.lineCap = 'round';

ctx.save();
for (var i = 0.00; i < 1.02; i++) {
  ctx.beginPath();
  ctx.rotate(Math.PI/50);
  ctx.moveTo(100,0);
  ctx.lineTo(120,0);
  ctx.stroke();
}
ctx.restore();

// second hand 0-100
// ctx.save();
// ctx.lineWidth = 10;
// for (var i = 0.00; i < 1.02; i++) {
//   ctx.beginPath();
//   ctx.moveTo(117,0);
//   ctx.lineTo(120,0);
//   ctx.stroke();
//   ctx.rotate(Math.PI / 50);
// }
// ctx.restore();

 var res = document.getElementById('result').textContent;                                                                                                              ;
 var valueRes = parseFloat(res);

// console.log(valueRes);

  ctx.fillStyle = 'green';
  ctx.save();
  ctx.rotate(((Math.PI / 50)* valueRes) + (Math.PI/360)* (1.02 - valueRes));
  ctx.lineWidth = 15;
  ctx.beginPath();
  ctx.moveTo(-20,0);
  ctx.lineTo(80,0);
  ctx.strokeStyle = 'red';
  ctx.arc(0,0,10,0, 2 * Math.PI,true);
  ctx.lineTo(100,0);
  ctx.stroke();
  //ctx.restore();

//second hand
// ctx.save();
// ctx.rotate((Math.PI/ 360) * valueRes);
// ctx.lineWidth = 10;
// ctx.beginPath();
// ctx.moveTo(-28,0);
// ctx.lineTo(112,0);
// ctx.stroke();
// ctx.restore();


ctx.beginPath();
ctx.lineWidth = 14;
ctx.strokeStyle = '#325FA2';
ctx.arc(0,0,142,0,2 * Math.PI,true);
ctx.stroke();
ctx.restore();

//window.requestAnimationFrame(meter);
}
