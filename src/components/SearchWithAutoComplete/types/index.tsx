import type { AutocompleteResult, AutocompleteResults } from "types";

export type SearchWithAutocompleteProps = {
  data: AutocompleteResults;
  onSelect?: (result: AutocompleteResult) => void;
  selected?: string,
  setSelected?: (val:string) => void
};