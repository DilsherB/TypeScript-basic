interface Product {
  id: number;
  name: string;
  stock: number;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

let productsArray: Product[] = [
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

function updateStockLevel(
  products: Product[],
  productId: number,
  qtyChange: number,
): ApiResponse<Product | undefined> {
  let productToUpdate = products.find((product) => product.id === productId)
  if(!productToUpdate){
    return {
      success: false,
      message: "Product not found",
      data: undefined
    }
  }
    productToUpdate.stock += qtyChange;
    return {
      success: true,
      message: "Product updated successfully",
      data: productToUpdate
    }
}

console.log('====================================');
updateStockLevel(productsArray, 1, 10)
console.log(productsArray);
console.log('====================================');