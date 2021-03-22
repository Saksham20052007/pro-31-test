class plinko {
    constructor(x, y ){
        var options={
            restitution:0.5,
             density:1.2,
            isStatic:false   
        } 

        this.x=x;
        this.y=y;
        this.body = Bodies.circle(this.x, this.y, 255, options )
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world,this.body); 

        
    }
    display(){
        var ballPos = this.body.position;

        push()
        translate(ballPos.x ,ballPos.y);
        rotate(this.body.angle);
        fill(random(0, 255), random(0, 255), random(0, 255));

        ellipseMode(CENTER);
        ellipse( 0, 0, 25);
        pop();


    }
}