let sprinkleX = []
let sprinkleY = []

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  oreos(100,100);
  sprinkles(50,50, 150,250, 150,250)
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

function drawBackground(){
  rectMode(CENTER);
  //noStroke();

  push();
  fill('silver')
  rect(width/2,height-300,width,30)
  rect(width/2,height-201,width,20)
  pop();
  
  push();
  fill('blue')
  rect(width/2,height-248,width,75)
  pop();
 
  push();
  fill('#CBC3E3');
  rect(width/2,height-95.5,width,191)
  pop();
  
  push();
  fill('grey');
  rect(width/2,20,width,5)
  rect(width/2,height-36,width,70)
  pop();
  
  for(let i=width-655;i<width-30;i = i + 50){
  line(i,height-71,i,height+71)}
  
  rect(340,57,50,70)
}

