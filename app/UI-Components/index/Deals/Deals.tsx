"use client";

import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Deal1 from "@/public/Deals-img1.png";
import Deal2 from "@/public/Deals-img2.png";

import products from "@/app/JsonData/BestDeals.json";
import toast from "react-hot-toast";
import Link from "next/link";

type DealItem = {
    image: StaticImageData;
    title: string;
    description: string;
    className?: string;
};

const dealsData: DealItem[] = [
    {
        image: Deal1,
        title: "Fresh Vegetables",
        description:
            "Shop fresh, healthy vegetables delivered daily. Taste the garden in every bite!",
    },
    {
        image: Deal2,
        title: "Daily Snacks",
        description:
            "Tasty daily snacks for every craving — fresh, fun, and ready to munch!",
        className: "deals-wrap2",
    },
    {
        image: Deal1,
        title: "Fresh Vegetables",
        description:
            "Shop fresh, healthy vegetables delivered daily. Taste the garden in every bite!",
    },
];

const Deals = () => {
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
        <div className="px-[8%] lg:px-[9%] py-10">
            <div className="title my-10 w-full flex flex-col lg:flex-row justify-between items-start gap-5">
                <h1 className="text-5xl Unbounded">Todays Best Deals.</h1>
            </div>

            {/* Swiper Section */}
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                loop={true}
                modules={[Autoplay]}
                autoplay={{ delay: 1500 }}
                speed={1500}
                breakpoints={{
                    1200: { slidesPerView: 2 },
                    991: { slidesPerView: 2 },
                    767: { slidesPerView: 2 },
                    575: { slidesPerView: 1 },
                    0: { slidesPerView: 2 },
                }}
            >
                {dealsData.map((deal, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={`deals-wrap px-5 py-6 rounded-2xl flex flex-col lg:flex-row justify-between items-start ${
                                deal.className || ""
                            }`}
                        >
                            <div className="w-full lg:w-1/2 deal-image">
                                <Image src={deal.image} alt={deal.title} />
                            </div>

                            <div className="w-full lg:w-1/2 deal-info">
                                <h2 className="Merienda font-bold text-4xl leading-11 whitespace-pre-line">
                                    {deal.title}
                                </h2>

                                <p className="my-2 text-gray-800 font-normal">
                                    {deal.description}
                                </p>

                                <button
                                    className="px-5 py-3 rounded-full text-white font-bold mt-5 bg-[var(--prim-color)] hover:bg-white hover:text-[var(--prim-color)]
                                    transition-all duration-300 cursor-pointer"
                                >
                                    Shop Now <i className="bi bi-arrow-right ps-2"></i>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Best Deals Product */}
            <div className="my-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 ">
                    {products.map((product) => (
                        <div
                            key={product.Id}
                            className="relative product-wrap border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-all
                            hover:border-[var(--prim-color)] cursor-pointer duration-300"
                        >
                            <div className="items-center justify-center w-full relative">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={180}
                                    height={180}
                                    unoptimized
                                    className="object-contain mt-4"
                                />

                                {/* ADD BUTTON FIXED */}
                                <div className="absolute top-0 right-0 translate-y-[-25px] pointer-events-none ">
                                        <button
                                            onClick={() => handleAddToCart(product)}
                                            className="pointer-events-auto px-4 py-2 font-semibold text-[var(--prim-color)] bg-[var(--prim-light)]
                                                rounded-full text-md hover:bg-[var(--prim-color)] hover:text-white cursor-pointer transition shadow-md"
                                                >
                                            Add <i className="bi bi-cart"></i>
                                        </button>
                                    </div>
                            </div>
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
                                        <span className="text-xl font-semibold">{product.price}</span>
                                        <span className="text-gray-500 text-sm">/ Qty</span>
                                    </div>

                                    <span className="flex items-center text-yellow-500 text-md">
                                        <i className="bi bi-star-fill me-1"></i> {product.review}
                                    </span>

                                    <h2 className="text-xl font-normal Unbounded my-2 hover:text-[var(--prim-color)] transition-all duration-300">
                                        {product.title}
                                    </h2>

                                    <h6 className="text-lg text-gray-500 flex items-center gap-1">
                                        <i className="bi bi-shop text-[var(--prim-color)]"></i> By
                                        Lucky Supermarket
                                    </h6>

                                    <h3 className="mt-2 Unbounded text-md text-gray-600">
                                        Sold : {product.sold}
                                    </h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Deals;
