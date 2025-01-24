function applyCartDiscounts(cart, couponCode) {
    let total = 0;
    let quantityDiscount = 0;
    let categoryDiscount = 0;
    let seasonalDiscount = 0;
    let couponDiscount = 0;

    for (let item of cart) {
        total += item.price * item.quantity;
        if (item.quantity >= 10) {
            quantityDiscount += item.price * item.quantity * 0.1; 
        }
    }
    for (let item of cart) {
        if (item.category === 'electronics') {
            categoryDiscount += item.price * item.quantity * 0.05; 
        }
    }
    if (currentMonth === 11) {
        seasonalDiscount = total * 0.1; 
    }
    if (couponCode === 'SAVE20') {
        couponDiscount = total * 0.2;
    }
    let finalTotal = total - quantityDiscount - categoryDiscount - seasonalDiscount - couponDiscount;
    return finalTotal;
}

module.exports = { applyCartDiscounts };