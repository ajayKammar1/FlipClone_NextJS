import DBConnect from "@/utils/DB/DBConnection";
import User from "@/utils/modules/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  await DBConnect();

  switch (req.method) {
    case "POST":
      const { email, password } = req.body;

      // Check if email and password are provided
      if (!email || !password) {
        return res
          .status(400)
          .json({ error: "Email and password are required" });
      }

      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      // Hash the password
      const hashedPassword = bcrypt.hashSync(password, 10);

      // Create a new user
      const user = new User({ email, password: hashedPassword });
      await user.save();

      res.status(201).json({ message: "User registered successfully!" });
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
