import mongoose from "mongoose";
import productModel from "../models/productModel.js";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Database connection error:", err);
  }
};

export default dbConnect;

// db.products.insertMany([
//   {
//     name: "Product 1",
//     description: "Description for product 1",
//     price: 199,
//     image: "/images/1.PNG",
//   },
//   { name: "Product 2",    
//     description: "Description for product 2",
//     price: 299,
//     image: "/images/2.PNG",
//   },
//   {
//     name: "Product 3",
//     description: "Description for product 3",
//     price: 399,
//     image: "/images/3.PNG",
//   },
// ]);
// db.products.insertMany([
//   {
//     name: "Product 6",
//     description: "Description for product 6",
//     price: 699,
//     image: "/images/6.PNG",
//   },
//   {
//     name: "Product 7",
//     description: "Description for product 7",
//     price: 799,
//     image: "/images/7.PNG",
//   },
//   {
//     name: "Product 8",
//     description: "Description for product 8",
//     price: 899,
//     image: "/images/8.PNG",
//   }
// ]);

// db.products.insertOne([
//   {
//     name: "Product 6",
//     description: "Description for product 6",
//     price: 699,
//     image: "/images/6.PNG",
//   },
// ]);

// db.products.insertOne({
//   name: "Product 8",
//   description: "Description for product 8",
//   price: 899,
//   image: "/images/8.PNG"
// })