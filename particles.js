class particle {
    constructor(x, y ){
        var options={
            restitution:0.5,
             density:1.2,
            isStatic:true   
        } 

        this.x=x;
        this.y=y;
        this.body = Bodies.circle(this.x, this.y, 25, options )

        World.add(world,this.body); 

        
    }
    display(){
        var ballPos = this.body.position;

        push()
        translate(ballPos.x ,ballPos.y);
        rotate(this.body.angle);
        fill( "white");

        ellipseMode(CENTER);
        ellipse( 0, 0, 25, 25);
        pop();


    }
}