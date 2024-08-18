import DBConnect from "@/utils/DB/DBConnection";
import User from "@/utils/modules/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

      // Find the user by email
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Verify the password
      console.log(user.password);
      const isMatch = bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Create a JWT token
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(200).json({ token });
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
