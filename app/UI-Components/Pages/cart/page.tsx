"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

type CartItem = {
  Id: string;
  title: string;
  price: string;
  review: string;
  qty?: number;
  image: string;
};

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const estimatedTaxes = 10;

  // Load cart from localStorage
  useEffect(() => {
    const loadCart = () => {
      try {
        const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(cart);

        const total = cart.reduce((acc: number, item: CartItem) => {
          const quantity = item.qty ?? 1;
          const priceNum = item.price
            ? parseFloat(item.price.replace(/[^0-9.-]+/g, "")) || 0
            : 0;
          return acc + priceNum * quantity;
        }, 0);

        setSubtotal(total);
      } catch (error) {
        console.error("Failed to load cart", error);
        setCartItems([]);
        setSubtotal(0);
      }
    };

    loadCart();
    window.addEventListener("storageUpdate", loadCart);
    return () => window.removeEventListener("storageUpdate", loadCart);
  }, []);

  const handleRemove = (productId: string) => {
    const updatedCart = cartItems.filter((item) => item.Id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storageUpdate"));
    toast.success("Product Removed From Cart");
  };

  const handleQtyChange = (productId: string, qty: number) => {
    const updatedCart = cartItems.map((item) =>
      item.Id === productId ? { ...item, qty } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storageUpdate"));
  };

  return (
    <>
      {/* HEADER */}
      <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="Unbounded text-3xl ">Shopping Cart</h2>
          <div className="flex text-xl">
            <Link
              href="/"
              className="Unbounded hover:text-green-600 duration-200"
            >
              Home :
            </Link>
            <span className="Unbounded text-[var(--prim-color)]">&nbsp;Cart</span>
          </div>
        </div>
      </div>

      {/* CART ITEMS */}
      <div className="px-[6%] lg:px-[12%] py-10">
        {cartItems.length === 0 ? (
          <p className="text-lg bg-red-200 px-5 py-3 rounded shadow-md w-fit">
            Your Cart is empty!
          </p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Desktop Table */}
            <div className="hidden md:block w-full overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl border shadow">
                <thead className="bg-[var(--prim-light)]">
                  <tr>
                    <th className="py-4 px-4 Unbounded text-left">Product</th>
                    <th className="py-4 px-4 Unbounded text-left">Price</th>
                    <th className="py-4 px-4 Unbounded text-left">Quantity</th>
                    <th className="py-4 px-4 Unbounded text-left">Subtotal</th>
                    <th className="py-4 px-4 Unbounded text-left">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => {
                    const qty = item.qty ?? 1;
                    const priceNum = parseFloat(
                      (item.price ?? "0").toString().replace(/[^0-9.-]+/g, "")
                    );
                    const subtotalItem = qty * priceNum;

                    return (
                      <tr
                        key={`${item.Id}-${index}`}
                        className="border-b hover:bg-gray-100 duration-200"
                      >
                        <td className="py-4 px-4 flex items-center gap-4">
                          <img
                            src={item.image}
                            className="w-20 h-20 object-contain rounded-lg shadow"
                          />
                          <div>
                            <p className="font-semibold text-lg">{item.title}</p>
                            <p className="text-sm text-gray-500 flex gap-1 items-center">
                              <i className="bi bi-shop text-green-600"></i> Lucky Supermarket
                            </p>
                            <p className="flex items-center text-yellow-500">
                              <i className="bi bi-star-fill mr-1"></i> {item.review} Reviews
                            </p>
                          </div>
                        </td>
                        <td className="py-4 px-4 Unbounded text-lg">${priceNum.toFixed(2)}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center border rounded-lg w-28 shadow-sm">
                            <button
                              onClick={() => handleQtyChange(item.Id, Math.max(1, qty - 1))}
                              className="px-3 py-1 text-xl hover:bg-gray-200 rounded-l"
                            >
                              –
                            </button>
                            <span className="px-4">{qty}</span>
                            <button
                              onClick={() => handleQtyChange(item.Id, qty + 1)}
                              className="px-3 py-1 text-xl hover:bg-gray-200 rounded-r"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-4 Unbounded text-lg">${subtotalItem.toFixed(2)}</td>
                        <td className="py-4 px-4">
                          <button
                            onClick={() => handleRemove(item.Id)}
                            className="text-red-500 hover:text-red-700 font-semibold"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Card Layout */}
            <div className="md:hidden space-y-5">
              {cartItems.map((item, index) => {
                const qty = item.qty ?? 1;
                const priceNum = parseFloat(
                  (item.price ?? "0").toString().replace(/[^0-9.-]+/g, "")
                );
                const subtotalItem = qty * priceNum;

                return (
                  <div
                    key={`${item.Id}-${index}`}
                    className="bg-white p-5 rounded-xl shadow-lg border"
                  >
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        className="w-24 h-24 object-contain rounded-lg shadow"
                      />
                      <div className="flex-1">
                        <p className="font-bold text-lg">{item.title}</p>
                        <p className="text-sm text-gray-500">
                          <i className="bi bi-shop text-green-600"></i> Lucky Supermarket
                        </p>
                        <p className="text-yellow-500 flex items-center">
                          <i className="bi bi-star-fill mr-1"></i> {item.review} Reviews
                        </p>
                      </div>
                    </div>

                    <p className="mt-3 text-lg font-semibold">Price: ${priceNum.toFixed(2)}</p>

                    <div className="flex items-center border w-32 rounded-lg mt-2 shadow-sm">
                      <button
                        className="px-3 py-1 text-xl bg-gray-100"
                        onClick={() => handleQtyChange(item.Id, Math.max(1, qty - 1))}
                      >
                        –
                      </button>
                      <span className="px-4">{qty}</span>
                      <button
                        className="px-3 py-1 text-xl bg-gray-100"
                        onClick={() => handleQtyChange(item.Id, qty + 1)}
                      >
                        +
                      </button>
                    </div>

                    <p className="mt-3 text-lg font-semibold">Subtotal: ${subtotalItem.toFixed(2)}</p>

                    <button
                      onClick={() => handleRemove(item.Id)}
                      className="mt-3 text-red-600 font-semibold"
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Cart Total Sidebar */}
            <div className="w-full lg:w-1/2 sticky top-24 left-0 pt-6">
              <div className="bg-[var(--prim-light)] p-6 rounded-2xl shadow-lg border border-gray-200">
                <h2 className="text-2xl font-semibold mb-6">Cart Total</h2>

                <div className="flex justify-between mb-3 text-gray-700">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between mb-3 text-gray-700">
                  <span className="font-medium">Estimated Delivery</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>

                <div className="flex justify-between mb-3 text-gray-700">
                  <span className="font-medium">Estimated Taxes</span>
                  <span className="font-semibold">USD {estimatedTaxes.toFixed(2)}</span>
                </div>

                <div className="border-t my-4"></div>

                <div className="flex justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span>${(subtotal + estimatedTaxes).toFixed(2)}</span>
                </div>

                <Link
                  href="/UI-Components/Pages/checkout"
                  className="block w-full text-center bg-[var(--prim-color)] text-white py-3 mt-6 rounded-lg font-semibold hover:bg-green-700 transition-all"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
