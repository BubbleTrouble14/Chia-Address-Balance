import React, { createContext } from 'react';

const CurrencyContext = createContext({
  setCurrencyKey: () => {},
  currencyKey: 0,
});

export const CurrencyContextProvider = CurrencyContext.Provider;

export default CurrencyContext;
