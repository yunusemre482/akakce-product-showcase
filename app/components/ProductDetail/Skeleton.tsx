import React from "react";


const ProductDetailsSkeleton = () => {
    return (
        <div className="flex  flex-col w-full md:w-3/4 lg:w-[clamp(30rem,40rem,100%)]  shadow  p-5 bg-slate-100 min-h-full h-fit">
            <div className="animate-pulse flex flex-col bg-white p-4 gap-4">
                <div className="h-3 w-32 rounded-full bg-gray-300"></div>
                <div className="h-3 w-64 rounded-full bg-gray-300"></div>
                <div className="flex flex-row justify-between items-center mb-2 gap-4 ">
                    <span className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg h-6 w-36"></span>
                    <div className="flex flex-row justify-center items-center gap-1">
                        <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                        <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                        <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                        <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                        <div className="h-3 w-3 rounded-full bg-gray-300"></div>

                    </div>
                </div>
            </div>
            <div className='w-full h-[2px] rounded-md bg-[#fdfdfd] my-4'></div>
            <div className="flex p-5 items-center justify-center bg-white min-h-[30rem] relative ">
                <div className="flex items-center justify-center h-96  w-[clamp(10rem,16rem,80%)] mx-auto mb-6 bg-gray-300 rounded ">
                    <svg className="w-10 h-20 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                </div>
            </div>
            <div className='w-full h-[2px] rounded-md bg-[#fdfdfd] my-4'></div>

            <div role="status" className="flex flex-col p-8 bg-white rounded shadow animate-pulse  gap-5">

                <div className="flex flex-row justify-center gap-4 w-full">
                    <div className="bg-gray-300 rounded-md w-32 h-10"></div>
                    <div className="bg-gray-300 rounded-md w-32 h-10"></div>
                    <div className="bg-gray-300 rounded-md w-32 h-10"></div>
                </div>

                <div>
                    <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                </div>
                <div>
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full "></div>
                </div>

            </div>

        </div>
    );
};

export default ProductDetailsSkeleton;