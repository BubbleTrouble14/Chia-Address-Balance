import React, { useEffect, useState } from 'react';

// Powered by XCHscan.com APIs
// https://xchscan.com/rest-api

const url = 'https://xchscan.com/api/';
const url_price = 'https://api.coingecko.com/api/v3/simple/price?ids=chia&vs_currencies=';

export const getBalance = (address) => {
  return fetch(`${url}account/balance?address=` + address)
    .then((response) => response.json())
    .then((json) => {
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
      return json;
    })
    .catch((error) => {
      console.log(error);
    });
};

// export const getExchangeRates = () => {
//   return fetch('http://currencyexchangeservice-env.eba-qcksh9ek.eu-central-1.elasticbeanstalk.com/')
//     .then((response) => response.json())
//     .then((json) => {
//       return json;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
