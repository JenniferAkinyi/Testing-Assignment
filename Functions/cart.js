let cart = [
    {name: "Shirt", price: 500, quality: 2, category: "Clothes"},
    {name: "Fridge", price: 12000, quality: 3, category: "Electronics", coupon: "20%"},
    {name: "Cardigan", price: 300, quality: 1, category: "Clothes"},
    {name: "Blender", price: 1300, quality: 2, category: "Electronics"},
]
function calculateCartTotal(){
    let total = 0;
    for(let item of cart){
        total += item.price;
    }
    return total;
}
console.log(calculateCartTotal());