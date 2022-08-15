function setup(){
      canvas = createCanvas(640, 480);
      canvas.center();
      video = createCapture(VIDEO);
      video.hide();
}
function draw(){
      image(video, 50, 50, 540, 380);

      fill("#00FF00");
      stroke('#00FF00');
      rect(30, 25, 570, 50);
      rect(30, 410, 570, 50);
      rect(25, 25, 50, 400);
      rect(565, 25, 50, 400);
      fill("#FF0000");
      stroke('#FF0000');
      circle(50, 50, 80);
      circle(590, 50, 80);
      circle(50, 430, 80);
      circle(590, 430, 80);
}