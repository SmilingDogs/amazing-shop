import express from "express";
import data from "./data.js"; //todo - mandatory! data.js!

const app = express();
const port = process.env.PORT || 5000;

app.get("/api/products", (req, res) => {
  res.send(data.products);
}); //* api for serving whole products list

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((p) => p._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not Found" });
  }
}); //* api for serving selected product

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
