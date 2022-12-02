let sprinkleX = [];
let sprinkleY = [];

let lessSprinkleX = [];
let lessSprinkleY = [];

let chocolateIceCream = false;
let vanillaIceCream = false;
let strawberryIceCream = false;
let oreoClicked = false;
let whipClicked = false;
let cocoSyrupClicked = false;
let strawbSyrupClicked = false;
let caramelSyrupClicked = false;
let sprinklesClicked = false;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(220);
  drawBackground();
  
  WhipCan(50, 162, 0.48);
  
  cocoSauce(125, 162, 0.48);
  
  strawberrySauce(165, 162, 0.48);
  
  caramelSauce(205, 162, 0.48);
  
  chocolateBin();
  
  updateChocolateIceCream();
  
  vanillaBin();
  
  updateVanillaIceCream();
  
  strawberryBin();
  
  updateStrawberryIceCream ();
  
  hole(90, 300, 0.8);
  oreos(100, 300, 0.5);
  oreos(80, 300, 0.5);
  oreos(90, 290, 0.5);
  
  updateWhip();
  
  updateCocoSyrup();
  
  updateStrawbSyrup();
  
  updateCaramelSyrup();
  
  updateOreos();
  
  
  hole(165, 300, 0.8);
  sprinkles(165, 300, -40, 40, -30, 30, 0.4);
  
  updateSprinkles();
  
  drawBowl(400, 330, 0.9);
    fill(255);
}

function oreos(x,y,s){
  push();
  translate(x,y);
  scale(s);
    fill("#261D1C")
    ellipse(0,0,50)
    fill(255)
    ellipse(2,2,50)
    fill("#261D1C")
    ellipse(4,4,50)
  pop();
}

function sprinkles(x1,y1, x2,x3, y2,y3, s){
  push();
  translate(x1,y1);
  scale(s)
    for(let i = 0; i<125; i++){
      sprinkleX.push(random(x2,x3))
      sprinkleY.push(random(y2,y3))
    }
  
    for(let i = 0; i<20; i++){
      fill("#F23D4C")
      ellipse(sprinkleX[i], sprinkleY[i], 30,5)
    }
    for(let i = 20; i<35; i++){
      fill("#F272B8")
      ellipse(sprinkleX[i], sprinkleY[i], 30,5)
    }
    for(let i = 35; i<45; i++){
      fill("#8DE8F2")
      ellipse(sprinkleX[i], sprinkleY[i], 30,5)
    }
    for(let i = 45; i<50; i++){
      fill("#04BF45")
      ellipse(sprinkleX[i], sprinkleY[i], 30,5)
    }
  for(let i = 50; i<55; i++){
      fill("#F2B705")
      ellipse(sprinkleX[i], sprinkleY[i], 30,5)
    }
  pop();
}

function lessSprinkles(x1,y1, x2,x3, y2,y3, s){
  push();
  translate(x1,y1);
  scale(s)
    for(let i = 0; i<125; i++){
      lessSprinkleX.push(random(x2,x3))
      lessSprinkleY.push(random(y2,y3))
    }
  
    for(let i = 0; i<3; i++){
      fill("#F23D4C")
      ellipse(sprinkleX[i], sprinkleY[i], 30,5)
    }
    for(let i = 3; i<6; i++){
      fill("#F272B8")
      ellipse(sprinkleX[i], sprinkleY[i], 30,5)
    }
    for(let i = 6; i<9; i++){
      fill("#8DE8F2")
      ellipse(sprinkleX[i], sprinkleY[i], 30,5)
    }
    for(let i = 9; i<12; i++){
      fill("#04BF45")
      ellipse(sprinkleX[i], sprinkleY[i], 30,5)
    }
  for(let i = 12; i<15; i++){
      fill("#F2B705")
      ellipse(sprinkleX[i], sprinkleY[i], 30,5)
    }
  pop();
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

function drawBowl(x,y,s){
  push();
  translate(x,y)
  scale(s)
  rectMode(CENTER);
  
  push();
  noStroke();
  let c = color(135,206,235,100)
  fill(c)
  ellipse(0,50,80,40)
  triangle(0,10,-40,-32,40,-32)
  rect(0,26,20,50)
  pop();
  
  pop();
}

function drawContainer(x,y,s){
  
  push();
  angleMode(DEGREES);
  translate(x,y)
  scale(s)
  noStroke();
  fill('grey')
  ellipse(0,0,100)
}

function mouseClicked(){
  //hole has x radius of 28 and y radius of 20
  if(mouseX > 62 && mouseX < 118 && mouseY > 280 && mouseY < 320){

   oreoClicked = !oreoClicked
  }
  
  if (mouseX > 22 && mouseX < 78 && mouseY > 220 && mouseY < 260) {
    chocolateIceCream = !chocolateIceCream;
  }
  
  if (mouseX > 97 && mouseX < 153 && mouseY > 220 && mouseY < 260) {
    vanillaIceCream = !vanillaIceCream;
  }
  
  if (mouseX > 172 && mouseX < 228 && mouseY >220 && mouseY < 260) {
    strawberryIceCream = !strawberryIceCream;
  }
  
  if (mouseX > 37.5 && mouseX < 62.5 && mouseY > 137 && mouseY < 187) {
      whipClicked = !whipClicked
      }
  
  if (mouseX > 112.5 && mouseX < 137.5 && mouseY > 137 && mouseY < 187) {
      cocoSyrupClicked = !cocoSyrupClicked
      }
  
  if (mouseX > 152.5 && mouseX < 177.5 && mouseY > 137 && mouseY < 187) {
      strawbSyrupClicked = !strawbSyrupClicked
      }
  
  if (mouseX > 192.5 && mouseX < 217.5 && mouseY > 137 && mouseY < 187) {
      caramelSyrupClicked = !caramelSyrupClicked
      }
  
  if (mouseX>140 && mouseX<190 && mouseY >285 && mouseY<315){
      sprinklesClicked = !sprinklesClicked
  }
}
 
function caramelSauce(x,y,s) {
  push();
  translate(x,y);
  scale(s);
  rectMode(CENTER);
  angleMode(DEGREES);
  
  fill('#D9863D');
    rect(0, 0, 50, 100);
  
    rect(0, 50, 52, 10);
  
    ellipse(0, -50, 52, 20);
    triangle(-8, -50, 8, -50, 0, -75);
  
  fill(255);
    ellipse (0, 0, 40);
  
  textSize(20);
  fill('#D9863D')
    text('CA', -14, 8);
  pop();
}

function strawberrySauce(x,y,s) {
  push();
  translate(x,y);
  scale(s);
  rectMode(CENTER);
  angleMode(DEGREES);
  
  fill('#D9666F');
    rect(0, 0, 50, 100);
  
    rect(0, 50, 52, 10);
  
    ellipse(0, -50, 52, 20);
    triangle(-8, -50, 8, -50, 0, -75);
  
  fill(255);
    ellipse (0, 0, 40);
  
  textSize(20);
  fill('#D9666F')
    text('S', -6, 8);
  pop();
}

function cocoSauce(x,y,s) {
  push();
  translate(x,y);
  scale(s);
  rectMode(CENTER);
  angleMode(DEGREES);
  
  fill('#402722');
    rect(0, 0, 50, 100);
  
    rect(0, 50, 52, 10);
  
    ellipse(0, -50, 52, 20);
    triangle(-8, -50, 8, -50, 0, -75);
  
  fill(255);
    ellipse (0, 0, 40);
  
  textSize(20);
  fill('#402722')
    text('CH', -14, 8);
  pop();
}

function yummyCoco (x, y, s) {
  push();
  translate(x, y);
  scale(s);
  angleMode(DEGREES);
    
  noFill();
  stroke('#402722');
  strokeWeight(2);
    arc(0, 0, 50, 15, 220, 500);
  rotate(180);
    arc(-5, -15, 75, 15, 190, 470);
    
  pop();
}

function yummyStrawb (x, y, s) {
  push();
  translate(x, y);
  scale(s);
  angleMode(DEGREES);
    
  noFill();
  stroke('#F28D95');
  strokeWeight(2);
    arc(0, 0, 50, 15, 220, 500);
  rotate(180);
    arc(-5, -15, 75, 15, 190, 470);
    
  pop();
}

function yummyCaramel (x, y, s) {
  push();
  translate(x, y);
  scale(s);
  angleMode(DEGREES);
    
  noFill();
  stroke('#D9863D');
  strokeWeight(2);
    arc(0, 0, 50, 15, 220, 500);
  rotate(180);
    arc(-5, -15, 75, 15, 190, 470);
    
  pop();
}

function WhipCan(x,y,s) { 
push()
  translate(x,y)
  scale(s)
  rectMode(CENTER)
  angleMode(DEGREES)
  noStroke()
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
  translate(x,y);
  scale(s);
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  fill(255);
    ellipse(0,0,100,40)
    ellipse(0,-15,80,40)
    ellipse(0,-30,60,40)
    ellipse(0,-45,40,30) 
pop()

}

function hole(x,y,s){
  push();
  translate(x,y);
  scale(s);
    fill("#4E4443")
    ellipse(0,0,70,50)
    fill(150)
    ellipse(0,-1.5,60,40)
  pop();
}

function chocolateBin() {
   hole(50, 240, 0.8);
    fill('#BF7154');
    ellipse(50, 240, 50, 35);
}

function vanillaBin() {
  hole(125, 240, 0.8);
    fill('#F2EBDC');
    ellipse(125, 240, 50, 35);
}

function strawberryBin () {
  hole(200, 240, 0.8);
    fill('#F2BDBD');
    ellipse(200, 240, 50, 35);
}

function chocolateScoop (x, y, s) {
  push();
  translate(x, y);
  scale(s);
  
  fill('#BF7154');
  noStroke();
    ellipse(0, 0, 50);
    ellipse(-15, 20, 25);
    ellipse(-25, 12, 25);
    ellipse(0, 22.5, 25);
    ellipse(15, 20, 25);
    ellipse(25, 12, 25);
  pop();
}

function strawberryScoop (x, y, s) {
  push();
  translate(x, y);
  scale(s);
  
  fill('#F2BDBD');
  noStroke();
    ellipse(0, 0, 50);
    ellipse(-15, 20, 25);
    ellipse(-25, 12, 25);
    ellipse(0, 22.5, 25);
    ellipse(15, 20, 25);
    ellipse(25, 12, 25);
  pop();
}

function vanillaScoop (x, y, s) {
  push();
  translate(x, y);
  scale(s);
  
  fill('#F2EBDC');
  noStroke();
    ellipse(0, 0, 50);
    ellipse(-15, 20, 25);
    ellipse(-25, 12, 25);
    ellipse(0, 22.5, 25);
    ellipse(15, 20, 25);
    ellipse(25, 12, 25);
  pop();
}

function updateChocolateIceCream () {
  if (chocolateIceCream) {
    chocolateScoop (400, 290, 0.7);
  }
}

function updateVanillaIceCream () {
  if (vanillaIceCream) {
    vanillaScoop (400, 290, 0.7);
  }
}

function updateStrawberryIceCream () {
  if (strawberryIceCream) {
    strawberryScoop (400, 290, 0.7);
  }
}

function updateOreos () {
  if (oreoClicked) {
    oreos(410, 280, 0.4);
  }
}

function updateWhip () {
  if (whipClicked) {
    WhipCream (400, 290, 0.35);
  }
}

function updateCocoSyrup () {
  if (cocoSyrupClicked) {
    yummyCoco (400, 280, 0.5);
  }
}

function updateStrawbSyrup () {
  if (strawbSyrupClicked) {
    yummyStrawb (400, 280, 0.5);
  }
}

function updateCaramelSyrup () {
  if (caramelSyrupClicked) {
    yummyCaramel (400, 280, 0.5);
  }
}

function updateSprinkles(){
  if(sprinklesClicked){
    lessSprinkles(400, 290, -40, 40, -30, 30, 0.3)
  }
}

//jnrgeuitrbg
