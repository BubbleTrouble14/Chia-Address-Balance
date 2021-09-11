import React, { createContext } from 'react';

const AddressContext = createContext({
  addAddress: () => {},
  removeAddress: () => {},
  updateAddressTitle: () => {},
  addresses: [],
});

export const AddressContextProvider = AddressContext.Provider;

export default AddressContext;
