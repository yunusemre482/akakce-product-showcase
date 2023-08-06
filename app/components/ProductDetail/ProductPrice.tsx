import React from 'react'
import { formatPrice } from '../../helpers/priceHelper'

type Props = {
    price: number | null,
    countOfPrices: number
}

const ProductPrice = ({ price, countOfPrices }: Props) => {
    const [beforeDecimal, afterDecimal] = formatPrice(price);

    return (
        <div className='flex flex-col w-full text-center bg-white gap-2'>
            <span className='font-semibold text-sm text-p-price' data-testid="count-of-prices">
                {countOfPrices} satıcı içerisinden kargo dahil en uygun fiyat seçeneği
            </span>

            <span className=' text-2xl font-semibold text-p-price  ' data-testid="p_price_base">
                {beforeDecimal}
                <i className='text-[1rem] text-inherit font-normal' data-testid="p_price_decimal">,{afterDecimal} TL</i>
            </span>
        </div>
    )
}

export default ProductPrice