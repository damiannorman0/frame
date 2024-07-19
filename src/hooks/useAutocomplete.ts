import type {AutocompleteResult, AutocompleteResults} from "types";

/**
 * Returns autocomplete results for a given search query
 * @param {string} query - text the user has typed in
 * @param {AutocompleteResults} data - An array of all possible autocomplete results (static dataset)
 * @returns {AutocompleteResults} - An array of autocomplete results matching the `query`
 */
export const getSearchResults = (
  query: string,
  data: AutocompleteResults
): AutocompleteResults => {
  if (typeof data === "undefined" || data.length === 0) {
    throw new Error("No results provided. Parameter `data` is required.");
  }

  if (!query) {
    return [];
  }
  return data?.filter((result:AutocompleteResult) => {
    const components = result.text.split(' ');
    for (const component of components) {
        if( component.toLowerCase()?.startsWith(query?.toLowerCase() )) {
            return true;
        }
    }

    return false;
  });
};

export const getGitHubUsers = async ( query:string ) => {
    const request = async ():Promise<any> => {
        try {
            const numResults: number = 10;
            const url: string = `https://api.github.com/search/users?q=${query}&per_page=${numResults}`;
            const response:Response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response?.json();
            return json?.items?.map((item:any) => {
                return {
                    text: item?.id,
                    value: item?.login
                }
            });
        } catch (error) {
            console.error(error);
        }
    }

    return await request();
};

/**
 * Types
 */
type useAutocompleteOpts = {
  staticData: AutocompleteResults
};
type getResults = (query: string) => AutocompleteResults;
type useAutocompleteReturn = getResults;

/**
 * A hook that returns a function, that can be used to obtain search results
 * for a query. The results are intended to be rendered as
 * type-ahead/autocomplete suggestions.
 */
export const useAutoCompleteCities = ( opts:useAutocompleteOpts ):useAutocompleteReturn => {
  const c:Record<string, AutocompleteResults> = {};
  return (query: string) => {
    if(c[query]) {
        return c[query];
    }

    c[query] = getSearchResults(query, opts?.staticData);
    return c[query];
  };
};

export const useAutoCompleteGitHub = ():any => {
    const c:Record<string, AutocompleteResults> = {};
    return async(query: string):Promise<any> => {
        if(!query) {
            return;
        }
        if(c[query]) {
            return c[query];
        }

        c[query] = await getGitHubUsers(query);
        return c[query];
    };
};
