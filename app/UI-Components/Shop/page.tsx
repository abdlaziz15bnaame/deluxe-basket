"use client";
import { useSearchParams } from "next/navigation";



import BestDeals from "@/app/JsonData/BestDeals.json";
import Arrivals from "@/app/JsonData/Arrivals.json";
import BestSale from "@/app/JsonData/BestSales.json";
import HotDeals from "@/app/JsonData/Hot-Deals.json";
import RganicFood from "@/app/JsonData/OrganicFood.json";
import Recommend from "@/app/JsonData/Recommend.json";
import ShortPrducts from "@/app/JsonData/ShortPrducts.json";
import Vendors from "@/app/JsonData/Vendors.json";
import ProductDetails from "./Products/ProductDetails/ProductDetails";
import Products from "./Products/Products";

const ShopPage = () => {
     const allProducts = [ 
        
            ...Arrivals,
            ...BestDeals,
            ...BestSale ,
            ...Vendors,
            ...Recommend,
            ...RganicFood,
            ...HotDeals,
            ...(ShortPrducts?.Featured || []),
            ...(ShortPrducts?.TopSelling || []),
            ...(ShortPrducts?.OnSale || []),
            ...(ShortPrducts?.TopRated || []),
            
        ];
        const SearchParams = useSearchParams();
        const productId = SearchParams.get("id");

  return (
    
      <div className="">
            {productId ? (
                <ProductDetails id={productId} products={allProducts}/> 
            ):(
                <Products/>
            )}
      </div>
  )
}

export default ShopPage
