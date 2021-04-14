import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js"; //todo mandatory! .js!
import Product from "../models/productModel.js"; //todo mandatory! .js!

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Product.deleteMany({}) //* удаляет предыдущие продукты, чтобы небыло дубликатов и ошибки
    const createdProducts = await Product.insertMany(data.products); //* inserts users array [data.users] inside users Collection in MongoDB
    res.send({ createdProducts });
  })
);

productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found..." });
    }
  })
);

export default productRouter;