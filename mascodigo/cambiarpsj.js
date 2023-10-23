function changeCharacter() {
	if (kb.pressed('1')) {
		//personaimagen = loadImage('Captura.PNG')
		player.text = "Agua";
		if (nivelActual == 1) {
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
	}
	if (kb.pressed('2')) {
		player.text = "Fuego";
		if (nivelActual == 1) {
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
	}
	if (kb.pressed('3')) {
		player.text = "Viento";
		if (nivelActual == 1) {
			agua1.remove();
			agua1 = new Sprite(165, 165, 55, 55, "static");
			agua1.color = 'lightblue';
			shotsColor = "grey"
			playerType = "Viento";
			viento1.remove();
			electro1.remove();
			electro1 = new Sprite(537, 85, 15, 9, "static");
			electro1.color = 'yellow';
			fuego1.remove();
			fuego1 = new Sprite(535, 212, 55, 55, "static");
			fuego1.color = 'red';
		}
	}
	if (kb.pressed('4')) {
		player.text = "Electro";
		if (nivelActual == 1) {
			agua1.remove();
			agua1 = new Sprite(165, 165, 55, 55, "static");
			agua1.color = 'lightblue';
			shotsColor = "yellow";
			playerType = "Electro";
			viento1.remove();
			viento1 = new Sprite(415, 40, 55, 55, "static");
			viento1.color = 'grey';
			fuego1.remove();
			fuego1 = new Sprite(535, 212, 55, 55, "static");
			fuego1.color = 'red';
		}
	}
}