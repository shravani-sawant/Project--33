class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:0.5
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        rectMode(CENTER);
        fill(rgb(0,128,128))
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
    
    
    
}