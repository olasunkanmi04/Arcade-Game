// Enemies our player must avoid
class Enemy {
    constructor(x, y, speed) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started
        this.x = x;
        this.y = y;
        this.speed = speed;
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
    };
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        this.x += this.speed * dt;
        // which will ensure the game runs at the same speed for
        // all computers.
        if (this.x > 500) {
            this.x = -90;
            this.speed = 100 + Math.floor(Math.random() * 222);
        }
    }
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/char-horn-girl.png';
    };
    update() {}

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
    handleInput(keyPress) {
        switch (keyPress) {
            case 'right':
                if (this.x < 380) {
                    this.x += 100;
                }
                break;
            case 'left':
                if (this.x > 50) {
                    this.x -= 102;
                }
                break;
            case 'up':
                if (this.y > 0) {
                    this.y -= 83
                }
                break;
            case 'down':
                if (this.y)
        }
    };
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
allEnemies = [
    new Enemy(-10, 60, 380),
    new Enemy(-10, 100, 260),
    new Enemy(-10, 180, 400),
    new Enemy(-10, 230, 380),
    new Enemy(-10, 150, 500),
];
// Place the player object in a variable called player
const player = new Player(202, 405);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});