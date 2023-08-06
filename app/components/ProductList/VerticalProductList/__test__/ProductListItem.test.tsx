import React from 'react';
import { render, screen } from '@testing-library/react';
import VerticalProductListItem from '../ProductListItem';
import '@testing-library/jest-dom';

test('renders the product name', () => {
    const productName = 'Example Product';
    render(
        <VerticalProductListItem
            code={1}
            price={100}
            imageUrl="/example-image.png"
            name={productName}
        />
    );

    const productNameElement = screen.getByText(productName);
    expect(productNameElement).toBeInTheDocument();
});

test('renders the product price', () => {
    const productPrice = 20137;
    render(
        <VerticalProductListItem
            code={1}
            price={productPrice}
            imageUrl="/example-image.png"
            name="Example Product"
        />
    );

    const productPriceElement = screen.getByText("20.137");
    expect(productPriceElement).toBeInTheDocument();
});

test('renders the product image', () => {
    const imageUrl = '/example-image.png';
    render(
        <VerticalProductListItem
            code={1}
            price={100}
            imageUrl={imageUrl}
            name="Example Product"
        />
    );

    const productImageElement = screen.getByAltText('Example Product');
    expect(productImageElement).toHaveAttribute('src', imageUrl);
});

test('should not render the DropRatio component when dropRatio prop is not provided', () => {
    render(
        <VerticalProductListItem
            code={1}
            price={100}
            imageUrl="/example-image.png"
            name="Example Product"
        />
    );

    const dropRatioElement = screen.queryByText(/Drop Ratio:/);
    expect(dropRatioElement).not.toBeInTheDocument();
});
