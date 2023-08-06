import React from 'react'
import { BsStarHalf, BsStarFill } from 'react-icons/bs';
import ProductRating from './ProductRating';

type Props = {
    badge: string,
    rating: number,
    mkName: string,
    productName: string
}

const ProductPriceDetails = ({
    mkName,
    productName,
    badge,
    rating
}: Props) => {

    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = hasHalfStar ? 5 - filledStars - 1 : 5 - filledStars;
    return (
        <div className="text-left bg-white px-4 py-2">
            <a className="text-[#3a6acb] text-base font-base text-left" href={`https://www.akakce.com/${mkName}.html`} title={mkName}>{mkName}</a>
            <h1 className="text-lg font-base mb-2 break-words block text-left">{productName}</h1>

            <div className="flex flex-row justify-between items-center mb-2 gap-4">
                <span className="inline-block px-4 py-2  bg-blue-500 text-white rounded-lg">{badge}</span>
                <ProductRating rating={rating} />
            </div>
        </div>
    )
}

export default ProductPriceDetails