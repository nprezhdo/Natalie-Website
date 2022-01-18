function initializeAnimation() {
  window.requestAnimationFrame(draw);
}

function drawArt(ctx) {

    ctx.save();
  let time2 = new Date();
 ctx.translate(time2.getSeconds(), 0);
 ctx.restore();

  ctx.beginPath();
  ctx.arc(0, 0, 100, 0, Math.PI * 2, false);
  ctx.stroke();


  // Draw rectangle
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(-80, -175);
  ctx.lineTo(80, -175);
  ctx.quadraticCurveTo(-20,-100,10,0)
  //ctx.lineTo(80, 20);
  ctx.lineTo(-39, 9);
  ctx.quadraticCurveTo(-150,-75,-80,-175);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-30, -30);
  ctx.lineTo(-39, 9);//
  ctx.lineTo(-70,18);
  ctx.lineTo(-42,38);
  ctx.lineTo(-42, 70);
  ctx.lineTo(-10,36);
  ctx.lineTo(30,45);
  ctx.lineTo(16,21);
  ctx.lineTo(39,-12);
  ctx.lineTo(0,0);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  let time = new Date();
  ctx.rotate(time.getSeconds() + time.getMilliseconds() / 1000);
  let d = Math.min(200, 200);
  let k = 25;
  ctx.moveTo(k, k+d / 4);
  ctx.quadraticCurveTo(k, k, k + d / 4, k);
  ctx.quadraticCurveTo(k + d / 2, k, k + d / 2, k + d / 4);
  ctx.quadraticCurveTo(k + d / 2, k, k + d * 3/4, k);
  ctx.quadraticCurveTo(k + d, k, k + d, k + d / 4);
  ctx.quadraticCurveTo(k + d, k + d / 2, k + d * 3/4, k + d * 3/4);
  ctx.lineTo(k + d / 2, k + d);
  ctx.lineTo(k + d / 4, k + d * 3/4);
  ctx.quadraticCurveTo(k, k + d / 2, k, k + d / 4);
  ctx.stroke();
  ctx.fill();
  ctx.restore();


}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 900, 700); // clear canvas

  // Figure out what pen we wanna draw with
  ctx.fillStyle = 'rgba(0, 153, 255, 1)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';

  ctx.save();
  ctx.lineWidth = 6;
  ctx.translate(450, 250);
  drawArt(ctx);
  ctx.restore();


  // Call draw when the website is ready
  window.requestAnimationFrame(draw);
}

initializeAnimation();
