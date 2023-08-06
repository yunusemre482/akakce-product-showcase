import React from 'react';
import { render, screen } from '@testing-library/react';
import { motion } from 'framer-motion'; // Import motion 
import HorizontalProductListItem from '../ProductListItem';
import '@testing-library/jest-dom'; // So we can use toBeInTheDocument assertion
test('should render the component when isVisible is true', () => {
    const product = {
        index: 0,
        code: 1,
        price: 100,
        imageUrl: '/example-image.png',
        name: 'Example Product',
        isVisible: true,
    };

    render(<HorizontalProductListItem {...product} />);

    const productElement = screen.getByTestId('horizontal-product-list-item');
    expect(productElement).toBeInTheDocument();
});

/**
 * Test if the component does not render when isVisible is false
 */
test('should not render the component when isVisible is false', () => {
    const product = {
        index: 0,
        code: 1,
        price: 100,
        imageUrl: '/example-image.png',
        name: 'Example Product',
        isVisible: false,
    };

    render(<HorizontalProductListItem {...product} />);

    const productElement = screen.getAllByTestId('horizontal-product-list-item');

    // expect to have pHidden class
    expect(productElement[0].classList.contains('pHidden'));
});


// Mock the motion module
jest.mock('framer-motion', () => ({
    motion: {
        li: ({ initial, animate, transition, ...rest }: any) => (
            <div data-testid="motion-li" {...rest} />
        ),
    },
}));

test('should not render the component when isVisible is false', () => {
    const product = {
        index: 0,
        code: 1,
        price: 100,
        imageUrl: '/example-image.png',
        name: 'Example Product',
        isVisible: false,
    };

    render(<HorizontalProductListItem {...product} />);

    const productElement = screen.queryByTestId('motion-li');
    expect(productElement).not.toBeInTheDocument();
});