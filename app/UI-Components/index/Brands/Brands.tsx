"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Images
import brand1 from "@/public/brand-img1.png";
import brand2 from "@/public/brand-img2.png";
import brand3 from "@/public/brand-img3.png";
import brand4 from "@/public/brand-img4.png";
import brand5 from "@/public/brand-img5.png";
import brand6 from "@/public/brand-img6.png";
import brand7 from "@/public/brand-img7.png";
import brand8 from "@/public/brand-img8.png";

// Array
const brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
];

const Brands = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="bg-[var(--prim-light)] p-3 rounded-2xl">
          
          {/* -------- Title -------- */}
          <div className="title my-10 w-full flex justify-center items-center gap-5">
            <h1 className="text-4xl lg:text-5xl Unbounded text-center">
              Shop by Brands.
            </h1>
          </div>

          {/* -------- Brands Slider -------- */}
          <div className="w-full mt-5">
            <Swiper
              slidesPerView={7}
              spaceBetween={20}
              loop={true}
              modules={[Autoplay]}
              autoplay={{ delay: 1500 }}
              speed={1500}
              breakpoints={{
                1200: { slidesPerView: 7 },
                991: { slidesPerView: 4 },
                767: { slidesPerView: 3 },
                575: { slidesPerView: 3 },
                0: { slidesPerView: 3 },
              }}
            >
              {brands.map((brand, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={brand}
                    alt={`Brand ${index + 1}`}
                    width={140}
                    height={140}
                    className="
                      object-contain
                      cursor-pointer
                      hover:scale-90
                      transition-all
                      duration-300
                    "
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
