import Image from "next/image"
import storeImg1 from "@/public/store-img1.png";
import storeImg2 from "@/public/store-img2.png";
import payment from "@/public/payment.png";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-white px-6 sm:px-10 lg:px-40 py-10 flex ">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 ">
          {/* Branding & Contact */}
          <div className="flex-1 flex flex-col gap-5">
            <Link href="/" className="text-3xl font-bold Merienda text-black">
              Deluxe <span className="text-[var(--prim-color)]">Basket</span>
            </Link>
            <p className="text-gray-700">We're Grocery Shop, an innovative team of food suppliers.</p>
            <div className="flex flex-col gap-3">
              <p className="flex items-center text-gray-800">
                <i className="bi bi-geo-alt-fill px-3 py-2 mr-3 text-white bg-[var(--prim-color)] rounded-full"></i>
                789 Inner Lane, Biyes Park, California
              </p>
              <p className="flex items-center text-gray-800">
                <i className="bi bi-telephone px-3 py-2 mr-3 text-white bg-[var(--prim-color)] rounded-full"></i>
                +212 987 654 432
              </p>
              <p className="flex items-center text-gray-800">
                <i className="bi bi-envelope px-3 py-2 mr-3 text-white bg-[var(--prim-color)] rounded-full"></i>
                Example@site.com
              </p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="flex-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Information */}
            <div className="flex flex-col">
              <h2 className="Unbounded text-2xl mb-3">Information</h2>
              {["Become a Vendor", "Affiliate Program", "Privacy Policy", "Our Suppliers", "Extended Plan", "Community"].map((item, i) => (
                <Link key={i} href="#" className="mb-2 text-gray-600 hover:text-[var(--prim-color)] transition-all duration-300">{item}</Link>
              ))}
            </div>

            {/* Support */}
            <div className="flex flex-col">
              <h2 className="Unbounded text-2xl mb-3">Support</h2>
              {["Help Center", "Contact Us", "Report Abuse", "Submit and Dispute", "Policies & Rules", "Online Shopping"].map((item, i) => (
                <Link key={i} href="#" className="mb-2 text-gray-600 hover:text-[var(--prim-color)] transition-all duration-300">{item}</Link>
              ))}
            </div>

            {/* Account */}
            <div className="flex flex-col">
              <h2 className="Unbounded text-2xl mb-3">Account</h2>
              {["My Account", "Order History", "Shopping Cart", "Compare", "Help Ticket", "Wishlist"].map((item, i) => (
                <Link key={i} href="#" className="mb-2 text-gray-600 hover:text-[var(--prim-color)] transition-all duration-300">{item}</Link>
              ))}
            </div>

            {/* Shop on the Go */}
            <div className="flex flex-col col-span-2 sm:col-span-1">
              <h2 className="Unbounded text-2xl mb-3">Shop on The Go</h2>
              <p className="text-gray-700 mb-3">Deluxe-basket App is available. Get it now</p>
              <div className="flex gap-3 mb-5">
                <Image src={storeImg1} alt="storeImg1" className="w-32 h-auto object-contain"/>
                <Image src={storeImg2} alt="storeImg2" className="w-32 h-auto object-contain"/>
              </div>
              <div className="flex gap-3">
                {[
                  "facebook", "twitter", "instagram", "linkedin", "youtube"
                ].map((platform, i) => (
                  <i key={i} className={`bi bi-${platform} px-3 py-2 rounded-full text-white bg-[var(--${platform}-color)] hover:text-[var(--prim-color)] cursor-pointer transition-all duration-300`}></i>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <div className="bg-[var(--prim-light)] px-6 sm:px-10 lg:px-16 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-lg">©2025. All Rights Reserved By <span className="font-semibold">BEN-AAME</span></p>
          <Image src={payment} alt="Payment methods" className="w-auto h-6"/>
        </div>
      </div>
    </>
  );
}

export default Footer;
