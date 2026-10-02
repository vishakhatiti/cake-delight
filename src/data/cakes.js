import homeImage from "../assets/images/Home-img.jpg";
import sample1 from "../assets/images/Sample-1.jpg";
import sample2 from "../assets/images/Sample-2.jpg";
import sample3 from "../assets/images/Sample-3.jpg";
import sample4 from "../assets/images/Sample-4.jpg";
import sample5 from "../assets/images/Sample-5.jpg";
import sample6 from "../assets/images/Sample-6.jpg";
import sample7 from "../assets/images/Sample-7.jpg";
import sample8 from "../assets/images/Sample-8.jpg";
import sample9 from "../assets/images/Sample-9.jpg";
import storefront from "../assets/images/storefront.jpg";

export const cakeImages = [
  {
    image: homeImage,
    alt: "Cake at Cake Delight Shewalewadi",
    featured: true
  },
  {
    image: sample1,
    alt: "Cake from Cake Delight Shewalewadi"
  },
  {
    image: sample2,
    alt: "Fresh cake from Cake Delight Shewalewadi"
  },
  {
    image: sample3,
    alt: "Celebration cake at Cake Delight Shewalewadi"
  },
  {
    image: sample4,
    alt: "Cake design at Cake Delight Shewalewadi"
  },
  {
    image: sample5,
    alt: "Cake from Cake Delight Pune"
  },
  {
    image: sample6,
    alt: "Cake at Cake Delight Pune"
  },
  {
    image: sample7,
    alt: "Cake design from Cake Delight Shewalewadi"
  },
  {
    image: sample8,
    alt: "Celebration cake from Cake Delight"
  },
  {
    image: sample9,
    alt: "Fresh cake from Cake Delight"
  }
];

export const storefrontImage = {
  image: storefront,
  alt: "Cake Delight Shewalewadi storefront"
};

export const cakes = cakeImages.map((item) => ({
  ...item,
  name: "",
  description: "",
  price: "",
  category: "Cake"
}));