import express from "express";
import mongoose from "mongoose";
//* import data from "./data.js"; уже не нужен, данные берутся с MongoDB
import dotenv from 'dotenv';
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//todo Подключение сервера к MongoDB
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
// //todo Сервер для списка продуктов (from data.js)
// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });
// //todo Сервер для отдельного продукта (from data.js)
// app.get("/api/products/:id", (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product Not Found" });
//   }
// });

//todo Серверы (2) для users,products - при запросе отвечает userRouter
app.use("/api/users", userRouter);
app.use('/api/products', productRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

//todo Сервер для показа ошибок Users. This is an error catching middleware, errors are sent to Frontend
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

//todo Это вывод в консоль порта на котром работает бекенд
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serving at http://localhost:${port}`);
});
