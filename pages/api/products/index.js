import DBConnect from "@/utils/DB/DBConnection";
import Product from "@/utils/modules/Product";

export default async function handler(req, res) {
  await DBConnect();

  switch (req.method) {
    case "GET":
      const products = await Product.find({});
      res.status(200).json(products);
      break;
    case "POST":
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
