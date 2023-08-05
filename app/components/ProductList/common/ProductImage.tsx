import React from 'react';

interface ProductImageProps {
  imageUrl: string;
  name: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ imageUrl, name }) => {
  return (
    <figure className='mx-auto my-4 h-[140px] max-h-[10rem] '>
      <img
        className='bg-no-repeat bg-contain bg-center h-full bg-white'
        src={imageUrl}
        alt={name}
      />
    </figure>
  );
};

export default ProductImage;