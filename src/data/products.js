import yirgacheffeImg_g from "../assets/images/yirgachefie-g.jpg";
import yirgacheffeImg_r from "../assets/images/yirgachefie-r.png";
import sidama_roasted from "../assets/images/sidama-roasted.png";
import sidama_g from "../assets/images/sidama-grounded.jpg";
import gujji_r from "../assets/images/gujji-rr.png";
import gujji_g from "../assets/images/gujji-g.png";
import jimma_r from "../assets/images/jimma-r.png";
import jimma_g from "../assets/images/jimmaa-g.png";

export const products = [
  {
    id: 1,
    name: "Yirgacheffe",
    type: "roasted",
    roastLevel: "light",
    price: 18.99,
    description:
      "Bright and floral with notes of jasmine and bergamot. A premium single-origin coffee from the birthplace of coffee.",
    image: yirgacheffeImg_r,
    origin: "Ethiopia",
    inStock: true,
    rating: 4.8,
    reviews: 124,
    // CORRECT FORMAT: Array of objects with size, price, label
    weightOptions: [
      { size: "250g", price: 18.99, label: "250g - $18.99" },
      { size: "500g", price: 35.99, label: "500g - $35.99" },
      { size: "1kg", price: 68.99, label: "1kg - $68.99" },
    ],
  },
  {
    id: 2,
    name: "Jimma",
    type: "roasted",
    roastLevel: "medium",
    price: 16.99,
    description:
      "Rich and balanced with notes of caramel and nuts. Smooth finish with medium body.",
    image: jimma_r,
    origin: "Ethiopia",
    inStock: true,
    rating: 4.6,
    reviews: 98,
    weightOptions: [
      { size: "250g", price: 16.99, label: "250g - $16.99" },
      { size: "500g", price: 32.99, label: "500g - $32.99" },
      { size: "1kg", price: 62.99, label: "1kg - $62.99" },
    ],
  },
  {
    id: 3,
    name: "Sidama",
    type: "roasted",
    roastLevel: "dark",
    price: 19.99,
    description:
      "Full-bodied with earthy notes and dark chocolate undertones. Low acidity.",
    image: sidama_roasted,
    origin: "Ethiopia",
    inStock: true,
    rating: 4.7,
    reviews: 87,
    weightOptions: [
      { size: "250g", price: 19.99, label: "250g - $19.99" },
      { size: "500g", price: 37.99, label: "500g - $37.99" },
      { size: "1kg", price: 72.99, label: "1kg - $72.99" },
    ],
  },
  {
    id: 4,
    name: "Gujji",
    type: "roasted",
    roastLevel: "medium",
    price: 15.99,
    description:
      "Perfect for espresso machines. Rich crema with chocolate and nut notes.",
    image: gujji_r,
    origin: "Ethiopia",
    inStock: true,
    rating: 4.9,
    reviews: 156,
    weightOptions: [
      { size: "250g", price: 15.99, label: "250g - $15.99" },
      { size: "500g", price: 30.99, label: "500g - $30.99" },
      { size: "1kg", price: 58.99, label: "1kg - $58.99" },
    ],
  },
  {
    id: 5,
    name: "Sidama",
    type: "grounded",
    roastLevel: "dark",
    price: 17.99,
    description:
      "Bold and smoky with a full body. Intense flavor with low acidity.",
    image: sidama_g,
    origin: "Ethiopia",
    inStock: true,
    rating: 4.5,
    reviews: 67,
    weightOptions: [
      { size: "250g", price: 17.99, label: "250g - $17.99" },
      { size: "500g", price: 34.99, label: "500g - $34.99" },
      { size: "1kg", price: 66.99, label: "1kg - $66.99" },
    ],
  },
  {
    id: 6,
    name: "Yirgacheffe",
    type: "grounded",
    grindSize: "medium",
    price: 14.99,
    description: "Light and bright. Perfect morning coffee with citrus notes.",
    image: yirgacheffeImg_g,
    origin: "Ethiopia",
    inStock: true,
    rating: 4.4,
    reviews: 45,
    weightOptions: [
      { size: "250g", price: 14.99, label: "250g - $14.99" },
      { size: "500g", price: 28.99, label: "500g - $28.99" },
      { size: "1kg", price: 54.99, label: "1kg - $54.99" },
    ],
  },
  {
    id: 7,
    name: "Gujji",
    type: "grounded",
    roastLevel: "medium",
    price: 18.99,
    description: "Naturally decaffeinated without chemicals. Same great taste.",
    image: gujji_g,
    origin: "Ethiopia",
    inStock: true,
    rating: 4.3,
    reviews: 32,
    weightOptions: [
      { size: "250g", price: 18.99, label: "250g - $18.99" },
      { size: "500g", price: 36.99, label: "500g - $36.99" },
      { size: "1kg", price: 70.99, label: "1kg - $70.99" },
    ],
  },
  {
    id: 8,
    name: "Jimma",
    type: "grounded",
    grindSize: "coarse",
    price: 16.99,
    description:
      "Specially blended and ground for cold brew. Smooth and refreshing.",
    image: jimma_g,
    origin: "Ethiopia",
    inStock: true,
    rating: 4.8,
    reviews: 78,
    weightOptions: [
      { size: "250g", price: 16.99, label: "250g - $16.99" },
      { size: "500g", price: 32.99, label: "500g - $32.99" },
      { size: "1kg", price: 62.99, label: "1kg - $62.99" },
    ],
  },
];
