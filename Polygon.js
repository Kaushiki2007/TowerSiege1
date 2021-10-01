class Polygon extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("sprites/polygon.png");
      this.smokeImage = loadImage("sprites/smoke.png");
      this.trajectory = []
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      if(this.body.velocity.x>1 && this.body.position.x>200){
  
      var position = [this.body.position.x, this.body.position.y]
      this.trajectory.push(position)}
      for(var i = 0; i < this.trajectory.length; i++){
        image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1])
      }
      super.display();
      console.log(this.body.position.x)
    }
  }
  