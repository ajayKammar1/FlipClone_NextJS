import DBConnect from "@/utils/DB/DBConnection";
import Order from "@/utils/modules/Order";

export default async function handler(req, res) {
  await DBConnect();

  switch (req.method) {
    case "POST":
      try {
        // Create a new order
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
      } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
      break;

    case "GET":
      try {
        // Get order by ID from query parameters
        const { id } = req.query;

        // Validate ID
        if (!id) {
          return res.status(400).json({ message: "Order ID is required" });
        }

        // Find the order by ID
        const order = await Order.findById(id);

        // If no order is found, return a 404 status
        if (!order) {
          return res.status(404).json({ message: "Order not found" });
        }

        // Respond with the found order
        res.status(200).json(order);
      } catch (error) {
        console.error("Error fetching order:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
      break;

    default:
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
