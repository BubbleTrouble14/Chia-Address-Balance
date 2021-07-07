//import SvgAd from './svgComponents/Ad';
export const addDataToExchangeO = ([key, value]) => {
  let obj;
  //   console.log(key, value);
  if (key === 'EUR') {
    obj = {
      value,
      icon: '🇪🇺',
      title: 'Euro',
    };
  } else if (key === 'JPY') {
    obj = {
      value,
      icon: '🇯🇵',
      title: 'Japanese Yen',
    };
  } else if (key === 'BGN') {
    obj = {
      value,
      icon: '🇧🇬',
      title: 'Bulgarian Lev',
    };
  } else if (key === 'CZK') {
    obj = {
      value,
      icon: '🇨🇿',
      title: 'Czech Koruna',
    };
  } else if (key === 'DKK') {
    obj = {
      value,
      icon: '🇩🇰',
      title: 'Danish Krone',
    };
  } else if (key === 'GBP') {
    obj = {
      value,
      icon: '🇬🇧',
      title: 'Pound sterling',
    };
  } else if (key === 'HUF') {
    obj = {
      value,
      icon: '🇭🇺',
      title: 'Hungarian Forint',
    };
  } else if (key === 'PLN') {
    obj = {
      value,
      icon: '🇵🇱',
      title: 'Poland złoty',
    };
  } else if (key === 'RON') {
    obj = {
      value,
      icon: '🇷🇴',
      title: 'Romanian Leu',
    };
  } else if (key === 'SEK') {
    obj = {
      value,
      icon: '🇸🇪',
      title: 'Swedish Krona',
    };
  } else if (key === 'CHF') {
    obj = {
      value,
      icon: '🇨🇭',
      title: 'Swiss Franc',
    };
  } else if (key === 'ISK') {
    obj = {
      value,
      icon: '🇮🇸',
      title: 'Icelandic Króna',
    };
  } else if (key === 'NOK') {
    obj = {
      value,
      icon: '🇳🇴',
      title: 'Norwegian Krone',
    };
  } else if (key === 'HRK') {
    obj = {
      value,
      icon: '🇭🇷',
      title: 'Euro',
    };
  } else if (key === 'RUB') {
    obj = {
      value,
      icon: '🇷🇺',
      title: 'Russian Ruble',
    };
  } else if (key === 'TRY') {
    obj = {
      value,
      icon: '🇹🇷',
      title: 'Turkish lira',
    };
  } else if (key === 'AUD') {
    obj = {
      value,
      icon: '🇦🇺',
      title: 'Australian Dollar',
    };
  } else if (key === 'BRL') {
    obj = {
      value,
      icon: '🇧🇷',
      title: 'Brazilian Real',
    };
  } else if (key === 'CAD') {
    obj = {
      value,
      icon: '🇨🇦',
      title: 'Canadian Dollar',
    };
  } else if (key === 'CNY') {
    obj = {
      value,
      icon: '🇨🇳',
      title: 'Chinese Yuan',
    };
  } else if (key === 'HKD') {
    obj = {
      value,
      icon: '🇭🇰',
      title: 'Hong Kong Dollar',
    };
  } else if (key === 'IDR') {
    obj = {
      value,
      icon: '🇮🇩',
      title: 'Indonesian Rupiah',
    };
  } else if (key === 'ILS') {
    obj = {
      value,
      icon: '🇮🇱',
      title: 'Israeli Shekel',
    };
  } else if (key === 'INR') {
    obj = {
      value,
      icon: '🇮🇳',
      title: 'Indian Rupee',
    };
  } else if (key === 'KRW') {
    obj = {
      value,
      icon: '🇰🇷',
      title: 'South Korean won',
    };
  } else if (key === 'MXN') {
    obj = {
      value,
      icon: '🇲🇽',
      title: 'Mexican Peso',
    };
  } else if (key === 'MYR') {
    obj = {
      value,
      icon: '🇲🇾',
      title: 'Malaysian Ringgit',
    };
  } else if (key === 'NZD') {
    obj = {
      value,
      icon: '🇳🇿',
      title: 'New Zealand Dollar',
    };
  } else if (key === 'PHP') {
    obj = {
      value,
      icon: '🇵🇭',
      title: 'Philippine Peso',
    };
  } else if (key === 'SGD') {
    obj = {
      value,
      icon: '🇸🇬',
      title: 'Singapore Dollar',
    };
  } else if (key === 'THB') {
    obj = {
      value,
      icon: '🇹🇭',
      title: 'Thai Baht',
    };
  } else if (key === 'ZAR') {
    obj = {
      value,
      icon: '🇿🇦',
      title: 'South African Rand',
    };
  } else if (key === 'ARS') {
    obj = {
      value,
      icon: '🇦🇷',
      title: 'Argentine Peso',
    };
  } else if (key === 'DZD') {
    obj = {
      value,
      icon: '🇩🇿',
      title: 'Algerian Dinar',
    };
  } else if (key === 'MAD') {
    obj = {
      value,
      icon: '🇲🇦',
      title: 'Moroccan Dirham',
    };
  } else if (key === 'TWD') {
    obj = {
      value,
      icon: '🇹🇼',
      title: 'New Taiwan dollar',
    };
  } else if (key === 'BTC') {
    obj = {
      value,
      icon: '₿',
      title: 'Bitcoin',
    };
  } else if (key === 'ETH') {
    obj = {
      value,
      icon: 'Ξ',
      title: 'Ethereum',
    };
  } else {
    obj = {
      value,
      icon: 'test',
      title: 'test',
    };
  }
  return obj;
};
