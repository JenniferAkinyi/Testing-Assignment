const { calculateTotal } = require("../Functions/total");

describe('calculateTotal', () => {
    it('should return total price of products with discount and tax', () => {
        const products = [
            {name: "Toothpaste", price: 100},
            {name: "Book", price: 200},
            {name: "Set", price: 300},
            {name: "Pen", price: 30},
        ];
        expect(calculateTotal(products)).toBe(612);
    });

    it('should return total price of products without discount', () => {
        const products = [
            {name: "Pen", price: 30},
        ];
        expect(calculateTotal(products)).toBe(32);
    });

    it('should return total price of products without discount and tax', () => {
        const products = [
            {name: "Pen", price: 30},
            {name: "Pencil", price: 20},
        ];
        expect(calculateTotal(products)).toBe(54);
    });
    it('should return total price of products with exact 100 total', () => {
        const products = [
            {name: "Bread", price: 50},
            {name: "Sugar", price: 50},
        ];
        expect(calculateTotal(products)).toBe(97);
    });
    
});