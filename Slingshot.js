class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 230, 80, 30, 140);
        image(this.sling2, 210, 85, 30, 80);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<240){
                strokeWeight(7);
                stroke(48, 22, 8);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y+20);
                line(pointA.x-20, pointA.y, pointB.x+18, pointB.y+15);
                image(this.sling3, pointA.x-20, pointA.y-10, 10, 25);
            }
            else{
                strokeWeight(4);
                stroke(48, 22, 8);
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y+20);
                line(pointA.x+20, pointA.y, pointB.x+18, pointB.y+15);
                image(this.sling3, pointA.x+20, pointA.y-10, 10, 25);
            }
        }
    }
    
}