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
let executed = false;
let vidaBoss = 500;

function cargarNivel2() {
    player.x = 0;
    player.y = 400;
    //puertaElectro2.remove();
    borrarElementos();

    jefefinal = new Sprite(650 / 2, 650 / 2, 85);
    jefefinal.collider = "static";
    jefefinal.color = "green";

    //escudoJefe = new Sprite(jefefinal.x - 70, jefefinal.y - 30, 50, "dynamic");

    setTimeout(startShooting, 600);

    bossShots.collides(player, (bossShot, player) => {
        vidaa = vida -= 10;
        bossShot.remove();
        updateHealth(vidaa);
    });

    fireShots.collides(jefefinal, (fireShot, jefefinal) => {
        fireShot.remove();
        vidaa = vidaBoss-= 0.5;
        updateHealthBoss(vidaa);
    });

    shots.collides(jefefinal, (shot, jefefinal) => {
        shot.remove();
        vidaa2 = vidaBoss-=0.2;
        updateHealthBoss(vidaa2);
    });

    if (vida <= 0) {
        comprobarSiPerdes();
    }

    if(vidaBoss <= 0){
        siGanas();
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
    //setTimeout(startMoving, restDuration);
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
    let velShots = [-6, -5, -4, -3, -2, 2, 3, 4, 5, 6];
    let posShotsX = [];
    let posShotsY = [jefefinal.y - 60, jefefinal.y + 60];
    if (executed == false) {
        for (let i = -60; i < jefefinal.x + 60; i += 5) {
            posShotsX.push(jefefinal.x + i);
        }
        executed = true;
    }
    if (isShooting) {
        bossShot = new bossShots.Sprite(random(posShotsX), random(posShotsY), 15);
        bossShot.vel.x = random(velShots);
        bossShot.vel.y = random(velShots);
        bossShot.life = 100;
    }
}