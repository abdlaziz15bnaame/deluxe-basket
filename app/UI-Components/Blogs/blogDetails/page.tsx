"use client";


import Link from "next/link";

import { useSearchParams } from "next/navigation";
import blogData from "@/app/JsonData/Blogs.json";


const BlogDetails = () => {
    const searchParams =useSearchParams ();
    const id = searchParams.get("id");
    const blog = blogData.find((b) => b.id.toString() === id);

    if(!blog) return <div>No Blog Found</div>

    return (
    <>
        <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="Unbounded text-3xl ">
            Blog Details:
            <span className="text-xl font-normal hidden lg:block ps-2">
                {blog.title}
            </span>
            </h2>
          <div className="flex text-xl">
            <Link
              href="/"
              className="Unbounded hover:text-green-600 duration-200"
            >
              Home :
            </Link>
            <h2 className="Unbounded text-[var(--prim-color)]">&nbsp;Blog Details</h2>
          </div>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5">
            {/* Blog Details */}
            <div className="w-full lg:w-1/1 flex lg:stiky top-22 left-0 h[100%]">
                <div className="blog-detatils">
                    <img
                    src={blog.image} alt={blog.title} 
                    className="rounded-md w-full mb-5"
                    />
                    <span>
                        
                    </span>

                </div>
            </div>
        </div>
      </div>
    </>
    )
}

export default BlogDetails
