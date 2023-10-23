function generacionSprites(){
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
	pared1 = new Sprite(162, 597, 217, 1, 'static');
	//pared!
	pared2 = new Sprite(53, 473, 1, 248, 'static');
	//pared arriba
	pared3 = new Sprite(103, 350, 100, 1, 'static');
	//pared arriba
	pared5 = new Sprite(155, 350, 120, 1, 'static');
	//pared de la  !
	pared4 = new Sprite(270, 473, 1, 248, 'static');

	pared11 = new Sprite(160, 544, 110, 1, 'static');
	pared21 = new Sprite(105, 472, 1, 140, 'static');
	pared32 = new Sprite(160, 402, 110, 1, 'static');
	pared52 = new Sprite(215, 445, 1, 85, 'static');
	pared111 = new Sprite(188, 488, 55, 1, 'static');
	pared521 = new Sprite(161, 474, 1, 28, 'static');

	//ultimo mini juego 
	pared41 = new Sprite(460, 595, 110, 1, 'static');
	pared40 = new Sprite(597, 620, 1, 100, 'static');
	pared43 = new Sprite(590, 515, 150, 1, 'static');
	pared44 = new Sprite(568, 620, 1, 100, 'static');
	pared45 = new Sprite(582, 569, 29, 1, 'static');
	pared46 = new Sprite(516, 555, 1, 80, 'static');

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

    agua1 = new Sprite(999, 999, 1, 1);
	viento1 = new Sprite(415, 40, 55, 55, "static");
	electro1 = new Sprite(537, 85, 15, 9, "static");
	fuego1 = new Sprite(535, 212, 55, 55, "static");
	electro1.color = "yellow";
	fuego1.color = 'red';
	viento1.color = "grey";
    obstaculos.add(wall11, wall12, wallg, wallf, wally, wally2, wally3, pared1, pared2, pared3, pared5, pared4, pared11, pared21, pared32, pared52, pared111, pared521);
    obstaculos.add(pared41, pared40, pared43, pared44, pared45, pared46, wall13, wall111, wall14);
}