import React from 'react';
import { render, screen } from '@testing-library/react';
import VerticalProductList from '../ProductList';
import { IProductListItem } from '~/shared/types/ProductListItem.interface';

test('should render skeletons when the products prop is empty', () => {
    const emptyProducts: IProductListItem[] = [];

    render(<VerticalProductList products={emptyProducts} />);

    const skeletonElements = screen.getAllByTestId('skeleton');
    expect(skeletonElements).toHaveLength(6); // Assuming you have 6 Skeleton elements
});

test('should render products and skeletons when the products prop is a mix of items and empty', () => {

    const product: IProductListItem = {
        code: 1,
        price: 100,
        imageUrl: '/example-image-1.png',
        name: 'Example Product 1',
    }

    const products: IProductListItem[] = Array.from({ length: 6 }).map((_, index) => ({
        ...product,
        key: index,
    }));

    render(<VerticalProductList products={products} />);

    const productElements = screen.getAllByTestId('product-list-item');

    expect(productElements).toHaveLength(6);
});
