import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 sticky">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Company Information */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Company</h2>
            <ul>
              <li className="mb-2">
                <Link href="/about">
                  <div className="hover:underline">About Us</div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/careers">
                  <div className="hover:underline">Careers</div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact">
                  <div className="hover:underline">Contact Us</div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy">
                  <div className="hover:underline">Privacy Policy</div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/terms">
                  <div className="hover:underline">Terms of Service</div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Customer Service</h2>
            <ul>
              <li className="mb-2">
                <Link href="/returns">
                  <div className="hover:underline">Returns</div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/shipping">
                  <div className="hover:underline">Shipping</div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/faq">
                  <div className="hover:underline">FAQ</div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/support">
                  <div className="hover:underline">Support</div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <div
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-2xl hover:text-gray-400" />
              </div>
              <div
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl hover:text-gray-400" />
              </div>
              <div
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-gray-400" />
              </div>
              <div
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-2xl hover:text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
