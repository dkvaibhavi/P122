
function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
  }
  
  function draw() {
    background(220);
    fill("lightpink");
    circle(30,30,60);
    fill("lightpink");
    circle(370,30,60);
    fill("lightpink");
    circle(370,370,60);
    fill("lightpink");
    circle(30,370,60);
    fill("skyblue")
    rect(20,50,20,290)
    fill("skyblue")
    rect(360,50,20,290)
    fill("skyblue")
    rect(50,370,290,20)
    fill("skyblue")
    rect(50,30,290,20)
    image(video ,100 , 100 , 200, 200);
  }

  function take_snapshot()
{
    save('myP5.JSImage.png');
}