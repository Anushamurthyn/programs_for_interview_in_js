function Shape(color){
    this.color =color || ' ';
}

function Circle(color, radius){
    Shape.call(this, color);
    this.radius = radius || 0;
}
function Rectangle(color, length, breadth){
    Shape.call(this, color);
    this.length = length || 0;
    this.breadth = breadth || 0;
}
Shape.prototype.getInfo = function(){
    return 'this is a' + this.color + 'shape.';
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.getInfo = function(){
    return 'This is a ' + this.color + ' circle with radius ' + this.radius + '.';
};
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getInfo = function () {
  return 'This is a ' + this.color + ' rectangle with width ' + this.length + ' and height ' + this.breadth + '.';
};

var redCircle = new Circle('red', 5);
var blueRectangle = new Rectangle('blue', 8,4);

console.log(redCircle.getInfo());
console.log(blueRectangle.getInfo());