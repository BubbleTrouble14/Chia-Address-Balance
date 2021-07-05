import React, { createContext } from 'react';

const AddressContext = createContext({
  addAddress: () => {},
  removeAddress: () => {},
  addresses: [],
});

export const AddressContextProvider = AddressContext.Provider;

export default AddressContext;
