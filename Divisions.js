class Divisions {
    constructor(x, y, w, h){
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);

}
display(){
    var pos = this.body.position;
    rectmode(CENTER);
    fill("white")
    rect(pos.x, pos.y, this.w, this.h);
}
}

for (var k = 0; k <=innerWidth; k = k +80){
divisions.push(new Divisions(k, height-divisionsHeiht/2, 10, divisionsHeight));
}

for (var j = 40; j <=innerWidth; j=j+50);
{
    plinkos.push(new Plinko(j, 75));
}

for (var j = 15; j <width-10; j=j+50);
{
     plinkos.push(new plinkos(j, 175));
}

for (var j = 0; j < particles.length; j++){
    particles[j].dispay();
}
for (var k =0; k < divisions.length; k++) {
    divisions[k].display();
}