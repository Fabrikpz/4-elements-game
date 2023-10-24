function controles() {
    if (kb.pressing('left')) {
        player.vel.x = -2;
        lastDirection = "left";
    } else if (kb.pressing('right')) {
        player.vel.x = 2;
        lastDirection = "right";
    } else {
        player.vel.x = 0;
    }

    if (kb.pressing('up')) {
        player.vel.y = -2;
        lastDirection = "up";
    } else if (kb.pressing('down')) {
        player.vel.y = 2;
        lastDirection = "down";
    } else {
        player.vel.y = 0;
    }
}

function disparos(){
    if (playerType != "Fuego" && vida != 0) { //por ahora el unico k tiene comportamiento diferente es el fuego, si hay otro pueden agregarlo aca para cada uno
        if (kb.pressed("q")) {
            switch (lastDirection) {
                case "up":
                    shot2 = new shots.Sprite(player.x, player.y - 50, 5, 5);
                    shot2.vel.y = -20;
                    break;
                case "down":
                    shot2 = new shots.Sprite(player.x, player.y + 50, 5, 5);
                    shot2.vel.y = 20;
                    break;
                case "left":
                    shot2 = new shots.Sprite(player.x - 50, player.y, 5, 5);
                    shot2.vel.x = -20;
                    break;
                case "right":
                    shot2 = new shots.Sprite(player.x + 50, player.y, 5, 5);
                    shot2.vel.x = 20;
                    break;
            }
            shot2.life = 30;
            shot2.color = shotsColor;
        }
    } else {
        if (kb.pressing("q") && vida != 0) {
            switch (lastDirection) {
                case "up":
                    fireShots.addAni(fuegoSpritesheetUp);
                    shot2 = new fireShots.Sprite(player.x, player.y - 50, 5, 5);
                    shot2.vel.y = -20;
                    break;
                case "down":
                    fireShots.addAni(fuegoSpritesheetDown);
                    shot2 = new fireShots.Sprite(player.x, player.y + 50, 5, 5);
                    shot2.vel.y = 20;
                    break;
                case "left":
                    fireShots.addAni(fuegoSpritesheet);
                    shot2 = new fireShots.Sprite(player.x - 50, player.y, 5, 5);
                    shot2.vel.x = -20;
                    break;
                case "right":
                    fireShots.addAni(fuegoSpritesheetRight);
                    shot2 = new fireShots.Sprite(player.x + 50, player.y, 5, 5);
                    shot2.vel.x = 20;
                    break;
            }
            shot2.life = 30;
            shot2.color = shotsColor;
        }
    }
}

function comprobarSiPerdes(){
    if(vida === 0){
        fill("blue")
        text("se", 300, 300)
        jefefinal.remove();
        bossShots.remove();
        borrarElementos();
        player.remove();
        miniJefe.remove();
        llave1.remove();
        llave2.remove(); 
        llave3.remove();
        llave4.remove();
        background("black");
        fill("red");
        textAlign(CENTER, CENTER);
        text("GET PADRED!", 650/2, 650/2);
    }
}

function updateHealth(value) {
	const healthFill = document.querySelector('.health-fill');
	const healthValue = document.querySelector('#health-value');

	value = Math.min(Math.max(value, 0), 100);

    if(value <= 40 && value >= 10){
        healthFill.style.backgroundColor = 'yellow';
    } else if(value <= 10){
        healthFill.style.backgroundColor = 'red';
    } else {
        healthFill.style.backgroundColor = '#00cc00';
    }
	healthFill.style.width = value + '%';
	healthValue.textContent = value;
}


function borrarElementos(){
    miniJefe.remove();
	fuego1.remove();
	electro1.remove();
	agua1.remove();
	viento1.remove();
	for (let i = obstaculos.length - 1; i >= 0; i--) {
        obstaculos[i].remove();
    }
}
