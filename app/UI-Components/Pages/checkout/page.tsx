"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type CartItem = {
  Id: string;
  title: string;
  price: string;
  review: string;
  qty?: number;
  image: string;
};

export default function Checkout() {
  const [deliveryOption, setDeliveryOption] = useState<"ship" | "pickup">("ship");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);

  const handlePlaceOrder = () => {
    toast.success("Order Placed Successfully!");
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, "")) || 0;
    const quantity = item.qty ?? 1;
    return acc + price * quantity;
  }, 0);

  const estimatedTax = totalPrice * 0.1;
  const finalTotal = totalPrice + estimatedTax;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E9FFF3] to-[#CFFFF0]">
      
      {/* Header */}
      <div className="px-[8%] lg:px-[12%] py-6 bg-white shadow">
        <div className="flex justify-between items-center">
          <h2 className="Unbounded text-3xl text-[var(--prim-color)]">Checkout</h2>
          <div className="text-xl">
            <Link href="/" className="Unbounded hover:text-green-600 duration-200">
              Home :
            </Link>
            <span className="Unbounded text-[var(--prim-color)]"> Checkout</span>
          </div>
        </div>
      </div>

      <div className="px-[6%] lg:px-[12%] py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT FORM */}
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl shadow-lg border border-green-100">
            <h3 className="Unbounded text-2xl mb-4 text-[var(--prim-color)]">Contact Info</h3>
            <input
              type="email"
              className="w-full border border-gray-300 px-3 py-2 rounded mb-4 focus:border-green-500 outline-none"
              placeholder="Email or mobile phone number"
            />

            <div className="mb-5">
              <input type="checkbox" id="news" className="me-2" />
              <label htmlFor="news" className="text-sm">Email me with news & offers</label>
            </div>

            <h3 className="Unbounded text-2xl mb-2 text-[var(--prim-color)]">Delivery</h3>

            {/* Delivery Options */}
            <div className="flex gap-5 mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={deliveryOption === "ship"}
                  onChange={() => setDeliveryOption("ship")}
                />
                Ship to address
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={deliveryOption === "pickup"}
                  onChange={() => setDeliveryOption("pickup")}
                />
                Pickup in store
              </label>
            </div>

            {/* Shipping Form */}
            {deliveryOption === "ship" && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <select className="border border-gray-300 px-3 py-2 rounded col-span-2">
                    <option>Vietnam</option>
                    <option>USA</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>

                  <input type="text" placeholder="First Name" className="border px-3 py-2 rounded" />
                  <input type="text" placeholder="Last Name" className="border px-3 py-2 rounded" />
                </div>

                <input type="text" placeholder="Address" className="border px-3 py-2 rounded w-full mb-3" />
                <input type="text" placeholder="Apartment, suite, etc." className="border px-3 py-2 rounded w-full mb-3" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <input type="text" placeholder="City" className="border px-3 py-2 rounded" />
                  <input type="text" placeholder="Postal Code" className="border px-3 py-2 rounded" />
                </div>
              </>
            )}

            {/* Pickup Option */}
            {deliveryOption === "pickup" && (
              <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm border">
                <strong>No stores available for pickup.</strong>
                <br />You can switch to <span className="underline cursor-pointer">Ship to address</span>.
              </div>
            )}

            <h3 className="Unbounded text-2xl mt-6 text-[var(--prim-color)]">Payment</h3>
            <p className="text-gray-500 mb-3">All transactions are secure & encrypted.</p>

            <div className="border border-gray-300 p-4 rounded-lg bg-gray-50">
              <input type="text" placeholder="Card Number" className="border px-3 py-2 rounded w-full mb-3" />

              <div className="grid grid-cols-2 gap-2 mb-3">
                <input type="text" placeholder="Expiration (MM/YY)" className="border px-3 py-2 rounded" />
                <input type="text" placeholder="Security Code" className="border px-3 py-2 rounded" />
              </div>

              <input type="text" placeholder="Name on card" className="border px-3 py-2 rounded w-full" />
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full mt-6 py-3 rounded-lg bg-[var(--prim-color)] hover:bg-green-700 text-white text-lg font-semibold shadow-md transition"
            >
              Place Order
            </button>
          </div>

          {/* RIGHT — ORDER SUMMARY */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100 sticky top-20">
              <h3 className="Unbounded text-2xl mb-4 text-[var(--prim-color)]">Order Summary</h3>

              <div className="space-y-4 max-h-72 overflow-y-auto">
                {cartItems.map(item => {
                  const price = parseFloat(item.price.replace(/[^0-9.-]+/g, "")) || 0;

                  return (
                    <div key={item.Id} className="flex items-center gap-4 border-b pb-3">
                      <img src={item.image} className="w-20 h-20 rounded object-contain border" />

                      <div className="flex-1">
                        <p className="Unbounded text-lg">{item.title}</p>
                        <p className="text-gray-500 text-sm">Qty: {item.qty}</p>
                      </div>

                      <p className="Unbounded font-semibold">
                        ${(price * (item.qty ?? 1)).toFixed(2)}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6">
                <div className="flex justify-between mb-2 text-lg">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between mb-2 text-lg">
                  <span>Estimated Tax (10%)</span>
                  <span>${estimatedTax.toFixed(2)}</span>
                </div>

                <div className="border-t pt-3 mt-3 flex justify-between text-xl font-bold text-[var(--prim-color)]">
                  <span>Total</span>
                  <span className="Unbounded">${finalTotal.toFixed(2)}</span>
                </div>

                <button
                  className="w-full mt-3 mb-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all"
                  onClick={() => handlePlaceOrder()}
                >
                  Place Order
                </button>

                <Link
                  href="/UI-Components/Pages/cart"
                  className="w-full text-center block py-2 bg-gray-200 rounded hover:bg-gray-400 transition-all"
                >
                  Back to Cart
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
