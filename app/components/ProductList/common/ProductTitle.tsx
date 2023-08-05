import React from 'react';

interface ProductTitleProps {
    name: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({ name }) => {
    return <h2 className='font-medium text-[14px] text-p-primary-600'>{name}</h2>;
};

export default ProductTitle;