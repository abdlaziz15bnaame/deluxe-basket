"use client";

import { useSearchParams } from "next/navigation";

import BestDeals from "@/app/JsonData/BestDeals.json";
import Arrivals from "@/app/JsonData/Arrivals.json";
import BestSale from "@/app/JsonData/BestSales.json";
import HotDeals from "@/app/JsonData/Hot-Deals.json";
import RganicFood from "@/app/JsonData/OrganicFood.json";
import Recommend from "@/app/JsonData/Recommend.json";
import ShortPrducts from "@/app/JsonData/ShortPrducts.json";

import ProductDetails from "./Products/ProductDetails/ProductDetails";
import Products from "./Products/Products";

const ShopClient = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  const allProducts = [
    ...Arrivals,
    ...BestDeals,
    ...BestSale,
    ...Recommend,
    ...RganicFood,
    ...HotDeals,
    ...(ShortPrducts?.Featured || []),
    ...(ShortPrducts?.TopSelling || []),
    ...(ShortPrducts?.OnSale || []),
    ...(ShortPrducts?.TopRated || []),
  ];

  return (
    <div>
      {productId ? (
        <ProductDetails id={productId} products={allProducts} />
      ) : (
        <Products />
      )}
    </div>
  );
};

export default ShopClient;
