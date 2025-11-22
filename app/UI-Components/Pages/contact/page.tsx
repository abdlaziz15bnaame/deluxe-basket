import Link from "next/link"


const Contact = () => {
    return (
    <>
        <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="Unbounded text-3xl ">Contact</h2>
          <div className="flex text-xl">
            <Link
              href="/"
              className="Unbounded hover:text-green-600 duration-200"
            >
              Home :
            </Link>
            <span className="Unbounded text-[var(--prim-color)]">&nbsp;Contact</span>
          </div>
        </div>
      </div>
       <div className="px-[8%] lg:px-[12%] py-10">
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            {/* Login */}
            <div className="w-full lg:w-1/1 gap-3 border border-gray-300 px-5 rounded-lg hover: border-[var(--prim-color)] cursor-pointer">
                <h2
                    className="Unbounded text-xl mb-10 mt-5">
                    Make Custom Request
                </h2>
                <form>
                        <div className="flex flex-col mb-5">
                            <label className="Unbounded  mb-2">Phone Number</label>
                            <input 
                                    type="number"
                                    placeholder="First Name"
                                    className="rounded-md border-md border border-gray-300 p-3 focus:outline-none focus:border-[var(--prim-color)]"
                                    />
                        </div>
                        <div className="flex flex-col mb-5">
                            <label className="Unbounded  mb-2">Subject</label>
                            <input 
                                    type="text"
                                    placeholder="Subject"
                                    className="rounded-md border-md border border-gray-300 p-3 focus:outline-none focus:border-[var(--prim-color)]"
                                    />
                        </div>
                        <div className="flex items-center gap-5 mb-8">
                            <button className="px-8 py-3 rounded-md text-white Unbounded bg-[var(--prim-color)] cursor-pointer hover:bg-green-500">
                                Message
                            </button>
                            <div className="flex">
                                <label className="flex items-center text-xl cursor-pointer ">
                                    <input
                                        type="checkbox" className="w-5 h-5 mr-2"
                                    />
                                        Send Message
                                </label>

                            </div>
                        </div>
                    </form>
            </div>
          </div>

       </div>
    </>
    )
}

export default Contact;
