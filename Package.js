class Package{
    constructor(x, y){
        var options = {
            isStatic: true,
            'restitution': 0.7,
            'density': 1,
            'friction': 0.4

        }

        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.image = loadImage("package.png");
        this.width = width;
        this.height = height;


        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        imageMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image, 0, 0, 50, 50);
        pop();

    }

}