const { applyCartDiscounts } = require('../Functions/cart');

describe('applyCartDiscounts', () => {
    it('should apply quantity discount', () => {
        const cart = [
            { name: "Pen", price: 10, quantity: 10, category: "general" },
        ];
        expect(applyCartDiscounts(cart)).toBe(90);
    });

    it('should apply category discount', () => {
        const cart = [
            { name: "Blender", price: 1500, quantity: 1, category: "electronics" },
        ];
        expect(applyCartDiscounts(cart)).toBe(1425); 
    });

    it('should apply seasonal discount', () => {
        const cart = [
            { name: "Shirt", price: 100, quantity: 1, category: "general" },
        ];
        const originalDate = Date.prototype.getMonth;
        Date.prototype.getMonth = () => 11; 
        expect(applyCartDiscounts(cart)).toBe(90);
        Date.prototype.getMonth = originalDate; 
    });

    it('should apply coupon discount', () => {
        const cart = [
            { name: "Book", price: 100, quantity: 1, category: "general" },
        ];
        expect(applyCartDiscounts(cart, 'SAVE20')).toBe(80); 
    });

    it('should apply all discounts', () => {
        const cart = [
            { name: "Pen", price: 10, quantity: 10, category: "electronics" },
        ];
        const originalDate = Date.prototype.getMonth;
        Date.prototype.getMonth = () => 11; 
        expect(applyCartDiscounts(cart, 'SAVE20')).toBe(61.2); 
        Date.prototype.getMonth = originalDate; 
    });
    it('should return total without any discounts', () => {
        const cart = [
            { name: "Shirt", price: 100, quantity: 1, category: "general" },
        ];
        expect(applyCartDiscounts(cart)).toBe(100); 
    });

});