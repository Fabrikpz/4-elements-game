let player, wall1, wall2, wall3, wall4, agua, llaves, llaveCount, miniJefe;
let tieneLlave = false;

function setup() {
	new Canvas(650, 650);

	player = new Sprite(650 / 2, 600, 50);
	player.text = "Agua";
	player.rotationLock = true;

	miniJefe = new Sprite(650 / 2, 650 / 2, 65);
	miniJefe.text = "Mini jefe";

	//los murhos
	wall1 = new Sprite(0, 650 / 2, 1, 650, 'static');
	wall2 = new Sprite(650 / 2, 0, 650, 1, 'static');
	wall3 = new Sprite(650, 650 / 2, 1, 650, 'static');
	wall4 = new Sprite(650 / 2, 650, 650, 1, 'static');

	agua = new Sprite(100, 100, 10, 20, "static");

	llaves = new Group();
	llaves.color = 'yellow';
	llaves.diameter = 10;
	while (llaves.length < 4) {
		let llave = new llaves.Sprite();
	}
	llaves[0].y = 25;
	llaves[0].x = 25;
	llaves[1].y = 25;
	llaves[1].x = 625;
	llaves[2].y = 625;
	llaves[2].x = 25;
	llaves[3].y = 625;
	llaves[3].x = 625;

	player.overlaps(llaves, (player, llave) => {
		llave.remove();
		llaveCount++;
	});
}

function draw() {
	background('gray');

	if (kb.pressing('left')) {
		player.vel.x = -2;
	} else if (kb.pressing('right')) {
		player.vel.x = 2;
	} else {
		player.vel.x = 0;
	}

	if (kb.pressing('up')) {
		player.vel.y = -2;
	} else if (kb.pressing('down')) {
		player.vel.y = 2;
	} else {
		player.vel.y = 0;
	}

	if (llaveCount === 4) {
		tieneLlave = true;
	}

	//arriba (player.y >= miniJefe.y-100 && player.y <= miniJefe.y)
	//abajo (player.y <= miniJefe.y+100 && player.y >= miniJefe.y)
	//izq (player.x >= miniJefe.x-100 && player.x <= miniJefe.x)
	//der (player.x <= miniJefe.x+100 && player.x >= miniJefe.x)
	
	if((player.x >= miniJefe.x-100 && player.x <= miniJefe.x)){
		miniJefe.moveTowards(player, 0.01);
	}

	changeCharacter();
}

function changeCharacter() {
	if (kb.pressing('1')) {
		player.text = "Agua";
	}
	if (kb.pressing('2')) {
		player.text = "Fuego";
	}
	if (kb.pressing('3')) {
		player.text = "Viento";
	}
	if (kb.pressing('4')) {
		player.text = "Electro";
	}
}