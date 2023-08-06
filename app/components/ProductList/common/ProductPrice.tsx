import React from 'react';
import { formatPrice } from '../../../helpers/priceHelper';
interface ProductPriceProps {
    price: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ price }) => {

    const [beforeDecimal, afterDecimal] = formatPrice(price);

    return (
        <span className='text-[1.25rem] font-medium text-[#333]'>
            {beforeDecimal}
            <i className='text-[1rem] text-inherit font-normal'>,{afterDecimal} TL</i>
        </span>
    );
};

export default ProductPrice;