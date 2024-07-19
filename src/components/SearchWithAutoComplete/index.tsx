import {ChangeEventHandler, FC, useCallback, useMemo} from "react";
import { useState } from "react";
import {useAutoCompleteCities, useAutoCompleteGitHub} from "hooks/useAutocomplete";
import styled, {StyledComponent} from "styled-components";
import { Results } from "components/Results";
import type { AutocompleteResults } from "types";
import {SearchWithAutocompleteProps} from "components/SearchWithAutoComplete/types";
import debounce from "debounce";

/**
 * Styled Components
 */
const SearchContainer:StyledComponent<any, any> = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;   
    position: relative; 
    width: 300px;
    height: 200px;
`

const Input:StyledComponent<any, any> = styled.input`
    padding: 8px;
    position: absolute;
    width: 250px;
    background-repeat: no-repeat;
    border: none;
`;

/**
 * Allows a user to input a query, see suggestions, and select a result
 */
export const SearchWithAutoComplete: FC<SearchWithAutocompleteProps> = ({
  data,
  onSelect,
  selected,
  setSelected
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");



  //get results alternatives-----------------------
  const getResultsCities = useMemo(() => {
    return useAutoCompleteCities({
      staticData: data
    });
  }, []);

  const getResultsGitHub = useMemo(() => {
    return useAutoCompleteGitHub();
  }, []);
  //end of get results-----------------------


  const [results, setResults] = useState<AutocompleteResults>();
  const onSearchInputChange: ChangeEventHandler<HTMLInputElement> = async (e): Promise<any> => {
    if(selected && setSelected) {
      setSelected('');
    }

    const query:string = e?.target?.value;
    setSearchQuery(query);
    const results:AutocompleteResults = await getResultsGitHub(query);
    //const results:AutocompleteResults = await getResultsCities(query);

    setResults(results);
  };

  const d = useCallback( debounce(onSearchInputChange, 250), []);

  return (
    <SearchContainer>
      <Input
        // style={style}
        tabIndex={0}
        aria-label="Search Cities"
        autoComplete="off"
        className="search-autocomplete"
        onChange={d}
        type="search"
        placeholder="search city name"
      />
      <Results onSelect={onSelect} results={results} />
    </SearchContainer>
  );
};
