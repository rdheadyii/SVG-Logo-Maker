// need overall master shape class
class Shape {
    constructor(text, textColor, color) {
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    }

    render(essence) {
        return `<${essence} fill="${this.color}" />`;
    }

    svg() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}
// need a class for circle
export class Circle extends Shape {
    render() {
        return super.render('circle cx="150" cy="100" r="80"');
    }
}
// need a class for square
export class Square extends Shape {
    render() {
        return super.render('rect x="73" y="40" width="160" height="160"');
    }

}
// need a class for triangle
export class Triangle extends Shape {
    render() {
        return super.render('polygon points="150, 18 244, 182 56, 182"');
    }
}