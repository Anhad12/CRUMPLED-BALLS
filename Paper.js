class Paper{
    constructor(x,y){
    var options={
        restitution:0.3,
        friction: 0.5,
        density:1.2
    }
    this.body= Bodies.circle(x,y,20,options);
    this.image= loadImage("paper.png")
    World.add(world,this.body)

    }
    display(){
        
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y,20*4,20*4);
        //ellipse( this.body.position.x, this.body.position.y,50,50)
    }
}