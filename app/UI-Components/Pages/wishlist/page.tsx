"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type WishlistItem = {
  Id: string;
  title: string;
  price: string;
  review: string;
  image: string;
};

const wishlist = () => {
  const [WishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const loadWishlist = () => {
      try {
        const wishlist: WishlistItem[] = JSON.parse(
          localStorage.getItem("Wishlist") || "[]"
        );
        setWishlistItems(wishlist);
      } catch (error) {
        console.error("Failed to load wishlist", error);
        setWishlistItems([]);
      }
    };

    loadWishlist();
    window.addEventListener("storageUpdate", loadWishlist);
    return () => window.removeEventListener("storageUpdate", loadWishlist);
  }, []);

  const handleRemove = (productId: string) => {
    const updateWishlist = WishlistItems.filter(
      (item) => item.Id !== productId
    );
    localStorage.setItem("Wishlist", JSON.stringify(updateWishlist));
    window.dispatchEvent(new Event("storageUpdate"));
    toast.success("Product Removed From Wishlist");
  };

  const handleAddToCart = (product: any) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProduct = cart.find((item: any) => item.Id === product.Id);

    if (existingProduct) {
      toast(`${product.title} is already in the cart!`, {
        icon: "🤷‍♂️",
        style: {
          border: "1px solid #facc15",
          padding: "16px",
          color: "#333",
          background: "#fff9c4",
        },
      });
    } else {
      cart.push({ ...product, qty: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("storageUpdate"));
      toast.success(`${product.title} added to cart!`);
    }
  };

  return (
    <>
      <div className="'px-[8%] lg:px-[12%] bg-[#E6F9EF] py-5">
        <div className="flex items-center justify-between">
          <h2 className="Unbounded text-2xl">Wishlist</h2>
          <div className="flex">
            <Link href="/" className="text-2xl Unbounded">
              Home &nbsp; :
            </Link>
            <h2 className="Unbounded text-2xl text-[var(--prim-color)]">
              &nbsp; Wishlist
            </h2>
          </div>
        </div>
      </div>

      <div className="'px-[8%] lg:px-[5%] py-10">
        {WishlistItems.length === 0 ? (
          <p className="text-lg bg-red-200 px-5 py-2 rounded">
            Your Wishlist is Empty!
          </p>
        ) : (
          <div className="overflow-x-auto">
            <div className="overflow-auto">

              {/* Desktop Table */}
              <table className="min-w-full border border-gray-300 rounded-hidden md:table hidden">
                <thead className="bg-[var(--prim-light)]">
                  <tr>
                    <th className="py-3 px-4 Unbounded border-r border-gray-300 text-left">
                      Product
                    </th>
                    <th className="py-3 px-4 Unbounded border-r border-gray-300 text-left">
                      Price
                    </th>
                    <th className="py-3 px-4 Unbounded border-r border-gray-300 text-left">
                      Stock Status
                    </th>
                    <th className="py-3 px-4 Unbounded border-r border-gray-300 text-left">
                      Add to Cart
                    </th>
                    <th className="py-3 px-4 Unbounded text-left cursor-pointer">
                      Remove
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {WishlistItems.map((item) => (
                    <tr key={item.Id} className="border-b border-gray-300">
                      <td className="py-3 px-4 flex items-center gap-3 border-r border-gray-300">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="object-contain rounded hover:scale-110 transition-all"
                        />
                        <div>
                          <p className="font-medium Unbounded text-xl">
                            {item.title}
                          </p>
                          <h6 className="text-sm text-gray-500 mt-1 flex gap-1">
                            <i className="bi bi-shop text-[var(--prim-color)]"></i>{" "}
                            By Lucky Supermarket
                          </h6>
                          <span className="flex items-center text-yellow-500 text-md">
                            <i className="bi bi-star-fill me-1"></i>{" "}
                            {item.review} Review
                          </span>
                        </div>
                      </td>

                      <td className="py-3 px-4 Unbounded border-r border-gray-300">
                        ${parseFloat(item.price.replace(/[^0-9.-]+/g, "")).toFixed(2)}
                      </td>

                      <td className="px-3 Unbounded border-r border-gray-300">
                        In Stock
                      </td>

                      <td className="border-r border-gray-300">
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="w-full cursor-pointer py-3 px-2 text-lg font-semibold text-[var(--prim-color)] 
                          bg-[var(--prim-light)] rounded-md hover:bg-[var(--prim-color)] hover:text-white transition-all"
                        >
                          Add to Cart <i className="bi bi-cart"></i>
                        </button>
                      </td>

                      <td className="py-3 px-4 text-center Unbounded">
                        <button
                          onClick={() => handleRemove(item.Id)}
                          className="text-red-500 hover:text-red-700 transition-all"
                        >
                          × Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile List */}
              <div className="md:hidden space-y-4">
                {WishlistItems.map((item) => (
                  <div
                    key={item.Id}
                    className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
                  >
                    <div className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 object-contain rounded"
                      />
                      <div>
                        <p className="font-medium Unbounded text-xl">
                          {item.title}
                        </p>
                        <h6 className="text-sm text-gray-500 mt-1 flex gap-1">
                          <i className="bi bi-shop text-[var(--prim-color)]"></i>{" "}
                          By Lucky Supermarket
                        </h6>
                        <span className="flex items-center text-yellow-500 text-md">
                          <i className="bi bi-star-fill me-1"></i>{" "}
                          {item.review} Reviews
                        </span>
                      </div>
                    </div>

                    <p className="mt-3 Unbounded">
                      Price: $
                      {parseFloat(item.price.replace(/[^0-9.-]+/g, "")).toFixed(2)}
                    </p>

                    <p className="mt-1 Unbounded">Status: In Stock</p>

                    <button
                      onClick={() => handleAddToCart(item)}
                      className="w-full cursor-pointer py-3 px-2 my-3 text-lg font-semibold text-[var(--prim-color)] 
                      bg-[var(--prim-light)] rounded-md hover:bg-[var(--prim-color)] hover:text-white transition-all"
                    >
                      Add to Cart <i className="bi bi-cart"></i>
                    </button>

                    <button
                      className="text-red-500 hover:text-red-700 transition-all"
                      onClick={() => handleRemove(item.Id)}
                    >
                      × Remove
                    </button>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default wishlist;
