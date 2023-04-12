function setup() {
  createCanvas(600, 600);
}

function draw() {
 background(105, 207, 195);
 describe('canvas with soft teal background');
  noStroke();
  //stripes
  fill (179,143,227)
  rect (50,-1,50,600,5)
  rect (150,-1,50,600,5)
   rect (500,-1,50,600,5)
   //ears
   fill (245, 189, 140);
   describe ('two triangles in a light brown/tan color')
  triangle(30, 240, 200, 375, 200, 250)
  triangle(570,240,250,475,250,250)
  //face
  ellipse(300,300,300,400);
   //body
 fill (38, 21, 18);
 describe ('one black ellipse')
  ellipse(300,650,300,400);
  //mask and earrings
  fill(38, 21, 18)
  describe ('black circles in varying sizes to create earrings and a facemask')
  ellipse(300, 425, 225, 250)
  ellipse(150, 325, 25, 25)
  ellipse(125, 315, 25, 25)
  ellipse(100, 300, 25, 25)
  ellipse(455,325,25,25)
  ellipse(480,310,25,25)
  ellipse(505,294,25,25)
  //shirt
  fill(31, 66, 99)
  describe ('two dark blue rectangles with rounded corners')
  rect(105, 490, 95, 175, 40)
  rect(420, 490, 95, 175, 40)
  fill (88, 169, 245)
  describe ('two light blue rectangles with rounded corners')
  rect(145, 465, 85, 175, 35)
  rect(380, 465, 85, 175, 35);
  //hair
  fill(235, 140, 52)
  describe ('three stacked orange rectangles with rounded corners')
  rect(125, 90, 345, 115, 65)
  rect(120, 155, 110, 95, 40)
  rect(370, 155, 110, 95, 40);
  //glasses
  fill (201, 148, 14);
  describe ('two large bronze-gold circles')
  ellipse(220,275,160,160)
  ellipse(380,275,160,160)
  fill(247, 235, 205)
  describe ('two slightly smaller cream circles')
  ellipse(220,275,140,140)
  ellipse(380,275,140,140);
}
