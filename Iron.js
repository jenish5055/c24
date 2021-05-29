class Iron {
    constructor(x,y,width,height) {
      var options = {
        restitution:0,
		friction:0.8,
		density:10
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;

      push();
      rectMode(CENTER);
      rotate(angle);
      translate(pos.x,pos.y);



      fill("brown");
      rect(0,0, this.width, this.height);
      pop();
    }
  };