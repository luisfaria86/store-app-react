import React from 'react';
import Button from '../Button';
import { FiltersProps } from './types';

const Filters: React.FC<FiltersProps> = React.memo(({ filterOptions, onFilterChange }) => {
  return (
    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
      {filterOptions.map(option => (
        <Button
          key={option.id}
          text={option.label}
          onClick={() => onFilterChange(option.id)}
        />
      ))}
    </div>
  );
});

export default Filters;


