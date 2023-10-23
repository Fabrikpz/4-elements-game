
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