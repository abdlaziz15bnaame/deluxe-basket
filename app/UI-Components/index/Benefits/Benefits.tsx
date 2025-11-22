import React from 'react'

const Benefits = () => {
    return (
    <>
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

export default Benefits
