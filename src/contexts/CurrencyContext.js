import React, { createContext } from 'react';

const CurrencyContext = createContext({
  setCurrency: () => {},
  currency: '',
  setExchange: () => {},
  exchange: {},
});

export const CurrencyContextProvider = CurrencyContext.Provider;

export default CurrencyContext;
