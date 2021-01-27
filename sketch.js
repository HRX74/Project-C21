var thickness, wall;

var bullet, speed, weight;

function setup() {
  createCanvas(1600, 400);

  bullet = createSprite(50, 200, 40, 20);

  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness, height / 2);

  wall.shapeColor = (80, 80, 80);

  thickness = random(22, 83);

  speed = random(223, 321);

  weight = random(30, 52);

  bullet.velocityX = speed;
}

function draw() {
  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;

    var damage =
      (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

    if (damage > 10) {
      wall.shapeColor = "red";
    }

    if (damage < 10) {
      wall.shapeColor = "green";
    }
  }
  bullet.collide(wall);

  background("aqua");
  drawSprites();
}

function hasCollided(bullet, wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  }

  return false;
}
