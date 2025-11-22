"use client";

import Image from "next/image";
import satisfactionIcon from "@/public/satisfaction-icon.png";
import toast from "react-hot-toast";
import { useState } from "react";
import Deals from "@/app/UI-Components/index/Deals/Deals";

interface ProductType {
  Id: string;
  image: string;
  title: string; // ← تصحيح مهم
  price: string;
  lessprice: string;
  review: string;
  sold?: string;
  sale?: string;
}

interface Props {
  id?: string;
  products: ProductType[];
}

const ProductDetails = ({ id, products }: Props) => {
  // ---------- NO ID → SHOW ALL PRODUCTS ----------
  if (!id) {

    return (
 
      <div>
        <h1>All Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.Id} className="border p-4 rounded-md">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />

              <h2 className="font-bold mt-2">{product.title}</h2>
              <p className="text-green-600">{product.price}</p>

              {product.lessprice && (
                <p className="line-through text-gray-500">
                  {product.lessprice}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ---------- FIND THE PRODUCT ----------
  const product = products.find((item) => String(item.Id) === String(id));

  if (!product) return <p>Product Not Found!</p>;

  const [quantity, setQuantity] = useState(1);

  // ---------- ADD TO CART ----------
  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existing = cart.find((item: any) => item.Id === product.Id);

    if (existing) {
      toast(`${product.title} is already in the cart!`, {
        icon: "🤷‍♂️",
      });
      return;
    }

    cart.push({ ...product, qty: quantity });

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storageUpdate"));

    toast.success(`${product.title} added to cart!`);
  };

  // ---------- ADD TO WISHLIST ----------
  const handleAddToWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("Wishlist") || "[]");

    const existing = wishlist.find((item: any) => item.Id === product.Id);

    if (existing) {
      toast(`${product.title} is already in the Wishlist!`, {
        icon: "🤷‍♂️",
      });
      return;
    }

    wishlist.push({ ...product });

    localStorage.setItem("Wishlist", JSON.stringify(wishlist));
    window.dispatchEvent(new Event("storageUpdate"));

    toast.success(`${product.title} added to Wishlist!`);
  };

  // ---------- MAIN RETURN ----------
  return (
      <>
    <div className="px-[8%] lg:px-[12%] py-10">
      <div className="flex justify-between gap-5">
        <div className="w-full flex justify-between">
          {/* IMAGE */}
          <div className="border border-gray-300 rounded-2xl">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              unoptimized
              className="object-contain p-20"
            />
          </div>

          {/* PRODUCT INFO */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="Unbounded text-3xl">{product.title}</h2>

            <span className="flex items-center border-b border-gray-300 pb-3 text-yellow-500 text-md mt-4">
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              &nbsp;
              <span className="text-black font-medium">
                4.5 Star Rating ({product.review})
              </span>
            </span>

            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              culpa, est illo id sapiente veniam.
            </p>

            <div className="flex items-center gap-2 border-b border-gray-300 pb-3">
              <h3 className="Unbounded text-2xl">{product.price}</h3>
              <del className="Unbounded text-gray-500">{product.lessprice}</del>
            </div>

            {/* Quantity */}
            <div className="my-4">
              <h3 className="mb-3">Quantity :</h3>

              <div className="flex items-center border rounded-lg w-28 shadow-sm">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1 text-xl hover:bg-gray-200 rounded-l"
                >
                  –
                </button>

                <span className="px-4">{quantity}</span>

                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1 text-xl hover:bg-gray-200 rounded-r"
                >
                  +
                </button>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleAddToCart}
                className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-[var(--prim-color)] cursor-pointer"
              >
                <i className="bi bi-cart p-3"></i>
                Add To Cart
              </button>

              <button
                onClick={handleAddToWishlist}
                className="px-5 py-2 bg-green-700 text-white rounded-lg hover:bg-[var(--prim-color)] cursor-pointer"
              >
                <i className="bi bi-balloon-heart p-3"></i>
                Add To Wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="border border-gray-300 rounded-md">
            <div className="p-3">
              <div className="flex justify-between items-center gap-2 px-2 bg-[var(--prim-color)] p-3 rounded-full">
                <span className="text-white">
                  <i className="bi bi-shop mr-2 bg-white text-black px-3 py-2 rounded-full"></i>
                  By<span className="font-semibold">Deluxe Sasket</span>
                </span>
                <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-black hover:text-white cursor-pointer transition-all">
                  View More
                </button>
              </div>
            </div>
            <div className="bg-[#97ffc971]">
              <div className="flex items-center px-7 py-4 border-b border-gray-300 gap-3">
                <i className="bi bi-truck mr-2 px-3 py-2 rounded-full text-[var(--prim-color)] bg-white"></i>
                <div className="flex flex-col">
                  <h3 className="Unbounded">Fast Delivery</h3>
                  <p className="text-gray-600">
                    Lightning-fast shipping, guaranteed.
                  </p>
                </div>
              </div>
              <div className="flex items-center px-7 py-4 border-b border-gray-300 gap-3">
                <i className="bi bi-arrow-return-left mr-2 px-3 py-2 rounded-full text-[var(--prim-color)] bg-white"></i>
                <div className="flex flex-col">
                  <h3 className="Unbounded">Free 30-day returns</h3>
                  <p className="text-gray-600">
                    Shop risk-free with easy returns.
                  </p>
                </div>
              </div>
              <div className="flex items-center px-7 py-4 border-b border-gray-300 gap-3">
                <i className="bi bi-bag-check mr-2 px-3 py-2 rounded-full text-[var(--prim-color)] bg-white"></i>
                <div className="flex flex-col">
                  <h3 className="Unbounded">
                    Pickup available at Shop location
                  </h3>
                  <p className="text-gray-600">Usually ready in 24 hours.</p>
                </div>
              </div>
              <div className="flex items-center px-7 py-4 border-b border-gray-300 gap-3">
                <i className="bi bi-bag-check mr-2 px-3 py-2 rounded-full text-[var(--prim-color)] bg-white"></i>
                <div className="flex flex-col">
                  <h3 className="Unbounded">Payment</h3>
                  <p className="text-gray-600">
                    Payment upon receipt of goods, Payment by card in the
                    department, Google Pay, Online card.
                  </p>
                </div>
              </div>
              <div className="flex items-center px-7 py-4 border-b border-gray-300 gap-3">
                <i className="bi bi-clipboard mr-2 px-3 py-2 rounded-full text-[var(--prim-color)] bg-white"></i>
                <div className="flex flex-col">
                  <h3 className="Unbounded">Warranty</h3>
                  <p className="text-gray-600">
                    The Consumer Protection Act does not provide for the return
                    of this product of proper quality.
                  </p>
                </div>
              </div>
              <div className="flex items-center px-7 py-4 border-b border-gray-300 gap-3">
                <i className="bi bi-box2-heart mr-2 px-3 py-2 rounded-full text-[var(--prim-color)] bg-white"></i>
                <div className="flex flex-col">
                  <h3 className="Unbounded">Packaging</h3>
                  <p className="text-gray-600">
                    Research & development value proposition graphical user
                    interface investor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 mt-10 rounded-lg">
  <div className="flex justify-between items-center border-b p-3 pb-5 border-gray-300 gap-2">
    
    <span className="bg-[var(--prim-color)] px-4 py-2 text-white font-semibold text-xl rounded-full">
      Description
    </span>

    <span className="bg-[#97ffc871] px-4 py-2 text-[var(--prim-color)] font-semibold text-xl rounded-full flex gap-3 items-center">
      <Image 
        src={satisfactionIcon} 
        alt="satisfactionIcon" 
        className="w-6 h-6"
      />
      100% satisfaction Guaranteed
    </span>
  </div>
  <div className="p-5 mt-5">
        <h2 className="Unbounded text-2xl mb-3">Product Description</h2>
        <p className="text-gray-500 mb-1 ">Wherever celebrations and good times happen, the LAY'S brand will be there just as it has been for more than 75 years. With flavors almost as rich as our history, we have a chip or crisp flavor guaranteed to bring a smile on your face.</p>
        <p className="text-gray-500 mb-1">Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor.
        </p>
        <p className="text-gray-500 mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius perferendis perspiciatis temporibus voluptate, nemo quod dignissimos nam molestias nulla a officia eos, voluptatem beatae provident, dolorum suscipit aspernatur doloribus. Ut.
        </p>
  <div className="mt-5 ps-5">
        <p className="text-gray-500 mb-1 "><span>•</span> 8.0 oz. bag of LAY'S Classic Potato Chips</p>
        <p className="text-gray-500 mb-1 "><span>•</span> Tasty LAY's potato chips are a great snack</p>
        <p className="text-gray-500 mb-1 "><span>•</span> Includes three ingredients: potatoes, oil, and salt</p>
        <p className="text-gray-500 mb-1 "><span>•</span> Gluten free product</p>
    </div>
    <div className="mt-3">
        <p className="text-gray-500 mb-1 ">Made in USA</p>
        <p className="text-gray-500 mb-1 ">Ready To Eat</p>
    </div>
      <h2 className="Unbounded text-2xl mb-3 mt-8">Product Specifications</h2>
      <div className="">
          <p className="text-gray-500 mb-2"><i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i><span className="font-semibold text-black">Product Type:</span>Chips & Dips</p>
          <p className="text-gray-500 mb-2"><i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i><span className="font-semibold text-black">Product Name</span>{product.title}</p>
          <p className="text-gray-500 mb-2"><i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i><span className="font-semibold text-black">Brand: Lay's</span></p>
          <p className="text-gray-500 mb-2"><i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i><span className="font-semibold text-black">FSA Eligible:</span>No</p>
          <p className="text-gray-500 mb-2"><i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i><span className="font-semibold text-black">Size/Count:</span>8.0oz</p>
          <p className="text-gray-500 mb-2"><i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i><span className="font-semibold text-black">Item Code:</span>425652</p>
          <p className="text-gray-500 mb-2"><i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i><span className="font-semibold text-black">Ingredients:</span>Potatoes, Vegetable Oil, and Salt.</p>
      </div>
      <h2 className="Unbounded text-2xl mb-3 mt-8">Nutrition Facts</h2>
      <div className="">
          <p className="text-gray-500 mb-2"><i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i><span className="font-semibold text-black">Total Fat 10g 13%</span></p>
          <p className="text-gray-500 mb-2"><i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i><span className="font-semibold text-black">Saturated Fat 1.5g 7%</span></p>
          <p className="text-gray-500 mb-2"><i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i><span className="font-semibold text-black">Cholesterol 0mg 0%</span></p>
          <p className="text-gray-500 mb-2"><i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i><span className="font-semibold text-black">Sodium 170mg 7%</span></p>
          <p className="text-gray-500 mb-2"><i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i><span className="font-semibold text-black">Size/Count:</span></p>
          <p className="text-gray-500 mb-2"><i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i><span className="font-semibold text-black">Potassium 350mg 6%</span></p>
          <p className="text-gray-500 mb-2"><i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i><span className="font-semibold text-black">Ingredients:</span></p>
      </div>
        <h2 className="Unbounded text-2xl mb-3 mt-8">More Details</h2>
        <div className="">
          <p className="text-gray-500 mb-2"><i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i>Lunarlon midsole delivers ultra-plush responsiveness</p>
          <p className="text-gray-500 mb-2"><i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i>Encapsulated Air-Sole heel unit for lightweight cushioning</p>
          <p className="text-gray-500 mb-2"><i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i>Colour Shown: Ale Brown/Black/Goldtone/Ale Brown</p>
          <p className="text-gray-500 mb-2"><i className="bi bi-check-circle text-[var(--prim-color)] mr-1"></i>Style: 805899-202</p>

        </div>
    </div>
</div>

    </div>
    <Deals/>
    
    
    </>
    );
};

export default ProductDetails;
