function disparos(){
    if (playerType != "Fuego") { //por ahora el unico k tiene comportamiento diferente es el fuego, si hay otro pueden agregarlo aca para cada uno
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
        if (kb.pressing("q")) {
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