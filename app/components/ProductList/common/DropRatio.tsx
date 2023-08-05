import React from 'react'

type Props = {
    dropRatio?: number;
    productType: 'vertical' | 'horizontal';
}

const DropRatio = ({ dropRatio, productType }: Props) => {

    if (!dropRatio) return null;

    return (
        <div className={`absolute flex items-center justify-center top-3  ${productType === 'vertical' ? "left-2" : "left-32"}  bg-red-600 text-white font-semibold w-10 h-10 text-xs rounded-full `} > {
            `%${dropRatio}`
        }</div>
    )
}

export default DropRatio