import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { addToCart } from "@/Redux/Slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const router = useRouter();
  const { id } = router.query;

  const addToCarts = (item) => {
    dispatch(addToCart(item));
    router.push(`/cart`);
  };
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const response = await axios.get(`/api/products/${id}`);
          setProduct(response.data);
          console.log(response.data);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>No product found</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        {/* Image Gallery */}
        <div className="w-full lg:w-1/3">
          <div className="relative w-full h-96 justify-center center m-3">
            <Image
              src={product.image}
              alt={product.title}
              layout="responsive"
              objectFit="cover"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-2/3 lg:pl-8">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-lg text-gray-700 mb-4 text-justify">
            {product.description}
          </p>
          <p className="text-xl font-semibold mb-4">${product.price}</p>

          <button
            className="bg-green-500 text-white px-6 py-2 rounded-lg mt-4"
            onClick={() => {
              addToCarts(product);
              console.log("Product added to cart:", product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
