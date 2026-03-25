export function getProduct(productId) {
  let matchingProduct;
  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });
  return matchingProduct;
}

export const products =[
  {
    id: "coffee-1",
    image: "Images/Espresso.jpg",
    name: "Espresso",
    priceCents: 250
  },
  {
    id: "coffee-2",
    image: "Images/Cappuccino.jpg",
    name: "Cappuccino",
    priceCents: 380
  },
  {
    id: "coffee-3",
    image: "Images/latte-coffee-cup.jpg",
    name: "Latte",
    priceCents: 400
  },
  {
    id: "coffee-4",
    image: "Images/Americiano-Coffee.jpg",
    name: "Americano",
    priceCents: 300
  },
  {
    id: "coffee-5",
    image: "Images/Flat-White-coffee.jpg",
    name: "Flat White",
    priceCents: 350
  },
  {
    id: "coffee-6",
    image: "Images/Mocha coffee.jpg",
    name: "Mocha",
    priceCents: 450
  },
  {
    id: "coffee-7",
    image: "Images/Macchiato.jpg",
    name: "Macchiato",
    priceCents: 320
  },
  
];