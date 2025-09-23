export interface FilterOption {
  id: string;
  label: string;
}

export interface FiltersProps {
  filterOptions: FilterOption[];
  onFilterChange: (filterId: string) => void;
}