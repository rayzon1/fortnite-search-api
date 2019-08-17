import React from 'react';

const SearchBarContext = React.createContext({});

export const SearchBarProvider = SearchBarContext.Provider;
export const SearchBarConsumer = SearchBarContext.Consumer;

export default SearchBarContext;