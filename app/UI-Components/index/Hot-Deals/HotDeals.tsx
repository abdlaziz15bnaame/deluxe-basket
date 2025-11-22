"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import products from "@/app/JsonData/Hot-Deals.json";
import Link from "next/link";
import hotDealBanner from "@/public/hot-deals-img.png";

import toast from "react-hot-toast";

const HotDeals = () => {
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
  const handleAddToWishlist = (product: any) => {
    let Wishlist = JSON.parse(localStorage.getItem("Wishlist") || "[]");

    const existingProduct = Wishlist.find(
      (item: any) => item.Id === product.Id
    );

    if (existingProduct) {
      toast(`${product.title} is already in the Wishlist!`, {
        icon: "🤷‍♂️",
        style: {
          border: "1px solid #facc15",
          padding: "16px",
          color: "#333",
          background: "#fff9c4",
        },
      });
    } else {
      Wishlist.push({ ...product, qty: 1 });
      localStorage.setItem("Wishlist", JSON.stringify(Wishlist));

      window.dispatchEvent(new Event("storageUpdate"));

      toast.success(`${product.title} added to Wishlist!`);
    }
  };
  return (
    <>
      <div className="px-[8%] lg:px-[12%] pb-10">
        <div className="title my-10 w-full flex flex-col lg:flex-row  justify-between items-start gap-5">
          <h1 className="text-5xl Unbounded">Today's Hpt Deals.</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-5 ">
          <div className="w-full lg:w-1/3 p-10 rounded-2xl hot-deal-banner flex flex-col justify-center items-center  ">
            <Image src={hotDealBanner} alt="Hot Deal Banner" />
            <h1 className="text-4xl  text-white Merienda my-5">
              {" "}
              Fresh Vegetable
            </h1>
            <p className="text-center text-white font-semibold mb-3">
              Get the freshest vegetables delivered to your doorstep. Healthy,
              organic, and full of flavor!
            </p>
            <button
              onClick={() => handleAddToCart(products)}
              className=" w-full px-4 py-2 my-2  text-lg font-semibold text-[var(--prim-color)] bg-[var(--prim-light)] rounded-md text-md hover:bg-[var(--prim-color)] hover:text-white cursor-pointer transition "
            >
              Shop Now <i className="bi bi-cart"></i>
            </button>
          </div>
          <div className="w-full lg:w-2/3 ">
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                1200: { slidesPerView: 3 },
                991: { slidesPerView: 2.5 },
                575: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.Id}>
                  <div
                    key={product.Id}
                    className="product-wrap border-gray-300 rounded-lg p-4 
                            bg-white shadow-sm hover:shadow-md transition-all hover:border-[var(--prim-color)] border cursor-pointer duration-300"
                  >
                    <div className="relative flex justify-center items-center w-full h-50 ">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={180}
                        height={180}
                        className="object-contain mt-10{"
                      />
                      <div
                        onClick={() => handleAddToWishlist(product)}
                        className="absolute top-0 left-0 w-[50px] h-[50px] bg-[var(--prim-light)] rounded-full p-2 shadow-md cursor-pointer 
                                    hover:bg-[var(--prim-color)] transition-all duration-300 flex items-center justify-center"
                      >
                        <i className="bi bi-balloon-heart text-xl"></i>
                      </div>
                      <span
                        className={`absolute off-product top-0 right-0 px-4 py-2 Merienda text-xs font-bold text-white rounded ${
                          product.sale === "New"
                            ? "bg-yellow-400"
                            : product.sale.includes("%")
                            ? "bg-red-500"
                            : "opacity-0"
                        }`}
                      >
                        {product.sale}
                      </span>
                    </div>
                    <div className="space-y-1 mt-5 product-info">
                      <Link
                        href={{
                          pathname: "/UI-Components/Shop",
                          query: { id: product.Id },
                        }}
                      >
                        <div className="space-y-1 mt-5 product-info">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500 text-sm line-through">
                              {product.lessprice}
                            </span>
                            <span className="text-xl font-semibold">
                              {product.price}
                            </span>
                            <span className="text-gray-500 text-sm">/ Qty</span>
                          </div>

                          <span className="flex items-center text-yellow-500 text-md">
                            <i className="bi bi-star-fill me-1"></i>{" "}
                            {product.review}
                          </span>

                          <h2 className="text-xl font-normal Unbounded my-2 hover:text-[var(--prim-color)] transition-all duration-300">
                            {product.title}
                          </h2>

                          <h6 className="text-lg text-gray-500 flex items-center gap-1">
                            <i className="bi bi-shop text-[var(--prim-color)]"></i>{" "}
                            By Lucky Supermarket
                          </h6>

                          <h3 className="mt-2 Unbounded text-md text-gray-600">
                            Sold : {product.sold}
                          </h3>
                        </div>
                      </Link>
                      <button
                onClick={() => handleAddToCart (product)}
                className=" w-full px-4 py-2 my-2  text-lg font-semibold text-[var(--prim-color)] bg-[var(--prim-light)] rounded-md text-md hover:bg-[var(--prim-color)] hover:text-white cursor-pointer transition "
              >
                Add To Cart <i className="bi bi-cart"></i>
              </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div> 
        </div>
      </div>
    </>
  );
};

export default HotDeals;
