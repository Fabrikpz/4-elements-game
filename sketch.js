let wall11, wall12, wall13, wall14, wall111, wallg, wallf, wally, wally2, wally3
let player, wallave2Obtainedll1, wall2, wall3, wall4, agua, llaves, miniJefe;
let pared1, pared2, pared3, pared4, pared5;
let pared11, pared21, pared32, pared42, pared52, pared111, pared521;
let pared41, pared40, pared43, pared44, pared45, pared46, pared47, pared48, pared49;
//let miniJefeImagen;
let personaimagen;
let tiempLlave4 = false;
let vidaEnemigo = 5;
let tiempoLlave4 = 0;
const intervaloLlave4 = 5000;
let agua1, viento1, electro1;
let llave1, llave2, llave3, llave4;
let llave1Obtained = false;
let llave2Obtained = false;
let llave3Obtained = false;
let llave4Obtained = false;
let puertaElectro, button;
let puertaAbierta = false;
let llaveRecogida = false;
let shot, rect, puertaElectro2;
let shotsColor = "blue";
let playerType;
let llaveElectro = false;
let llaveCount = 0; //llaves encontradas
let contColLlave2 = 0;
let fuego1;
let fireShots, fuegoSpritesheet;
let lastDirection, rect2;
let psjSpritesheet;
let nivelActual = 1;
let obstaculos, jefefinal, bossShots;
let vida = 100;
let contHabilidadViento = 0;
let llave3Agarrada = false;
let escudoJefe;
let ganaste = false;

function preload() {
	fuegoSpritesheet = loadAnimation("./fotos/fire.png", { frameSize: [64, 64], frames: 3 });
	fuegoSpritesheetRight = loadAnimation("./fotos/fire-right.png", { frameSize: [64, 64], frames: 3 });
	fuegoSpritesheetUp = loadAnimation("./fotos/fire-up.png", { frameSize: [64, 64], frames: 3 });
	fuegoSpritesheetDown = loadAnimation("./fotos/fire-down.png", { frameSize: [64, 64], frames: 3 });
	player = new Sprite(650 / 2, 600, 50);
	/*player.spriteSheet = "./fotos/psjmain.png";
	player.anis.frameDelay = 8;
	player.addAnis({
		idle: {row: 3, frames: 4}
	});
	player.changeAni('idle');*/
	player.text = "Agua";
	player.rotationLock = true;

	miniJefe = new Sprite(650 / 2, 650 / 2, 75);
}
function setup() {
	new Canvas(650, 650);

	obstaculos = new Group();
	shots = new Group();
	fireShots = new Group();
	fireShots.addAni(fuegoSpritesheetUp);
	bossShots = new Group();


	miniJefe.mass = 1;
	miniJefe.text = "Mini jefe";
	miniJefe.rotationLock = true;
	miniJefe.img = "./fotos/minijefe.png";
	generacionSprites();
	generacionLaberinto1();
}

function draw() {
	background("gray");
	document.getElementById("llaveCountNumber").textContent = "Llaves recogidas: " + llaveCount;
	//para contar si estan las 4 llaves
	if (llaveCount === 4) {
		cambiarNivel();
	} else {
		gamePart1();
	}

	controles();
	changeCharacter();
	disparos();
	comprobarSiPerdes();

	siGanas();

    if (ganaste) {
        player.remove();
        jefefinal.remove();
        background("black");
        fill("blue");
        textAlign(CENTER, CENTER);
		textSize(30);
        text("Se fue padreadisimo el boss", 650 / 2, (650 / 2) - 35);
        text("GG changouu", 650 / 2, 650 / 2)
		bossShots.remove();
    }
}