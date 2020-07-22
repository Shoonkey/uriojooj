// This constant defines the order in which the sortable headers switch between sorting modes
// Currently goes from unsorted to descending to ascending and then back to unsorted again
const SORT_OPTIONS = [null, "DESC", "ASC"];

export function getNextSortOption(currentOption){

  const idx = SORT_OPTIONS.indexOf(currentOption);
  const len = SORT_OPTIONS.length;

  return SORT_OPTIONS[(idx + 1) % len];
}