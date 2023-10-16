	let player, wallave2Obtainedll1, wall2, wall3, wall4, agua, llaves, llaveCount, miniJefe;
	let miniJefeImagen; 
	let tiempLlave4 = false;
	let vidaEnemigo = 5;
	let tiempoLlave4 = 0;
	const intervaloLlave4 = 5000;
	let agua1;
	let llave1, llave2, llave3, llave4;
	let llave1Obtained = false;
	let llave2Obtained = false;
	let llave3Obtained = false;
	let llave4Obtained = false;
	let puertaElectro;
	let button;
	let puertaAbierta = false;
	let llaveRecogida = false;
	let shots;
	let shotsColor = "blue";
	let playerType;
	let llaveElectro = false;
	let llavCount = 0; //llaves encontradas
	  
	function setup() {
		new Canvas(650, 650);

		player = new Sprite(650 / 2, 600, 50);
		player.text = "Agua";
		player.rotationLock = true;

		shots = new Group();
		miniJefeImagen = loadImage()
		miniJefe = new Sprite(650 / 2, 650 / 2, 65);
		miniJefe.mass = 1;
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
		llaves[0].y = 55;
		llaves[0].x = 170;
		llaves[1].y = 25;
		llaves[1].x = 625;
		llaves[2].y = 625;
		llaves[2].x = 25;
		llaves[3].y = 625;
		llaves[3].x = 625;
		llave1 = llaves[0];
		llave2 = llaves[1];
		llave3 = llaves[2];
		llave4 = llaves[3];
//en lo de count cambie por uan variable llavcount
		player.overlaps(llave1, (player, llave1) => {
			llave1.remove();
			llavCount++;
			llaveRecogida = true;
		});
	

		player.overlaps(llave2, (player, llave2) => {
			llave2.remove();
			llavCount++;
		});

		player.overlaps(llave3, (player, llave3) => {
			llave3.remove();
			llavCount++;
		});


		player.overlaps(llave4, (player, llave4) => {
			llave4.remove();
			llavCount;
		});
		
		colec = [
			[1, 1, 1, 1],
			[1, 0, 0, 1],
			[1, 0, 0, 1],
			[1, 1, 1, 1],
		
		];
		
		var randomNumber = Math.floor(Math.random() * 100) + 1;
		for (let i = 0; i < colec.length; i++) {
			for (let j = 0; j < colec[i].length; j++) {
				if (colec[i][j] === 1) {
					rect = new Sprite(j * 315, i * 40, 25,  220, "static");
					rect.color = 'black';
					if (randomNumber % 2 == 0) {
						llaves.isFake = true;
					  }
				}
			}
		}
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
					button.color = "red";
				}
				if (laberinto[i][j] === 3) {
					puertaElectro = new Sprite(j * 55, i * 55, 45, 55, "static");
					puertaElectro.color = 'black';
				}
			}
		}

		agua1 = new Sprite(999, 999, 1, 1);
	}


	function draw() {

		background('gray');

		fill("lightblue");
		square(137.5, 138, 55);
		//para contar si estan las 4 llaves
		if ( llavCount === 4) {
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
// se podria sacar 
		if(player.text == "Electro" && player.overlaps(button, () => {
			if (llaveRecogida) {
				puertaAbierta = true;
				puertaElectro.remove();
			}
		}));
		
		function onCollision(other) {
			if (other.name == "llaveElectro") {
			  llaveElectro = true;
			}
		  }
		  tiempoLlave4 += deltaTime;
		  if (tiempoLlave4 >= intervaloLlave4) {
			if (!tiempLlave4) {
			  // La llave 4 aparece en una posición
			  llaves[3].x = 625;
			  llaves[3].y = 625;
			  tiempLlave4 = true;
			} else {
			  // La llave 4 desaparece
			  llaves[3].x = -100; // Mueve la llave fuera del lienzo
			  llaves[3].y = -100;
			  tiempLlave4 = false;
			}
			tiempoLlave4 = 0; // Reiniciar el tiempo
		  }
		function update() {
			if (llaveElectro) {
			  // Abrir la puerta.
			}
		  }
		  

		changeCharacter();

		if(playerType != "Fuego"){ //por ahora el unico k tiene comportamiento diferente es el fuego, si hay otro pueden agregarlo aca para cada uno
			if (kb.pressed("q")) {
				shots = new Sprite(player.x , player.y - 30, 5, 5);
				shots.life = 50;
				shots.vel.y = -30;
				shots.color = shotsColor;
				shots.rotation = 0;
		  }
		}else{
			if (kb.pressing("q")) {
				shots = new Sprite(player.x , player.y - 30, 5, 5);
				shots.life = 50;
				shots.vel.y = -30;
				shots.color = shotsColor;
				shots.rotation = 0;
		  }
		}
	}

	function changeCharacter() {
		if (kb.pressed('1')) {
			player.text = "Agua";
			agua1.remove();
			shotsColor = "blue";
			playerType = "Agua";
		}
		if (kb.pressed('2')) {
			player.text = "Fuego";
			agua1.remove();
			agua1 = new Sprite(165, 165, 55, 55, "static");
			agua1.color = 'lightblue';
			shotsColor = "red";
			playerType = "Fuego";
		}
		if (kb.pressed('3')) {
			player.text = "Viento";
			agua1.remove();
			agua1 = new Sprite(165, 165, 55, 55, "static");
			agua1.color = 'lightblue';
			shotsColor = "grey"
			playerType = "Viento";
		}
		if (kb.pressed('4')) {
			player.text = "Electro";
			agua1.remove();
			agua1 = new Sprite(165, 165, 55, 55, "static");
			agua1.color = 'lightblue';
			shotsColor = "yellow";
			playerType = "Electro";
		}
	}
