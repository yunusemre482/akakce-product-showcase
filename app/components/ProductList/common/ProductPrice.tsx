import React from 'react';

interface ProductPriceProps {
    price: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ price }) => {
    const formattedPrice = formatPrice(price);
    const [beforeDecimal, afterDecimal] = formattedPrice.split(',');

    function formatPrice(price: number): string {
        // check if the price is a number or not
        if (!price) return '0,00';
        // format the price to 2 decimal places
        const formattedPrice = price
            .toFixed(2)
            .replace('.', '_')
            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            .replace('_', ',');
        return formattedPrice;
    }

    return (
        <span className='text-[1.25rem] font-medium text-[#333]'>
            {beforeDecimal}
            <i className='text-[1rem] text-inherit'>,{afterDecimal} TL</i>
        </span>
    );
};

export default ProductPrice;