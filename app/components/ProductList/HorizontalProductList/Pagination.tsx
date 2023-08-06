import React from 'react';

interface PaginationDotsProps {
  countOfDots: number;
  activeDotIndex: number;
  onDotClick: (index: number) => void;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({
  countOfDots,
  activeDotIndex,
  onDotClick,
}) => {
  return (
    <div className={`absolute bottom-3 left-[calc(50%-20px)]`} data-testid="pagination-container">
      {[...Array(countOfDots)].map((_, index) => (
        <span

          key={index}
          data-testid={`dot-${index}`}
          className={`w-2 h-2 rounded-full inline-block mx-1 cursor-pointer ${activeDotIndex === index ? 'bg-p-primary-600' : 'bg-p-primary-200'
            }`}
          onClick={() => onDotClick(index)}
        ></span>
      ))}
    </div>
  );
};

export default PaginationDots;
