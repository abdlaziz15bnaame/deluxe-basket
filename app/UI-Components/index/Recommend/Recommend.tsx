"use client";
import Image from "next/image";
import products from "@/app/JsonData/Recommend.json";
import toast from "react-hot-toast";
import Link from "next/link";

const Recommend = () => {
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
    <div className="px-[8%] lg:px-[12%] py-10">
      <div className="title my-10 w-full flex flex-col lg:flex-row justify-between items-start gap-5">
        <h1 className="text-5xl Unbounded">Recommended for you.</h1>
      </div>

      {/* Products */}

      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {products.map((product) => (
            <div
              key={product.Id}
              className="relative product-wrap border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-all
                            hover:border-[var(--prim-color)] cursor-pointer duration-300"
            >
              <div className=" flex items-center justify-center w-full relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={180}
                  height={180}
                  unoptimized
                  className="object-contain mt-4"
                />
                <div
                    onClick={()=> handleAddToWishlist(product)}
                    className="absolute top-0 left-0 w-[50px] h-[50px] bg-[var(--prim-light)] rounded-full p-2 shadow-md cursor-pointer 
                    hover:bg-[var(--prim-color)] transition-all duration-300 flex items-center justify-center">
                    <i className="bi bi-balloon-heart text-xl"></i>
                </div>
                <span className={`absolute off-product top-0 right-0 px-4 py-2 Merienda text-xs font-bold text-white rounded ${product.sale === "New" ? "bg-yellow-400" :
                    product.sale.includes ("%") ? "bg-red-500" : "opacity-0"}`}
                >
                    {product.sale}
                </span>
              </div>
                {/* ADD BUTTON FIXED */}
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
              <button
                onClick={() => handleAddToCart (product)}
                className=" w-full px-4 py-2 my-2  text-lg font-semibold text-[var(--prim-color)] bg-[var(--prim-light)] rounded-md text-md hover:bg-[var(--prim-color)] hover:text-white cursor-pointer transition "
              >
                Add To Cart <i className="bi bi-cart"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommend;
