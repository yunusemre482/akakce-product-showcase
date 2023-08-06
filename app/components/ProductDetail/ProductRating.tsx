import React from 'react'
import { BsStarHalf, BsStarFill } from 'react-icons/bs';
type Props = {
    rating: number,

}

const Rating = ({ rating }: Props) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = hasHalfStar ? 5 - filledStars - 1 : 5 - filledStars;

    return (

        <div className='flex flex-row justify-center items-center gap-2'>
            <div>
                {
                    [...Array(filledStars)].map((_, index) => (
                        <BsStarFill key={index} className="inline-block text-yellow-500 p_start_full" data-testid={`p_star_full-${index}`} />
                    ))
                }
                {hasHalfStar && <BsStarHalf className="inline-block text-yellow-500 p_start_half" data-testid="p_start_half" />}
                {
                    [...Array(emptyStars)].map((_, index) => (
                        <BsStarFill key={index} className="inline-block text-gray-300 p_start_empty" data-testid={`p_star_empty-${index}`} />
                    ))
                }

            </div>
            <span className="text-yellow-500 font-semibold">{rating}</span>
        </div>
    )
}

export default Rating