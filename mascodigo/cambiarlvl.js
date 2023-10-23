function cambiarNivel() {
	nivelActual++;
	if (nivelActual === 2) {
		cargarNivel2();
	}
}

function cargarNivel2() {
	player.x = 0;
	player.y = 400;
	//puertaElectro2.remove();
	miniJefe.remove();
	electro1.remove();
	agua1.remove();
	viento1.remove();
	for (let i = obstaculos.length - 1; i >= 0; i--) {
        obstaculos[i].remove();
    }

	jefefinal = new Sprite(650 / 2, 650 / 2, 85);
	jefefinal.color = "green";
}