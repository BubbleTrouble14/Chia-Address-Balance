import React, { useEffect, useState } from 'react';

// export const fetchBalanceData = (address) => {
//   const promises = [getBalance(address), getCurrentPrice()];

//   // Promise.all(promises).then(([opRoles, menus]) => {
//   //   return { opRoles, menus };
//   // });
//   // const menuPromise = getMenus();
//   return Promise.all(promises).then(([balance, currentPrice]) => {
//     return { balance, currentPrice };
//   });
// };

// export const getBalance = (address) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(JSON.parse('{"grossBalance":11432600000100,"netBalance":11432600000100}'));
//     }, 500);
//   })
//     .then((json) => {
//       return json;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// export const getCurrentPrice = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(JSON.parse('{"price":277.53}'));
//     }, 500);
//   })
//     .then((json) => {
//       return json;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

export const getBalance = (address) => {
  return fetch('https://api3.chiaexplorer.com/balance/' + address)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCurrentPrice = () => {
  return fetch('https://api3.chiaexplorer.com/currentPrice')
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getExchangeRates = () => {
  return fetch('http://currencyexchangeservice-env.eba-qcksh9ek.eu-central-1.elasticbeanstalk.com/')
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.log(error);
    });
};
