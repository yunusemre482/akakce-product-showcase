import React from 'react'
import { LuArrowLeftRight } from 'react-icons/lu'

type Props = {
    imageUrl: string,
    alt: string
}

const ProductImage = ({
    imageUrl,
    alt
}: Props) => {
    return (
        <figure className='flex p-5 items-center justify-center bg-white min-h-[30rem] relative'>
            <img className="w-[clamp(10rem,16rem,60%)]" src={imageUrl} alt={alt} />

            <div className='absolute right-6 lg:right-10 top-auto border-2 border-gray-200 p-3 rounded-full '>
                <LuArrowLeftRight className="w-5 h-5 text-gray-400" />
            </div>
        </figure>
    )
}

export default ProductImage