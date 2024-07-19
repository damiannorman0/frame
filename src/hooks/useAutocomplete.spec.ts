// Please make sure all tests are passing in your submission.

import type { AutocompleteResults } from "types";
import { getSearchResults } from "./useAutocomplete";

const DEFAULT_RESULTS: AutocompleteResults = [
  { text: "Maya Angelou", value: "poet" },
  { text: "Virgil Abloh", value: "designer" },
  { text: "Dianna Ross", value: "musician" },
];

describe("getSearchResults", () => {
  describe("empty dataset throws error", () => {
    test("with query", () => {
      const searchTerm = "foo";
      const resultsSet: AutocompleteResults = [];
      expect(() => getSearchResults(searchTerm, resultsSet)).toThrow();
    });

    test("without query", () => {
      const searchTerm = "";
      const resultsSet: AutocompleteResults = [];
      expect(() => getSearchResults(searchTerm, resultsSet)).toThrow();
    });
  });

  describe("valid static dataset", () => {
    test("no query, returning empty results", () => {
      const searchTerm = "";
      const resultsSet = DEFAULT_RESULTS;
      const expected: AutocompleteResults = [];
      expect(getSearchResults(searchTerm, resultsSet)).toEqual(expected);
    });

    test("matching query, returning single result", () => {
      const searchTerm = "dianna";
      const resultsSet = DEFAULT_RESULTS;
      const expected: AutocompleteResults = [
        { text: "Dianna Ross", value: "musician" },
      ];
      expect(getSearchResults(searchTerm, resultsSet)).toEqual(expected);
    });

    test("matching query, returning multiple results", () => {
      const searchTerm = "A";
      const resultsSet = DEFAULT_RESULTS;
      const expected: AutocompleteResults = [
        { text: "Maya Angelou", value: "poet" },
        { text: "Virgil Abloh", value: "designer" },
      ];
      expect(getSearchResults(searchTerm, resultsSet)).toEqual(expected);
    });

    test("matching query, case agnostic", () => {
      const searchTerm = "maya";
      const resultsSet = DEFAULT_RESULTS;
      const expected: AutocompleteResults = [
        { text: "Maya Angelou", value: "poet" },
      ];
      expect(getSearchResults(searchTerm, resultsSet)).toEqual(expected);
    });

    test("no match, returning empty results", () => {
      const searchTerm = "nomatch";
      const resultsSet = DEFAULT_RESULTS;
      const expected: AutocompleteResults = [];
      expect(getSearchResults(searchTerm, resultsSet)).toEqual(expected);
    });

    test("match only the results' `text` property (not `value`)", () => {
      const searchTerm = "poet";
      const resultsSet = DEFAULT_RESULTS;
      const expected: AutocompleteResults = [];
      expect(getSearchResults(searchTerm, resultsSet)).toEqual(expected);
    });
  });
});
