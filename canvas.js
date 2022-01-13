function initializeAnimation() {
  window.requestAnimationFrame(draw);
}

function drawArt(ctx) {

    ctx.save();
  let time2 = new Date();
 ctx.translate(time2.getSeconds(), 0);

  ctx.beginPath();
  ctx.arc(0, 0, 100, 0, Math.PI * 2, false);
  ctx.stroke();


  // Draw rectangle
  ctx.beginPath();
  ctx.moveTo(-80, -175);
  ctx.lineTo(80, -175);
  ctx.lineTo(80, 20);
  ctx.lineTo(-80, 20);
  ctx.lineTo(-80,-175);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-30, -30);
  ctx.lineTo(-39, 9);
  ctx.lineTo(-60,18);
  ctx.lineTo(-42,30);
  ctx.lineTo(-42, 63);
  ctx.lineTo(0,36);
  ctx.lineTo(30,45);
  ctx.lineTo(24,21);
  ctx.lineTo(39,-12);
  ctx.lineTo(0,0);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(-190, -120);
  ctx.stroke();



  ctx.save();
  let time = new Date();
  ctx.rotate(time.getSeconds() + time.getMilliseconds() / 1000);
  ctx.beginPath();
  ctx.moveTo(-100, -180);
  ctx.lineTo(140, 120);
  ctx.stroke();
  ctx.restore();

  ctx.fillRect(-160, 10, 100, 100);
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
