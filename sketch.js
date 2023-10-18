let wall11, wall12, wall13, wall14, wall111, wallg, wallf, wally, wally2, wally3
let player, wallave2Obtainedll1, wall2, wall3, wall4, agua, llaves, miniJefe;
let pared1,pared2,pared3,pared4,pared5
let pared11,pared21,pared32,pared42,pared52,pared111,pared521
let pared41, pared40 ,pared43 ,pared44 ,pared45 ,pared46 ,pared47 ,pared48, pared49
//let miniJefeImagen;
let personaimagen;
let tiempLlave4 = false;
let vidaEnemigo = 5;
let tiempoLlave4 = 0;
const intervaloLlave4 = 5000;
let agua1;
let viento1;
let electro1;
let llave1, llave2, llave3, llave4;
let llave1Obtained = false;
let llave2Obtained = false;
let llave3Obtained = false;
let llave4Obtained = false;
let puertaElectro;
let button;
let puertaAbierta = false;
let llaveRecogida = false;
let shot;
let shotsColor = "blue";
let playerType;
let llaveElectro = false;
let llaveCount = 0; //llaves encontradas
let contColLlave2 = 0;
let fuego1;

function setup() {
	new Canvas(650, 650);

	player = new Sprite(650 / 2, 600, 50);
	// correjir !personaimagen = loadImage('Captura.PNG')
	player.text = "Agua";
	player.rotationLock = true;

	shots = new Group();
	miniJefe = new Sprite(650 / 2, 650 / 2, 65);
	miniJefe.mass = 1;
	miniJefe.text = "Mini jefe";
	//miniJefeImagen = loadImage("fotos/jefe.jpg")
	//miniJefeImagen.w = 65;
	//miniJefeImagen.h = 65;
	//miniJefe.addImage(miniJefeImagen);
	miniJefe.rotationLock = true;

	//los murhos
	wall1 = new Sprite(0, 650 / 2, 1, 650, 'static');
	wall2 = new Sprite(650 / 2, 0, 650, 1, 'static');
	wall3 = new Sprite(650, 650 / 2, 1, 650, 'static');
	wall4 = new Sprite(650 / 2, 650, 650, 1, 'static');
	//siguiente muro
	wall11 = new Sprite(349, 100, 5, 300, 'static');
	wall12 = new Sprite(640, 100, 20, 300, 'static');
	wallg = new Sprite(435, 160, 15, 180, 'static');
	wallf = new Sprite(500, 160, 12, 180, 'static');
	wally = new Sprite(536, 75, 70, 10, 'static');
	wally2 = new Sprite(572, 100, 10, 60, 'static');
	wally3 = new Sprite(600, 185, 70, 3, 'static');
	// tercer minijuego
	//pared abajo
	pared1  = new Sprite(162, 597, 217, 1, 'static');
	//pared!
	pared2  = new Sprite(53, 473, 1, 248, 'static');
//pared arriba
	pared3 = new Sprite(103, 350, 100, 1, 'static');
	//pared arriba
	pared5 = new Sprite(155, 350, 120, 1, 'static');
//pared de la  !
	pared4 = new Sprite(270, 473, 1, 248, 'static');

	pared11 = new Sprite(160, 544, 110, 1, 'static');
	pared21 = new Sprite(105, 472, 1, 140, 'static');
	pared32 = new Sprite(160, 402, 110, 1, 'static');
	pared52 = new Sprite(215, 445, 1, 85 , 'static');
	pared111 = new Sprite(188, 488, 55, 1, 'static');
	pared521 = new Sprite(161, 474, 1, 28 , 'static');


	//ultimo mini juego 
	pared41 = new Sprite(460, 595, 110, 1, 'static');
	pared40 = new Sprite(597, 620, 1, 100, 'static');
	pared43 = new Sprite(590, 515, 150, 1, 'static');
	pared44 = new Sprite(568, 620, 1, 100 , 'static');
	pared45 = new Sprite(582, 569, 29, 1, 'static');
	pared46 = new Sprite(516, 555, 1, 80 , 'static');



	//wall13 = new Sprite(490, 245, 280, 10, 'static');
	wall13 = new Sprite(395, 245, 90, 10, 'static');
	wall111 = new Sprite(580, 245, 150, 10, 'static');
	//pared arriba 
	wall14 = new Sprite(490, 5, 280, 10, 'static');
	wall11.color = "black";
	wall12.color = "black";
	wall13.color = "black";
	wall14.color = "black";
	wall111.color = "black";
	wallg.color = "black";
	wallf.color = "black";
	wally.color = "black";
	wally2.color = "black";
	wally3.color = "black";

	agua = new Sprite(100, 100, 10, 20, "static");

	llaves = new Group();
	llaves.color = 'yellow';
	llaves.diameter = 10;
	while (llaves.length < 4) {
		let llave = new llaves.Sprite();
	}
	llaves[0].y = 55;
	llaves[0].x = 170;
	llaves[1].y = 220;
	llaves[1].x = 390;
	llaves[2].y = 480;
	llaves[2].x = 195;
	llaves[3].y = 625;
	llaves[3].x = 625;
	llave1 = llaves[0];
	llave2 = llaves[1];
	llave3 = llaves[2];
	llave4 = llaves[3];
	//en lo de count cambie por uan variable llavcount
	player.overlaps(llave1, (player, llave1) => {
		llave1.remove();
		llaveCount++;
		llaveRecogida = true;
	});

	player.overlaps(llave3, (player, llave3) => {
		llave3.remove();
		llaveCount++;
	});

	player.overlaps(llave4, (player, llave4) => {
		llave4.remove();
		llaveCount;
	});

	laberinto = [
		[1, 1, 1, 1, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 1, 1, 1],
		[2, 0, 0, 0, 0],
		[1, 3, 1, 1, 1]
	];

	for (let i = 0; i < laberinto.length; i++) {
		for (let j = 0; j < laberinto[i].length; j++) {
			if (laberinto[i][j] === 1) {
				rect = new Sprite(j * 55, i * 55, 55, 55, "static");
				rect.color = 'black';
			}
			if (laberinto[i][j] === 2) {
				rect = new Sprite(j * 55, i * 55, 45, 55, "static");
				rect.color = 'black';
				button = new Sprite(j * 55 + 25, i * 55, 2, 6, "static");
				button.color = "yellow";
			}
			if (laberinto[i][j] === 3) {
				puertaElectro = new Sprite(j * 55, i * 55, 45, 55, "static");
				puertaElectro.color = 'black';
			}
		}
	}

	player.overlaps(llave2, () => {
		contColLlave2++;
		colisionLlave2();
	})

	agua1 = new Sprite(999, 999, 1, 1);
	viento1 = new Sprite(415, 40, 55, 55, "static");
	electro1 = new Sprite(537, 85, 15, 9, "static");
	fuego1 = new Sprite(535, 212, 55, 55, "static");
	electro1.color = "yellow";
	fuego1.color = 'red';
	viento1.color = "grey";
}

function draw() {
	background('gray');

	document.getElementById("llaveCountNumber").textContent = "Llaves recogidas: " + llaveCount;

	fill("lightblue");
	square(137.5, 138, 55);

	fill("gray");
	square(388, 12.5, 55);
	fill("red");
	square(405, 595, 55);
	fill("grey");
	square(460, 595, 55);
	fill("yellow");
	square(515, 595, 54);
	fill("blue");
	square(515, 540, 54);
	fill("red");
	square(515, 515, 53);

	fill("grey");
	square(563, 515, 53);
	fill("yellow");
	square(603, 515, 53);
	fill("blue");
	square(603, 575, 70);
	//para contar si estan las 4 llaves
	if (llaveCount === 4) {
		tieneLlave = true;
	}

	if (puertaAbierta) {
		setTimeout(() => {
			puertaAbierta = false;
			puertaElectro = new Sprite(55, 220, 45, 55, "static");
			puertaElectro.color = 'black';
		}, 3000);
	}

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

	//arriba (player.y >= miniJefe.y-100 && player.y <= miniJefe.y)
	//abajo (player.y <= miniJefe.y+100 && player.y >= miniJefe.y)
	//izq (player.x >= miniJefe.x-100 && player.x <= miniJefe.x)
	//der (player.x <= miniJefe.x+100 && player.x >= miniJefe.x)

	if ((player.y <= miniJefe.y + 200 && player.y >= miniJefe.y) || (player.y >= miniJefe.y - 200 && player.y <= miniJefe.y)) {
		miniJefe.moveTowards(player, 0.01);
	}

	changeCharacter();

	if (playerType != "Fuego") { //por ahora el unico k tiene comportamiento diferente es el fuego, si hay otro pueden agregarlo aca para cada uno
		if (kb.pressed("q")) {
			shot = new shots.Sprite(player.x - 50, player.y, 5, 5);
			shot.life = 50;
			shot.vel.x = -30;
			shot.color = shotsColor;
			shot.rotationLock = true;
		}
	} else {
		if (kb.pressing("q")) {
			shot = new shots.Sprite(player.x - 50, player.y, 5, 5);
			shot.life = 50;
			shot.vel.x = -30;
			shot.color = shotsColor;
			console.log("que")
			if (playerType == "Electro") {
				button.collides(shot, (button, shot) => {
					if (llaveRecogida) {
						shot.remove();
						button.x -= 10;
						puertaAbierta = true;
						puertaElectro.remove();
					}
				});
			}
		}
	}
}

function changeCharacter() {
	if (kb.pressed('1')) {
		//personaimagen = loadImage('Captura.PNG')
		player.text = "Agua";
		agua1.remove();
		shotsColor = "blue";
		playerType = "Agua";
		viento1.remove();
		viento1 = new Sprite(415, 40, 55, 55, "static");
		viento1.color = 'grey';

		electro1.remove();
		electro1 = new Sprite(537, 85, 15, 9, "static");
		electro1.color = 'yellow';

		fuego1.remove();
		fuego1 = new Sprite(535, 212, 55, 55, "static");
		fuego1.color = 'red';
	}
	if (kb.pressed('2')) {
		player.text = "Fuego";
		agua1.remove();
		agua1 = new Sprite(165, 165, 55, 55, "static");
		agua1.color = 'lightblue';
		shotsColor = "red";
		playerType = "Fuego";
		viento1.remove();
		viento1 = new Sprite(415, 40, 55, 55, "static");
		viento1.color = 'grey';

		electro1.remove();
		electro1 = new Sprite(537, 85, 15, 9, "static");
		electro1.color = 'yellow';

		fuego1.remove();
	}
	if (kb.pressed('3')) {
		player.text = "Viento";
		agua1.remove();
		agua1 = new Sprite(165, 165, 55, 55, "static");
		agua1.color = 'lightblue';
		shotsColor = "grey"
		playerType = "Viento";
		viento1.remove();

		electro1.remove();
		electro1 = new Sprite(537, 85, 15, 9, "static");
		electro1 .color = 'yellow';

		fuego1.remove();
		fuego1 = new Sprite(535, 212, 55, 55, "static");
		fuego1.color = 'red';
	}
	if (kb.pressed('4')) {
		player.text = "Electro";
		agua1.remove();
		agua1 = new Sprite(165, 165, 55, 55, "static");
		agua1.color = 'lightblue';
		shotsColor = "yellow";
		playerType = "Electro";
		viento1 = new Sprite(415, 40, 55, 55, "static");
		viento1.color = 'grey';

		fuego1.remove();
		fuego1 = new Sprite(535, 212, 55, 55, "static");
		fuego1.color = 'red';
	}
	}


function colisionLlave2() {
	if (contColLlave2 == 1) {
		llave2.x = 615;
		llave2.y = 25;
	}
	if (contColLlave2 == 2) {
		llave2.x = 535;
		llave2.y = 105;
	}
	if (contColLlave2 == 3) {
		llave2.x = 615;
		llave2.y = 215;
	}
	if (contColLlave2 == 4) {
		llaveCount++;
		llave2.remove();
	}
}