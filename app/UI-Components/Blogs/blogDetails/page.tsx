import Link from "next/link";
import blogData from "@/app/JsonData/Blogs.json";

// تعريف نوع بيانات المقالة
type BlogType = {
  id: number;
  image: string;
  title: string;
  tag: string;
  pere: string;
  pere2: string;
  pere3: string;
  date: string;
  comment: string;
};

// Props القادمة من المسار الديناميكي
type Props = {
  params: { id: string };
};

const BlogDetailsPage = ({ params }: Props) => {
  // البحث عن المقال حسب المعرف في الرابط
  const blog = blogData.find((b) => b.id.toString() === params.id);

  if (!blog) return <div className="px-[8%] py-10">No Blog Found</div>;

  return (
    <>
      {/* رأس الصفحة */}
      <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="Unbounded text-3xl">
            Blog Details:
            <span className="text-xl font-normal hidden lg:inline ps-2">
              {blog.title}
            </span>
          </h2>
          <div className="flex text-xl">
            <Link href="/" className="Unbounded hover:text-green-600 duration-200">
              Home :
            </Link>
            <h2 className="Unbounded text-[var(--prim-color)]">&nbsp;Blog Details</h2>
          </div>
        </div>
      </div>

      {/* محتوى المقال */}
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5">
          <div className="w-full lg:w-1/1">
            <div className="blog-details">
              <img src={blog.image} alt={blog.title} className="rounded-md w-full mb-5" />
              <h3 className="text-2xl font-semibold mb-3">{blog.title}</h3>
              {/* دمج الفقرات الثلاثة */}
              <p className="text-gray-700">
                {blog.pere}
                <br />
                {blog.pere2}
                <br />
                {blog.pere3}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {blog.date} | {blog.comment} Comments
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsPage;
