"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

// All json Data
import BestDeals from "@/app/JsonData/BestDeals.json";
import Arrivals from "@/app/JsonData/Arrivals.json";
import BestSale from "@/app/JsonData/BestSales.json";
import HotDeals from "@/app/JsonData/Hot-Deals.json";
import OrganicFood from "@/app/JsonData/OrganicFood.json";
import Recommend from "@/app/JsonData/Recommend.json";
import ShortProducts from "@/app/JsonData/ShortPrducts.json";
import Vendors from "@/app/JsonData/Vendors.json";

interface ProductType {
  Id: string;
  title?: string;
  Name?: string;
  ProductImage?: string;
  image?: string;
  price?: string;
  Price?: string;
}

const MiddleNav = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Search state
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<ProductType[]>([]);

  // Normalizing product objects
  const normalize = (p: any) => ({
    Id: String(p.Id || p.id || crypto.randomUUID()),
    title: p.title || p.Name || p.ProductName || "",
    image: p.ProductImage || p.image || p.ProductImg || "",
    price: p.Price || p.price || "",
  });

  // Merge All Products
  const allProducts: ProductType[] = useMemo(
    () => [
      ...Arrivals.map(normalize),
      ...BestDeals.map(normalize),
      ...BestSale.map(normalize),
      ...Vendors.map(normalize),
      ...Recommend.map(normalize),
      ...OrganicFood.map(normalize),
      ...HotDeals.map(normalize),

      ...(ShortProducts?.Featured?.map(normalize) || []),
      ...(ShortProducts?.TopSelling?.map(normalize) || []),
      ...(ShortProducts?.OnSale?.map(normalize) || []),
      ...(ShortProducts?.TopRated?.map(normalize) || []),
    ],
    []
  );

  // Search filtering
  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const filtered = allProducts.filter((p) =>
      p.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filtered);
  }, [searchTerm, allProducts]);

  // Load cart & wishlist counts
  useEffect(() => {
    const loadCounts = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const wishlist = JSON.parse(localStorage.getItem("Wishlist") || "[]");

      setCartCount(new Set(cart.map((i: any) => i.Id)).size);
      setWishlistCount(new Set(wishlist.map((i: any) => i.Id)).size);
    };

    loadCounts();
    window.addEventListener("storageUpdate", loadCounts);
    return () => window.removeEventListener("storageUpdate", loadCounts);
  }, []);

  return (
    <div className="w-full bg-[var(--prim-light)] border-b border-gray-300 relative">
      <div className="flex items-center justify-between py-5 px-[8%] lg:px-[12%]">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold Merienda text-black"
        >
          Deluxe <span className="text-[var(--prim-color)]">Basket</span>
        </Link>

        {/* Search */}
        <div className="flex flex-1 ms-6 max-w-xl relative">
          <input
            type="text"
            placeholder="Search for a Product or Brand"
            className="flex-1 border px-3 py-2 rounded-s-lg border-gray-400 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button className="bg-[var(--prim-color)] text-white px-3 rounded-r cursor-pointer">
            <i className="bi bi-search"></i>
          </button>

          {/* Search Results */}
          {results.length > 0 && (
            <div className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-50 p-2 max-h-[400px] overflow-y-auto">
              {results.map((item, index) => (
                <Link
                  key={index}
                  href={{
                    pathname: "/UI-Components/Shop",
                    query: { id: item.Id },
                  }}
                  onClick={() => setSearchTerm("")}
                >
                  <div className="flex gap-3 items-center p-2 hover:bg-gray-100 rounded">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 object-cover rounded"
                    />

                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-gray-500 text-xs">${item.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Wishlist & Cart */}
        <div className="hidden lg:flex items-center space-x-6">

          {/* Wishlist */}
          <Link href="/UI-Components/Pages/wishlist" className="relative">
            <i className="bi bi-heart text-gray-600 text-xl hover:text-[var(--prim-color)] transition-all"></i>
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link href="/UI-Components/Pages/cart" className="relative">
            <i className="bi bi-cart text-gray-600 text-xl hover:text-[var(--prim-color)] transition-all"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

        </div>
      </div>
    </div>
  );
};

export default MiddleNav;
