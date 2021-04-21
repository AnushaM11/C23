class Ground{
    constructor(x,y,width,height){
        var props={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,props)
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);

    }
    show(){
       var pos = this.body.position;
       rectMode(CENTER)
       push ();
       fill("Blue");
       rect(pos.x,pos.y,this.width,this.height)
     pop ();


    }
}