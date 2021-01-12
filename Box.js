class Box{
    constructor(x, y, width, height) {
      var options = {
          'isStatic': false,
          'restitution':0.4,
          'friction':0.3
      }
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      
      this.body = Bodies.rectangle(x, y, width, height, options);

      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     //tint(255,this.Visiblity);
     //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
    }
  }

  score(){
    console.log("testing")
     if(this.Visiblity < 0 && this.Visiblity > -1005){
       score++;
     }
   }
  
};
  