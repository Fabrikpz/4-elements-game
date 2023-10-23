function generacionLaberinto1(){
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
				obstaculos.add(rect);
			}
			if (laberinto[i][j] === 2) {
				rect2 = new Sprite(j * 55, i * 55, 45, 55, "static");
				rect2.color = 'black';
				button = new Sprite(j * 55 + 25, i * 55, 2, 6, "static");
				button.color = "yellow";
				obstaculos.add(rect2);
				obstaculos.add(button);
			}
			if (laberinto[i][j] === 3) {
				puertaElectro = new Sprite(j * 55, i * 55, 45, 55, "static");
				puertaElectro.color = 'black';
				obstaculos.add(puertaElectro);
			}
		}
	}
}