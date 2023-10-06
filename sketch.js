let ball, wall1, wall2, wall3, wall4, agua;

function setup() {
	new Canvas(650, 650);

	ball = new Sprite(650 / 2, 650 / 2, 50);
	ball.text = "Agua";
	ball.rotationLock = true;

	//los murhos
	wall1 = new Sprite(0, 650 / 2, 1, 650, 'static');
	wall2 = new Sprite(650 / 2, 0, 650, 1, 'static');
	wall3 = new Sprite(650, 650 / 2, 1, 650, 'static');
	wall4 = new Sprite(650 / 2, 650, 650, 1, 'static');

	agua = new Sprite(100, 100, 10, 20, "static");
	agua.collideTop = false;
	agua.collideDown = false;
	agua.collideRight = false;
	agua.collideLeft = false;
}

function draw() {
	background('gray');

	if (kb.pressing('left')) {
		ball.vel.x = -2;
	} else if (kb.pressing('right')) {
		ball.vel.x = 2;
	} else {
		ball.vel.x = 0;
	}

	if (kb.pressing('up')) {
		ball.vel.y = -2;
	} else if (kb.pressing('down')) {
		ball.vel.y = 2;
	} else {
		ball.vel.y = 0;
	}

}
