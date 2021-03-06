class Cup {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.options = {
            // isStatic: true,
            restitution: 0.2,
            density: 0.1
        }
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, this.options);
        World.add(world, this.body);
        this.color = rgb(random(0, 255), random(0, 255), random(0, 255));
    }
    display() {
        push();
        fill(this.color);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}