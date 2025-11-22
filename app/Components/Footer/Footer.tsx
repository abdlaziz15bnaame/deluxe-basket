
import Image from "next/image"
import storeImg1 from "@/public/store-img1.png";
import storeImg2 from "@/public/store-img2.png";
import payment from "@/public/payment.png";
import Link from "next/link";

const Footer = () => {
    return (
    <>
        <div
        className="footer px-[8%] lg:px-[12%] py-4 pt-10">
            <div className="flex flex-col lg:flex-row gap-3 pb-5">
                <div className="flex flex-col">
                    <Link href="/" className="text-3xl font-bold Merienda text-black">
                    Deluxe <span className="text-[var(--prim-color)]">Basket</span>
                    </Link>
                    <p className="my-3 text-gray-700">We're Grocery Shop, an innovative team of food supliers.</p>
                    <div className="flex flex-col gap-y-6 mt-3">
                        <p className="text-lg"><i className="bi bi-geo-alt-fill px-3 py-2 mr-3
                            text-white bg-[var(--prim-color)] rounded-full"></i>789 Inner Lane, Biyes park, California</p>
                        <p className="text-lg"><i className="bi bi-telephone px-3 py-2 mr-3
                            text-white bg-[var(--prim-color)] rounded-full"></i>+00 123 456 789 or +00 987 654 012</p>
                        <p className="text-lg"><i className="bi bi-envelope px-3 py-2 mr-3
                            text-white bg-[var(--prim-color)] rounded-full"></i>Example@site.com</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12 lg:mt-0">
                    <div className="flex flex-col ps-2">
                        <h2 className="Unbounded text-2xl mb-3"> 
                            Information
                        </h2>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Become a Vendor</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Affiliate Program</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Privacy Policy</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Our Suppliers</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Extended Plan</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Community</Link>
                        
                    </div>
                    <div className="flex flex-col ps-2">
                        <h2 className="Unbounded text-2xl mb-3"> 
                            Support
                        </h2>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Help Center</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Contact Us</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Report Abuse</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Submit and Dispute</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Policies & Rules</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Online Shopping</Link>
                        
                    </div>
                    <div className="flex flex-col ps-2">
                        <h2 className="Unbounded text-2xl mb-3"> 
                            Account
                        </h2>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">My Account</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Order History</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Shoping Cart</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Compare</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Help Ticket</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Wishlist</Link>
                        
                    </div>
                    <div className="flex flex-col ps-2">
                        <h2 className="Unbounded text-2xl mb-3"> 
                            Groceries
                        </h2>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Dairy & Eggs</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Meat & Seafood</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Breakfast Food</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Household Supplies</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Bread & Bakery</Link>
                        <Link href="#" className="mb-2 text-gray-600 text-[-17px]font-[400] hover:text-[var(--prim-color)] 
                        hover:ps-2 transition-all duration-300">Pantry Staples</Link>
                        
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="Unbounded text-2xl mb-3">Shop on The Go</h2>
                    <p className="my-3 text-gray-700">SnackBasket App is available. Get it now</p>
                    <div className="flex">
                        <Image src={storeImg1} alt="storeImg1"/>
                        <Image src={storeImg2} alt="storeImg2"/>
                    </div>
                    <div className="social-media flex gap-3 mt-5">
                        <i className="bi bi-facebook px-3 py-2 rounded-full bg-blue-900 text-white hover:text-[var(--prim-color)] transition-all duration-300 cursor-pointer"></i>
                        <i className="bi bi-twitter px-3 py-2 rounded-full bg-blue-900 text-white hover:text-[var(--prim-color)] transition-all duration-300 cursor-pointer"></i>
                        <i className="bi bi-instagram px-3 py-2 rounded-full bg-red-400 text-white hover:text-[var(--prim-color)] transition-all duration-300 cursor-pointer"></i>
                        <i className="bi bi-linkedin px-3 py-2 rounded-full bg-blue-900 text-white hover:text-[var(--prim-color)] transition-all duration-300 cursor-pointer"></i>
                        <i className="bi bi-youtube px-3 py-2 rounded-full bg-red-600 text-white hover:text-[var(--prim-color)] transition-all duration-300 cursor-pointer"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="botton-footer px-[8%] lg:px-[12%] py-5 bg-[var(--prim-light)]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                <p className="text-lg">©2025. All Rights Reserved By <a className="font-semibold">BEN-AAME</a></p>
                <Image src={payment} alt="Payment"/>

            </div>
        </div>
    </>
    )
}

export default Footer
