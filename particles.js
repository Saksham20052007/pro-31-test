class particle {
    constructor(x, y ,r){
        var options={
            restitution:0.5,
             density:1.2,
            isStatic:true   
        } 

        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x, this.y, this.r, options )

        World.add(world,this.body); 

        
    }
    display(){
        var ballPos = this.body.position;

        push()
        translate(ballPos.x ,ballPos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect( 0, 0, this.r*2, this.r*2);
        pop();


    }
}