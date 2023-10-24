function cambiarNivel() {
	nivelActual++;
	if (nivelActual === 2) {
		cargarNivel2();
	}
}

let shootingInterval;
let isShooting = false;
let shootingDuration = 1000; 
let restDuration = 3000;

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
	jefefinal.collider = "static";
	jefefinal.color = "green";

    startShooting();
}

function startShooting() {
    isShooting = true;
    shootingInterval = setInterval(shootingLoop, 100); //crear disparos cada 100 milisegundos

    //detener el disparo después de la duración
    setTimeout(stopShooting, shootingDuration);
}

function stopShooting() {
    isShooting = false;
    clearInterval(shootingInterval);

    //iniciar un nuevo intervalo después del descanso
    setTimeout(startShooting, restDuration);
}

function shootingLoop() {
    if (isShooting) {
        bossShot = new bossShots.Sprite(random(jefefinal.x - 75, jefefinal.x + 75), random(jefefinal.y - 75, jefefinal.y + 75), 5, 5);
        bossShot.vel.x = random(-25, 25);
        bossShot.vel.y = random(-25, 25);
		bossShot.life = 50;
    }
}