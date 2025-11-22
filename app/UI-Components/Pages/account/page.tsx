
import Link from "next/link";

const Account = () => {
  return (
    <>
        <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="Unbounded text-3xl ">Account</h2>
          <div className="flex text-xl">
            <Link
              href="/"
              className="Unbounded hover:text-green-600 duration-200"
            >
              Home :
            </Link>
            <span className="Unbounded text-[var(--prim-color)]">&nbsp;Account</span>
          </div>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] py-10">
            <div className="flex flex-col lg:flex-row justify-between gap-5">
                {/* Login */}
                <div className="w-full lg:w-1/2 gap-3 border border-gray-300 px-5 py-8 rounded-lg hover:border-[var(--prim-color)] cursor-pointer">
                    <h2 className="Unbounded text-xl mb-10">Login</h2>
                    <form>
                        <div className="flex flex-col mb-5">
                            <label className="Unbounded  mb-2">Username or email address*</label>
                            <input 
                                    type="text"
                                    placeholder="First Name"
                                    className="rounded-md border-md border border-gray-300 p-3 focus:outline-none focus:border-[var(--prim-color)]"
                                    />
                        </div>
                        <div className="flex flex-col mb-5">
                            <label className="Unbounded  mb-2">Password!</label>
                            <input 
                                    type="Password"
                                    placeholder="Password"
                                    className="rounded-md border-md border border-gray-300 p-3 focus:outline-none focus:border-[var(--prim-color)]"
                                    />
                        </div>
                        <div className="flex items-center gap-5 mb-8">
                            <button className="px-8 py-3 rounded-md text-white Unbounded bg-[var(--prim-color)] cursor-pointer hover:bg-green-500">
                                Login
                            </button>
                            <div className="flex">
                                <label className="flex items-center text-xl cursor-pointer ">
                                    <input
                                        type="checkbox" className="w-5 h-5 mr-2"
                                    />
                                        Remember me
                                </label>

                            </div>
                        </div>
                    </form>
                </div>
                {/* Register */}
                <div className="w-full lg:w-1/2 gap-3 border border-gray-300 px-5 py-8 rounded-lg hover:border-[var(--prim-color)] cursor-pointer">
                    <h2 className="Unbounded text-xl mb-10">Register</h2>
                    <form>
                        <div className="flex flex-col mb-5">
                            <label className="Unbounded  mb-2">Username* </label>
                            <input 
                                    type="text"
                                    placeholder="Username "
                                    className="rounded-md border-md border border-gray-300 p-3 focus:outline-none focus:border-[var(--prim-color)]"
                                    />
                        </div>
                        <div className="flex flex-col mb-5">
                            <label className="Unbounded  mb-2">Email address* </label>
                            <input 
                                    type="text"
                                    placeholder="Email address"
                                    className="rounded-md border-md border border-gray-300 p-3 focus:outline-none focus:border-[var(--prim-color)]"
                                    />
                        </div>
                        <div className="flex flex-col mb-5">
                            <label className="Unbounded  mb-2">Password*</label>
                            <input 
                                    type="Password"
                                    placeholder="Password"
                                    className="rounded-md border-md border border-gray-300 p-3 focus:outline-none focus:border-[var(--prim-color)]"
                                    />
                        </div>
                        <div className="flex items-center gap-5 mb-8">
                            <button className="px-8 py-3 rounded-md text-white Unbounded bg-[var(--prim-color)] cursor-pointer hover:bg-green-500">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="px-[8%] lg:px-[12%] py-5">
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5'>
                <div className='flex justify-center items-center  gap-3 px-3 py-5 rounded-lg bg-[var(--prim-light)]'>
                    <i className='bi bi-truck text-2xl rounded-full bg-[var(--prim-color)] px-3 py-2 text-white'></i>
                    <div className='flex flex-col'>
                        <h2 className='font-semibold Unbounded'> 
                                Free Shipping
                        </h2>
                        <p className='text-gray-700'>Free shipping all over the US</p>
                    </div>
                </div>
                <div className='flex justify-center items-center  gap-3 px-3 py-5 rounded-lg bg-[var(--prim-light)]'>
                    <i className='bi bi-heart-pulse text-2xl rounded-full bg-[var(--prim-color)] px-3 py-2 text-white'></i>
                    <div className='flex flex-col'>
                        <h2 className='font-semibold Unbounded'> 
                                100% Satisfaction
                        </h2>
                        <p className='text-gray-700'>Free shipping all over the US</p>
                    </div>
                </div>
                <div className='flex justify-center items-center  gap-3 px-3 py-5 rounded-lg bg-[var(--prim-light)]'>
                    <i className='bi bi-credit-card-2-front text-2xl rounded-full bg-[var(--prim-color)] px-3 py-2 text-white'></i>
                    <div className='flex flex-col'>
                        <h2 className='font-semibold Unbounded'> 
                                Secure Payments
                        </h2>
                        <p className='text-gray-700'>Free shipping all over the US</p>
                    </div>
                </div>
                <div className='flex justify-center items-center  gap-3 px-3 py-5 rounded-lg bg-[var(--prim-light)]'>
                    <i className='bi bi-chat-square-text text-2xl rounded-full bg-[var(--prim-color)] px-3 py-2 text-white'></i>
                    <div className='flex flex-col'>
                        <h2 className='font-semibold Unbounded'> 
                                24/7 Support
                        </h2>
                        <p className='text-gray-700'>Free shipping all over the US</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Account
