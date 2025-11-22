"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiHome, FiShoppingBag, FiFileText, FiBookOpen, FiPhone } from "react-icons/fi";
// ==========================
// Navigation Links
// ==========================
type NavLink = {
  label: string;
  href: string;
  icon?: any;
  dropdown?: { label: string; href: string }[];
};
const navLinks: NavLink[] = [
  { label: "Home", href: "/", icon: FiHome },
  {
    label: "Shop",
    href: "/UI-Components/Shop",
    icon: FiShoppingBag,
    dropdown: [
      { label: "Shop", href: "/UI-Components/Shop" },
      { label: "Shop Details", href: "/UI-Components/Shop" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    icon: FiFileText,
    dropdown: [
      { label: "Cart", href: "/UI-Components/Pages/cart" },
      { label: "Wishlist", href: "/UI-Components/Pages/wishlist" },
      { label: "Checkout", href: "/UI-Components/Pages/Checkout" },
      { label: "Account", href: "/UI-Components/Pages/account" },
    ],
  },
  {
    label: "Blog",
    href: "#",
    icon: FiBookOpen,
    dropdown: [
      { label: "Blog", href: "/UI-Components/Blogs" },
      { label: "Blog Details", href: "/UI-Components/blog" },
    ],
  },
  { label: "Contact Us", href: "/UI-Components/Pages/contact", icon: FiPhone },
];
// ==========================
// Component
// ==========================
export default function BottomNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const [isFixed, setIsFixed] = useState(false);
  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const [cartCount , setCartCount] = useState(0);
    const [wishlistCount , setWishlistCount] = useState(0);
        useEffect(() => {
            const loadCounts = () => {
                const cart = JSON.parse(localStorage.getItem ("cart") || "[]");
                const wishlist = JSON.parse(localStorage.getItem ("wishlist") || "[]");

                const uniqueCart = new Set(cart.map((item: any) => item.Id));
                const uniqueWishlist = new Set(cart.map((item: any) => item.Id));

                setCartCount(uniqueCart.size);
                setWishlistCount(uniqueWishlist.size);
            };

            loadCounts();
            window.addEventListener("storageUpdate", loadCounts);
            return () => window.removeEventListener("storageUpdate", loadCounts);
        }, []);
      


  // Close menu when clicking a link
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div
      className={`w-full bg-white shadow-sm transition duration-500 ${
        isFixed ? "fixed top-0 left-0 z-50 fixed-nav" : ""
      }`}
    >
      <div className="flex items-center justify-between px-[8%] lg:px-[12%] text-gray-700">
        {/* Logo (Desktop) */}
        <Link
          href="/"
          className={`text-3xl font-bold Merienda text-black hidden ${
            isFixed ? "lg:flex" : "hidden"
          }`}
        >
          Deluxe <span className="text-[var(--prim-color)]">Basket</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 menu-link relative">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative group z-[99999]">
                <Link href={link.href} className="flex items-center gap-1">
                  {link.label} <i className="ri-arrow-down-s-line"></i>
                </Link>

                {/* Dropdown */}
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl p-2 border border-gray-100 rounded-lg min-w-[150px] animate-fadeIn">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 rounded-md hover:bg-[var(--prim-light)] transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Phone Button */}
        <button className="nav-button cursor-pointer font-bold bg-[var(--prim-color)] text-white p-3 hidden lg:flex">
          <i className="bi bi-telephone pe-2 text-xl"></i>+212 676 541 353
        </button>

        {/* Mobile Nav Header */}
        <div className="lg:hidden flex items-center justify-between gap-4 w-full">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl focus-outline-none"
          >
            <i className="ri-menu-line"></i>
          </button>
          <div className="hidden lg:flex items-center  space-x-6 ">
                    {/* Wishlist */}
                    <button className="relative cursor-pointer">
                    <Link href="/UI-Components/Pages/wishlist">
                    <i className=" bi bi-heart text-gray-600 text-xl hover:text-[var(--prim-color)] transition-all"></i>
                    {wishlistCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-5 h-5 flex items-center 
                      justify-center rounded-full "
                      >
                        {wishlistCount}
                    </span>
                      )}
                    </Link>
                      </button>
                    {/* Cart*/}
                          <button className="relative cursor-pointer">
                    <Link href="/UI-Components/Pages/cart">
                    <i className=" bi bi-cart text-gray-600 text-xl hover:text-[var(--prim-color)] transition-all"></i>
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-5 h-5 flex items-center 
                      justify-center rounded-full"
                      >
                        {cartCount}
                    </span>
                          )}
                    </Link>
                          </button>
                </div>
          <button className="nav-button cursor-pointer font-bold bg-[var(--prim-color)] text-white p-3 ">
            <i className="bi bi-telephone pe-2 text-xl"></i>+212 676 541 353
          </button>
        </div>
      </div>

      {/* ====================== */}
      {/* Mobile Menu */}
      {/* ====================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md overflow-hidden animate-slideDown">
          <nav className="flex flex-col px-[4%] py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                {/* Button */}
                {link.dropdown ? (
                  <>
                    <button
                      className="flex justify-between items-center w-full px-2 py-3 font-medium rounded-md bg-gray-50"
                      onClick={() => toggleDropdown(link.label)}
                    >
                      <span className="flex items-center gap-2">
                        {link.icon && <link.icon size={18} />} {link.label}
                      </span>
                      <i
                        className={`ri-arrow-down-s-line transition-transform ${
                            openDropdowns[link.label] ? "rotate-180" : ""
                        }`}
                        ></i>
                    </button>

                    {/* Dropdown */}
                    <div
                        className={`overflow-hidden transition-all duration-300 bg-[var(--prim-light)] rounded-md ${
                        openDropdowns[link.label] ? "max-h-96 p-2" : "max-h-0 p-0"
                        }`}
                    >
                        {link.dropdown.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={closeMenu}
                            className="block px-4 py-2 bg-white rounded-md hover:bg-gray-100 mt-1"
                        >
                            {item.label}
                        </Link>
                        ))}
                    </div>
                    </>
                ) : (
                    <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center gap-2 px-4 py-3 font-medium rounded-md hover:bg-gray-100"
                    >
                    {link.icon && <link.icon size={18} />} {link.label}
                    </Link>
                )}
                </div>
            ))}
            </nav>
        </div>
        )}
    </div>
    );
}