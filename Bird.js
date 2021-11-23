class Bird extends BaseClass {
  constructor(x, y, image) {
    super(x, y, 50, 50);
    this.image = image;
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
    this.Visiblity = 255;

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();


    if (this.body.velocity.x > 10 && this.body.position.x > 200) {
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }


    for (var i = 0; i < this.trajectory.length; i++) {
      push();
      this.Visiblity = this.Visiblity - 0.1;
      tint(255, this.Visiblity);
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      pop();
    }
  }
}
