class Polygon {
    constructor(x, y, radius) {
        this.body = Bodies.circle(x, y, radius);
        this.radius = radius;
        this.image = loadImage("hexagon.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("yellow");
        strokeWeight(1);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
        pop();
      }
}
