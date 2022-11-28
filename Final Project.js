let sprinkleX = []
let sprinkleY = []

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rectMode(CENTER)
angleMode(DEGREES)
  oreos(100,100);
  sprinkles(50,50, 150,250, 150,250)
  WhipCan(100,200,1)
  WhipCream(300,200,1)
}


function oreos(x,y){
  push();
  translate(x,y)
    fill("#261D1C")
    ellipse(0,0,50)
    fill(255)
    ellipse(2,2,50)
    fill("#261D1C")
    ellipse(4,4,50)
  pop();
}

function sprinkles(x1,y1, x2,x3, y2,y3){
  push();
  translate(x1,y1);
  
    for(let i = 0; i<125; i++){
      sprinkleX.push(random(x2,x3))
      sprinkleY.push(random(y2,y3))
    }
  
  
    for(let i = 0; i<25; i++){
      fill("#F23D4C")
      ellipse(sprinkleX[i], sprinkleY[i], 30,5)
    }
    for(let i = 25; i<50; i++){
      fill("#F272B8")
      ellipse(sprinkleX[i], sprinkleY[i], 30,5)
    }
    for(let i = 50; i<75; i++){
      fill("#8DE8F2")
      ellipse(sprinkleX[i], sprinkleY[i], 30,5)
    }
    for(let i = 75; i<100; i++){
      fill("#04BF45")
      ellipse(sprinkleX[i], sprinkleY[i], 30,5)
    }
  for(let i = 100; i<125; i++){
      fill("#F2B705")
      ellipse(sprinkleX[i], sprinkleY[i], 30,5)
    }
  pop;
  
}


function WhipCan(x,y,s) { 
push()
  translate(x,y)
  scale(s)
  noStroke()
//can
  fill(255,0,0)
    rect(0,0,50,100)
    ellipse(0,50,50,15)
  stroke(1)
    arc(0,50,50,15,0,180)
//lid
  noStroke()
  fill(255)
    ellipse(0,-50,50,20)
  fill(255,0,0) 
    quad(-14,-57.5,-6,-85,6,-85,14,-57.5)
//label
  fill(255)
    ellipse(0,0,25,25)
    ellipse(10,-10,25,25)
    ellipse(-5,14,17,17)
    ellipse(-7,-16,23,23)
    ellipse(-10,1,20,20)
    ellipse(10,5,20,20)
  fill(0)
  textSize(12)
  text("Whip",-12,0)
pop()
}

function WhipCream(x,y,s) {
push()
  translate(x,y)
  scale(s)
  noStroke()
    ellipse(0,0,100,40)
    ellipse(0,-15,80,40)
    ellipse(0,-30,60,40)
    ellipse(0,-45,40,30)
pop()
}
