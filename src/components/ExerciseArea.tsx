import WORLD_CITIES from "constants/cities.json";
import styled, {StyledComponent} from "styled-components";
import type { AutocompleteResult } from "types";
import { SearchWithAutoComplete } from "components/SearchWithAutoComplete";
import {ReactElement, useState} from "react";

/**
 * Styled Components
 */
const StyledBackground:StyledComponent<any, any> = styled.div`
  background: ${({ theme }) => theme?.colors?.background.panel};
  padding: ${({ theme }) => theme.spaces["32"]};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const Subtitle:StyledComponent<any, any> = styled.h2`
  font-size: 18px;
  color: ${({ theme }) => theme?.colors.text?.body};
  font-weight: 500;
  letter-spacing: -0.02em;
  padding: 0;
  margin: ${({ theme }) => theme?.spaces["16"]} auto;
`;

const Example: StyledComponent<any, any> = styled.div`
  border: 1px solid ${({ theme }) => theme?.colors?.border?.neutral};
  border-radius: ${({ theme }) => theme?.radii["6"]};
  margin-bottom: ${({ theme }) => theme?.spaces["8"]};
  padding: ${({ theme }): string => `${theme?.spaces["24"]} ${theme?.spaces["48"]}`};
`;

/**
 * An area to render multiple instances of <SearchWithAutocomplete> for testing
 */
export function ExerciseArea():ReactElement<any, any> {
  const [selected, setSelected] = useState('');
  const onSelect = (result: AutocompleteResult): void => {
      setSelected( `${result?.text}, ${result.value}` );
      alert( `${result?.text}, ${result.value}` );
  };

  return (
    <StyledBackground>
      <Example>
        {/* Static data example (US States) */}
        <Subtitle>World Cities</Subtitle>
        <SearchWithAutoComplete data={WORLD_CITIES} onSelect={onSelect} selected={selected} setSelected={setSelected} />
      </Example>

      {/* Async data example (Github Users) */}
      {/* 
          <Example>
            <Subtitle>Github Users</Subtitle>
            <SearchWithAutocomplete />
          </Example>
        */}
    </StyledBackground>
  );
}
