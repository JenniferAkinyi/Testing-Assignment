const { calculateEmployeePay } = require('../Functions/salary');

describe('netSalary', () => {
    it('should return net salary with overtime', () => {
        expect(calculateEmployeePay(56)).toBe(153600);
    });

    it('should return net salary without overtime', () => {
        expect(calculateEmployeePay(40)).toBe(96000);
    });
    it('should return net salary with exactly 40 hours', () => {
        expect(calculateEmployeePay(40)).toBe(96000);
    });

    it('should return net salary with less than 40 hours', () => {
        expect(calculateEmployeePay(30)).toBe(96000);
    });
});