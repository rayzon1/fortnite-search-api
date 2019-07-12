import React from 'react';

const UserContext = React.createContext({});

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;

// ! https://www.taniarascia.com/using-context-api-in-react/ (for react context w/hooks) 