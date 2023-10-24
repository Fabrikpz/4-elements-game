function gamePart1() {
	background('gray');

	fill("lightblue"); //obstaculo agua (maze1)
	square(137.5, 138, 55);

	fill("gray");
	square(388, 12.5, 55); //obstaculo viento (maze2)

	fill("red");
	square(506.9, 184.5, 55); //obstaculo fuego (maze2)

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

	player.overlaps(llave1, (player, llave1) => {
		llave1.remove();
		llaveCount++;
		llaveRecogida = true;
	});

	player.overlaps(llave3, (player, llave3) => {
		llave3.remove();
		llave3Agarrada = true;
		llaveCount++;
	});

	player.overlaps(llave4, (player, llave4) => {
		llave4.remove();
		llaveCount++;
	});

	player.overlaps(llave2, () => {
		if (contColLlave2 < 4) {
			contColLlave2++;
			colisionLlave2();
		}
	})

	if (puertaAbierta) { //para q se cierre la puerta
		setTimeout(() => {
			puertaAbierta = false;
			//puertaElectro2 = new Sprite(55, 220, 45, 55, "static");
			//puertaElectro2.color = 'black';
		}, 3000);
	}

	if ((player.y <= miniJefe.y + 200 && player.y >= miniJefe.y) || (player.y >= miniJefe.y - 200 && player.y <= miniJefe.y)) {
		miniJefe.moveTowards(player, 0.01);
	}

	//arriba (player.y >= miniJefe.y-100 && player.y <= miniJefe.y)
	//abajo (player.y <= miniJefe.y+100 && player.y >= miniJefe.y)
	//izq (player.x >= miniJefe.x-100 && player.x <= miniJefe.x)
	//der (player.x <= miniJefe.x+100 && player.x >= miniJefe.x)

	if (playerType == "Electro") {
		button.collides(shots, (button, shot) => {
			if (llaveRecogida) {
				shot.remove();
				button.x -= 2;
				puertaAbierta = true;
				puertaElectro.remove();
			}
		});
	}

	player.collides(miniJefe, () => {
		vida--;
		updateHealth(vida);
	});

	if (kb.pressing("space") && playerType === "Viento" && contHabilidadViento === 0) {
		switch (lastDirection) {
			case "up":
				player.y -= 30;
				contHabilidadViento++;
				break;
			case "down":
				player.y += 30;
				contHabilidadViento++;
				break;
			case "right":
				player.x += 30;
				contHabilidadViento++;
				break;
			case "left":
				player.x -= 30;
				contHabilidadViento++;
				break;
		}
	}

	if (llave3Agarrada) {
		text("SPACE para habilidad de salto", player.x - 70, player.y - 30);
		setTimeout(() => {
			llave3Agarrada = false;
			clear();
		}, 3000);
	}
}

function colisionLlave2() {
	if (contColLlave2 === 1) {
		llave2.x = 615;
		llave2.y = 25;
	}
	if (contColLlave2 === 2) {
		llave2.x = 535;
		llave2.y = 105;
	}
	if (contColLlave2 === 3) {
		llave2.x = 615;
		llave2.y = 215;
	}
	if (contColLlave2 === 4) {
		llaveCount++;
		llave2.remove();
	}
}