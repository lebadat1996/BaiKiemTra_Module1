let Canvas = document.getElementById("canvas");
let context = Canvas.getContext('2d');
let CriCle = function (x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.drawCriCle = function () {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = '#000000';
        context.fill();
        context.closePath();
    };
};
let cricle=new CriCle(100,100,100);
cricle.drawCriCle();