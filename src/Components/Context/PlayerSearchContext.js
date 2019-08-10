import React from 'react';

const PlayerSearchContext = React.createContext({});

export const PlayerSearchProvider = PlayerSearchContext.Provider;
export const PlayerSearchConsumer = PlayerSearchContext.Consumer;

export default PlayerSearchContext;