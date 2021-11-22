var bg, bgimg
var player, playerImg
var ground
var cash,cashimg
var cashGroup
var score=0


function preload() {
  bgimg = loadImage("bg.jpg");
  playerImg = loadImage("player1.png")
  cashimg = loadImage("Cash.png")
}


function setup() {
  createCanvas(800,400);
  bg = createSprite(400,200);
  bg.scale = 2
  bg.addImage(bgimg)
  bg.velocityX = -1
  player = createSprite(200,340)
  player.scale = 0.3
  player.addImage(playerImg)
  ground = createSprite(400,390,800,20)
  ground.visible = false
  cashGroup = new Group ()
}

function draw() {
  background(255,255,255); 
  bg.velocityX = -5 
  if (bg.x < 0)  {
    bg.x = width/2
  }
  spawnCash()
  if (keyDown("space")) {
    player.velocityY = -10
  }
  player.velocityY = player.velocityY + 0.8
  player.collide(ground);
  if (cashGroup.isTouching(player))  {
    cashGroup.destroyEach()
    score = score + 1
  }

  drawSprites();
  textSize(20)
  text("score"+score, 100,100)
}

function spawnCash() {
  if(frameCount%120==0) {
    var cash = createSprite(800,300,10,10)
    cash.y = Math.round(random(200,350)  )
    cash.scale = 0.2
    cash.velocityX = -3
    cash.addImage(cashimg)
    cashGroup.add(cash)
  }
}