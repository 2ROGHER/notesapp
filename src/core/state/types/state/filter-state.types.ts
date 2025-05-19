export type FilterState<T> = {
  filters: T[];
  searchTerm: string;
  selectedFilterItems: T[];
};
