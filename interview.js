"use strict";
let productsArray = [
    {
        id: 1,
        name: "sports shirt",
        stock: 50,
    },
    {
        id: 2,
        name: "cricket bat",
        stock: 500,
    },
];
function updateStockLevel(products, productId, qtyChange) {
    let productToUpdate = products.find((product) => product.id === productId);
    if (!productToUpdate) {
        return {
            success: false,
            message: "Product not found",
            data: undefined
        };
    }
    productToUpdate.stock += qtyChange;
    return {
        success: true,
        message: "Product updated successfully",
        data: productToUpdate
    };
}
console.log('====================================');
updateStockLevel(productsArray, 1, 10);
console.log(productsArray);
console.log('====================================');
