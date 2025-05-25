const products = [
  { id: 1, name: "iPhone 16", color: "Black", price: 120000, brand: "Apple" },
  { id: 2, name: "iPhone 15", color: "Red", price: 130000, brand: "Apple" },
  { id: 3, name: "iPhone 14", color: "Blue", price: 150000, brand: "Apple" },
  { id: 4, name: "iPhone 13", color: "White", price: 130000, brand: "Apple" },
  { id: 5, name: "iPhone 12", color: "Silver", price: 80000, brand: "Apple" },
];
// ForEach Method
products.forEach((product) => {
  if (product.color === "Blue") {
    console.log(product);
  }
});

// Filter Method
const newProduct = products.filter((product) => product.price > 130000);
console.log(newProduct);

// Find Method

let blueOne=products.find(element=>element.color==='Blue');
console.log(blueOne);
