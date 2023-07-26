// need variable to import shapes.js
import {Circle, Square, Triangle} from './shapes.js';
// need test for circle
describe('Circle', () => {
    it('should be a blue circle with yellow text that says YES', () => {
        let svg = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">YES</text>
        </svg>`;
        expect(new Circle("YES", "yellow", "blue").svg()).toMatch(svg);
    });
});

// need test for square
describe('Square', () => {
    it('should be a blue square with yellow text that says YES', () => {
        let svg = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="73" y="40" width="160" height="160" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">YES</text>
        </svg>`;
        expect(new Square("YES", "yellow", "blue").svg()).toMatch(svg);
    });
});

// need test for triangle
describe('Triangle', () => {
    it('should be a blue triangle with yellow text that says YES', () => {
        let svg = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">YES</text>
        </svg>`;
        expect(new Triangle("YES", "yellow", "blue").svg()).toMatch(svg);
    });
});