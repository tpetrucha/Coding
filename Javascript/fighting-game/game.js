const canvas = document.getElementById("game-canvas");
const cContext = canvas.getContext("2d");
const gravity = 0.2

canvas.width = 1024;
canvas.height = 576;

cContext.fillRect(0, 0, canvas.width, canvas.height);

class Sprite {
  constructor({ position, velocity }) {
    //parameters into object so it does not matter which is coming first ... easier to manage
    this.position = position;
    this.velocity = velocity;
    this.height = 150
    this.width = 50
  }

  draw() {
    cContext.fillStyle = "red";
    cContext.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(){
    this.draw()
    
    this.position.y += this.velocity.y

    if(this.position.y + this.height + this.velocity.y >= canvas.height){
        this.velocity.y = 0
    }else{
        this.velocity.y += gravity
    }
        
  }
}

const player = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0
  }
});

const enemy = new Sprite({
    position: {
        x: 400,
        y: 100,
      },
      velocity: {
        x: 0,
        y: 0
      }
});

function animate() {
  window.requestAnimationFrame(animate)
  cContext.fillStyle = "black";
  cContext.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()
}

animate()