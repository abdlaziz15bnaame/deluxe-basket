

import Image from "next/image";
import deliveryMan from "@/public/delivery-man.png";
import specialSnacks from "@/public/special-snacks-img.png";
const Banner = () => {
    return (
    <>
        <div className="px-[8%] lg:px-[12%] pb-10">
            <div className="banner h-[300px] relative rounded-2xl flex justify-center items-center">
                <Image
                    src={deliveryMan} alt="deliveryMan" className="banner-img1 absolute -bottom-10 left-5"/>
                    <div className="flex flex-col items-center">
                        <h1 className="text-white text-4xl leading-15 text-center Merienda">
                            We Delivery on Next Day from 10:00 <br /> AM to 08:00 PM
                        </h1>
                        <p className="text-white"> For orders starts from $100</p>
                        <button className="px-8 py-3 my-3 text-lg font-semibold text-[var(--prim-color)] bg-[var(--prim-ligh)] 
                        rounded-md text-md bg-white hover:bg-white hover:text-[var(--prim-color)] cursor-pointer transition-all duration-300">
                            Shop New <i className="bi bi-cart "></i>
                        </button>
                    </div>
                        <Image src={specialSnacks} alt="specialSnacks" className="banner-img2 w-[30%] absolute top-10 right-0"/>
                        
            </div>
        </div>
    </>
    )
}

export default Banner
