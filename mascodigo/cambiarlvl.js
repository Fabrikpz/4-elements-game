function cambiarNivel() {
    nivelActual++;
    if (nivelActual === 2) {
        cargarNivel2();
    }
}

let shootingInterval;
let isShooting = false;
let shootingDuration = 5000;
let restDuration = 3000;
let isMoving = false;
let moveDuration = 2900;
let hasMoved = false;
let angle = 0;

function cargarNivel2() {
    player.x = 0;
    player.y = 400;
    //puertaElectro2.remove();
    borrarElementos();

    jefefinal = new Sprite(650 / 2, 650 / 2, 85);
    jefefinal.collider = "static";
    jefefinal.color = "green";

    //escudoJefe = new Sprite(jefefinal.x - 70, jefefinal.y - 30, 50, "dynamic");

    setTimeout(startShooting, 6000);

    bossShots.collides(player, (bossShot, player) => {
        vidaa = vida -= 10;
        bossShot.remove();
        updateHealth(vidaa);
    });

    if (vida <= 0) {
        comprobarSiPerdes();
    }

    /*if (!hasMoved) {
        setTimeout(startMoving, restDuration);
        hasMoved = true; //jefe ya cambió de posición
    }*/
}

function startShooting() {
    isShooting = true;
    shootingInterval = setInterval(shootingLoop, 100); //crear disparos cada 100 milisegundos

    //detener el disparo después del rest
    setTimeout(stopShooting, shootingDuration);
}

function stopShooting() {
    isShooting = false;
    clearInterval(shootingInterval);

    //iniciar un nuevo intervalo después del descanso
    setTimeout(startShooting, restDuration);
    //iniciar el movimiento del jefe durante el descanso
    setTimeout(startMoving, restDuration);
}

/*function startMoving() {
    isMoving = true;

    jefefinal.collider = "dynamic";
    jefefinal.vel.x = random(-2, 2);
    jefefinal.vel.y = random(-2, 2);
    
    setTimeout(stopMoving, moveDuration);
}

function stopMoving() {
    isMoving = false;
    jefefinal.collider = "static";
}*/

function shootingLoop() {
    if (isShooting) {
        bossShot = new bossShots.Sprite(random(jefefinal.x - 75, jefefinal.x + 75), random(jefefinal.y - 75, jefefinal.y + 75), 5, 5);
        bossShot.vel.x = random(-25, 25);
        bossShot.vel.y = random(-25, 25);
        bossShot.life = 50;
    }
}