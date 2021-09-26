import React, { useEffect, useState } from 'react';

// Powered by XCHscan.com APIs
// https://xchscan.com/rest-api

const url = 'https://xchscan.com/api/';
const url_price = 'https://api.coingecko.com/api/v3/simple/price?ids=chia&vs_currencies=';

//Data returned examples
('{"mojo": 37432606000100, "xch": 37.4326060001}');
('{"chia": {"usd": 211.31}}');

// export const getBalance = (address) => {
//   return { mojo: 37432606000100, xch: 37.4326060001 };
// };

// export const getChiaPriceInFiat = (currency) => {
//   return { chia: { usd: 211.31 } };
// };

export const getBalance = (address) => {
  return fetch(`${url}account/balance?address=` + address)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getChiaPriceInFiat = (currency) => {
  return fetch(`${url_price}${currency}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json;
    })
    .catch((error) => {
      console.log(error);
    });
};
