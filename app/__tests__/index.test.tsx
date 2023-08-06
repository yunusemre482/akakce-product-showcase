import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from '../routes/_index';
import '@testing-library/jest-dom'; // So we can use toBeInTheDocument assertion

it('should show welcome message', () => {
    render(<Index />);
    expect(
        screen.getByRole('heading', { name: /welcome to remix/i }),
    ).toBeInTheDocument();
});