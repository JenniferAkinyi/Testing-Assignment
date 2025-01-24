function calculateTotal(products){
    let total = 0;
    for(let product of products){
        total += product.price;
    }
    let saleTax = total * 0.08;
    let grandTotal = Math.round(total + saleTax);

    if(grandTotal > 100){
        let discount = grandTotal * 0.1;
        let absoluteTotal = Math.round(grandTotal - discount);
        return absoluteTotal;
    }else{  
        return grandTotal;
    }
}

module.exports = { calculateTotal };