import DBConnect from "@/utils/DB/DBConnection";
import Product from "@/utils/modules/Product";
export default async function handler(req, res) {
  await DBConnect();

  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const product = await Product.findById(id);
      res.status(200).json(product);
      break;
    case "PUT":
      const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(updatedProduct);
      break;
    case "DELETE":
      await Product.findByIdAndDelete(id);
      res.status(204).end();
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
