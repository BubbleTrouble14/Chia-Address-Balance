import React, { useEffect, useState } from 'react';
import { saveObject } from './LocalStorage';

// Powered by XCHscan.com APIs
// https://xchscan.com/rest-api

const url = 'https://api2.spacescan.io/1/';
const urlPrice = 'https://api.coingecko.com/api/v3/simple/price?ids=chia&vs_currencies=';

// Data returned examples
// ('{"mojo": 37432606000100, "xch": 37.4326060001}');
// ('{"chia": {"usd": 211.31}}');

// export const getBalance = (address) => {
//   return { mojo: 37432606000100, xch: 37.4326060001 };
// };

// export const getChiaPriceInFiat = (currency) => {
//   return { chia: { usd: 211.31 } };
// };

export const getBalanceWithAddress = (address, title) => {
  fetch(`${url}xch/balance/${address}`)
    .then((response) => {
      if (response.ok) {
        // console.log(response.json());
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then((json) =>
      // console.log(json.xch);
      ({ address, title, xch: json.data.unspentBalance })
    )
    .catch((error) => {
      console.log(error);
    });
};
export const getBalance = (address) =>
  fetch(`${url}xch/balance/${address}`)
    .then((response) => response.json())
    .then((json) => {
      // console.log(json.data);
      // console.log(json);
      return json.data;
    })
    .catch((error) => {
      console.log(error);
    });

export const getChiaPriceInFiat = (currency) =>
  fetch(`${urlPrice}${currency}`)
    .then((response) => response.json())
    .then(
      (json) =>
        // console.log(json);
        json
    )
    .catch((error) => {
      console.log(error);
    });
