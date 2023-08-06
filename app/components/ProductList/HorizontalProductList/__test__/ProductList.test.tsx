import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import ProductList from "../ProductList";
import '@testing-library/jest-dom';
/**
 * Test if the products are rendered correctly:
 */

jest.useFakeTimers();
test('should render the products correctly', () => {
    const products = [
        {
            code: 1,
            price: 100,
            imageUrl: '/example-image-1.png',
            name: 'Example Product 1',
        },
        {
            code: 2,
            price: 200,
            imageUrl: '/example-image-2.png',
            name: 'Example Product 2',
        },
    ];

    render(<ProductList products={products} />);

    const productElements = screen.getAllByTestId('horizontal-product-list-item');
    expect(productElements).toHaveLength(products.length);
});


/**
 * Test if the carousel automatically changes products every 5 seconds:
 */


test('should automatically change products every 5 seconds', () => {
    const products = [
        {
            "code": 125,
            "imageUrl": "https://cdn.akakce.com/x/apple/iphone-13-pro-max.jpg",
            "name": "iPhone 13 Pro Max 128 GB",
            "dropRatio": 3.3,
            "price": 30999,
            "countOfPrices": 133,
            "followCount": 521
        },
        {
            "code": 125,
            "imageUrl": "https://cdn.akakce.com/x/apple/iphone-13-pro-max.jpg",
            "name": "iPhone 13 Pro Max 128 GB",
            "dropRatio": 3.3,
            "price": 30999,
            "countOfPrices": 133,
            "followCount": 521
        },
    ];


    render(<ProductList products={products} />);

    const productElements = screen.getAllByTestId('horizontal-product-list-item');

    expect(productElements[0].classList.contains('pVisible'))
    expect(productElements[1].classList.contains('pHidden'))

    // Fast-forward time by 5 seconds
    act(() => {
        jest.advanceTimersByTime(5000);
    });

    // Check if products have changed
    expect(productElements[0].classList.contains('pHidden'))
    expect(productElements[1].classList.contains('pVisible'))

});

/**
 * Test if clicking on a dot changes the displayed product:
 */
// test('should change the displayed product when a dot is clicked', () => {
//     const products = [
//         {
//             code: 1,
//             price: 100,
//             imageUrl: '/example-image-1.png',
//             name: 'Example Product 1',
//             isVisible: true,
//         },
//         {
//             code: 2,
//             price: 200,
//             imageUrl: '/example-image-2.png',
//             name: 'Example Product 2',
//             isVisible: false,
//         },
//     ];

//     render(<ProductList products={products} />);

//     const productElements = screen.getAllByTestId('horizontal-product-list-item');
//     const dotElements = screen.getByTestId("dot-1")

//     // Check initial product opacity if isVisible is true 

//     expect(productElements[0].style.opacity).toBe("1");
//     expect(productElements[1].style.opacity).toBe("0");



//     console.log(dotElements)
//     act(() => {
//         fireEvent.click(dotElements);
//     });


//     // Check if products have changed
//     expect(productElements[0].style.opacity).toBe("0");
//     expect(productElements[1].style.opacity).toBe("1");

// });
