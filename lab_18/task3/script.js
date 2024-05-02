class Shape{
    constructor(color){
        this.color = color;
    }
}

class Circle extends Shape{
    constructor(radius, color){
        super(color);
        this.radius = radius;
    }

    showColor(){
        console.log(`Color of circle is ${this.color}`);
    }

    findSquare(){
        console.log(`Square of circle equals to ${Math.PI * Math.pow(this.radius, 2)}`)
    }
}

class Rectangle extends Shape{
    constructor(a, b, color){
        super(color);
        this.a = a;
        this.b = b;
    }

    showColor(){
        console.log(`Color of rectangle is ${this.color}`);
    }

    findSquare(){
        console.log(`Square of rectangle equals to ${this.a * this.b}`)
    }

    findPerimeter(){
        console.log(`Perimeter of rectangle equals to ${(this.a + this.b)*2}`);
    }
}

let rectangle = new Rectangle(12, 10, "blue");
let circle = new Circle(5, "yellow")

rectangle.showColor();
rectangle.findPerimeter();
rectangle.findSquare();

circle.showColor();
circle.findSquare();


