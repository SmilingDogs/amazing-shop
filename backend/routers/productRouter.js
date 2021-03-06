import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js"; //todo mandatory .js!
import Product from "../models/productModel.js"; //todo mandatory .js!
import { isAdmin, isAuth, isSellerOrAdmin } from '../utils.js';

const productRouter = express.Router();
// todo Product.find({}) === returns all products (objects) и отправить на Фронт
productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const name = req.query.name || '';
    const seller = req.query.seller || '';
    const nameFilter = name ? { name: { $regex: name, $options: 'i' } } : {};
    const sellerFilter = seller ? { seller } : {};
    const products = await Product.find({
      ...sellerFilter,
      ...nameFilter,
    }).populate('seller', 'seller.name seller.logo');
    res.send(products);
  })
);
//todo данный роут возвращает массив продуктов inside Product Collection in MongoDB from data.js
productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Product.deleteMany({}) //* удаляет предыдущие продукты, чтобы небыло дубликатов и ошибки
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);
//todo данный роут возвращает отдельный продукт по id!
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
//todo данный роут возвращает новый/созданный Продукт
productRouter.post(
  '/',
  isAuth,
  isSellerOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name: 'sample name ' + Date.now(),
      seller: req.user._id,
      image: '/images/p1.jpg',
      price: 0,
      category: 'sample category',
      brand: 'sample brand',
      countInStock: 0,
      rating: 0,
      numReviews: 0,
      description: 'sample description',
    });
    const createdProduct = await product.save();
    res.send({ message: 'Product Created', product: createdProduct });
  })
);
//todo данный роут возвращает Изменения в Продукте (измененный Продукт)
productRouter.put(
  '/:id',
  isAuth,
  isSellerOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      product.name = req.body.name;
      product.price = req.body.price;
      product.image = req.body.image;
      product.category = req.body.category;
      product.brand = req.body.brand;
      product.countInStock = req.body.countInStock;
      product.description = req.body.description;
      const updatedProduct = await product.save();
      res.send({ message: 'Product Updated', product: updatedProduct });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);
//todo данный роут производит Удаление Продукта
productRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const deleteProduct = await product.remove();
      res.send({ message: 'Product Deleted', product: deleteProduct });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);
export default productRouter;
