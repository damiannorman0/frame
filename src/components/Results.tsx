import type {FC, ReactElement} from "react";
import styled, {StyledComponent} from "styled-components";
import type { AutocompleteResult } from "types";

/**
 * Styled Components
 */
const ResultsList: StyledComponent<'ul', any> = styled.ul`
  display: block;
  margin-top: 50px;
  padding: 1px;
  color: white;
  width: 250px; !important;
  max-height: 350px !important;
  overflow-y: scroll !important;
  text-align: left;
  position: absolute;
`;

const ResultsListItem: StyledComponent<'li', any> = styled.li`
  list-style: none;
  padding-left: 8px;
  margin-bottom: 4px; 
  min-height: 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
    
  &:hover {
      border-radius: 2px;
      background-color: ${({ theme }) => theme.colors.background.input};
  }
    
  a {
      text-decoration: none;
  }  
`;

/**
 * Types
 */
type ResultsProps = {
  results?: Array<AutocompleteResult>;
  onSelect?: (result: AutocompleteResult) => void;
};

/**
 * A list of search results
 */
export const Results: FC<ResultsProps> = ({
                                            results,
                                            onSelect,
}) => {
    const listItems:ReactElement[] = results?.map((result: AutocompleteResult ) => (
        <ResultsListItem key={result?.value}>
            <a href='#' tabIndex={0} onClick={(e) => {
                e?.preventDefault();
                if( onSelect ) {
                    return onSelect(result);
                }

                return undefined;
            }}>{result?.text} {result?.value}</a>
        </ResultsListItem>
    )) || [];

  return (
      <ResultsList className="results">
        {listItems}
      </ResultsList>
  );
};
