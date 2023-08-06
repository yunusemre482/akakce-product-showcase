import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Options from '../ProductStorageOptions';
import '@testing-library/jest-dom';
const storageOptions = ['128 GB', '256 GB', '512 GB'];


test('selects the correct option when clicked', () => {
    const storageOptions = ['128 GB', '256 GB', '512 GB'];
    const { getByText } = render(<Options storageOptions={storageOptions} />);

    // Initial state, the first option should be selected
    const initialSelectedOption = getByText('128 GB');
    expect(initialSelectedOption).toHaveClass('border-neutral-400');

    // Click on the second option, the first option should be unselected, and the second one should be selected
    const secondOption = getByText('256 GB');
    fireEvent.click(secondOption);
    expect(initialSelectedOption).not.toHaveClass('border-neutral-400');
    expect(secondOption).toHaveClass('border-neutral-400');

    // Click on the third option, the second option should be unselected, and the third one should be selected
    const thirdOption = getByText('512 GB');
    fireEvent.click(thirdOption);
    expect(secondOption).not.toHaveClass('border-neutral-400');
    expect(thirdOption).toHaveClass('border-neutral-400');
});



