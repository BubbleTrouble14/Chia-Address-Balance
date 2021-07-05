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

export const getBalance = (address) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.parse('{"grossBalance":11432600000100,"netBalance":11432600000100}'));
    }, 500);
  })
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getCurrentPrice = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.parse('{"price":277.53}'));
    }, 500);
  })
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};

// export const getBalance = (address) => {
//   return (
//     fetch('https://api2.chiaexplorer.com/balance/' + address)
//       // 'https://api2.chiaexplorer.com/balance/xch13v9r3wkceh6h5juecgzcfyf5x6ll9p2ehh03m2z46qyrdutp258qy4zu42'
//       .then((response) => response.json())
//       .then((json) => {
//         // console.log(json);
//         return json;
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//   );
// };

// export const getCurrentPrice = () => {
//   return fetch('https://api2.chiaexplorer.com/currentPrice')
//     .then((response) => response.json())
//     .then((json) => {
//       return json;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };
