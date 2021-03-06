//import SvgAd from './svgComponents/Ad';
export const addDataToExchangeO = ([key, value]) => {
  let obj;
  if (key === 'EUR') {
    obj = {
      value,
      icon: '๐ช๐บ',
      title: 'Euro',
    };
  } else if (key === 'JPY') {
    obj = {
      value,
      icon: '๐ฏ๐ต',
      title: 'Japanese Yen',
    };
  } else if (key === 'BGN') {
    obj = {
      value,
      icon: '๐ง๐ฌ',
      title: 'Bulgarian Lev',
    };
  } else if (key === 'CZK') {
    obj = {
      value,
      icon: '๐จ๐ฟ',
      title: 'Czech Koruna',
    };
  } else if (key === 'DKK') {
    obj = {
      value,
      icon: '๐ฉ๐ฐ',
      title: 'Danish Krone',
    };
  } else if (key === 'GBP') {
    obj = {
      value,
      icon: '๐ฌ๐ง',
      title: 'Pound sterling',
    };
  } else if (key === 'HUF') {
    obj = {
      value,
      icon: '๐ญ๐บ',
      title: 'Hungarian Forint',
    };
  } else if (key === 'PLN') {
    obj = {
      value,
      icon: '๐ต๐ฑ',
      title: 'Poland zลoty',
    };
  } else if (key === 'RON') {
    obj = {
      value,
      icon: '๐ท๐ด',
      title: 'Romanian Leu',
    };
  } else if (key === 'SEK') {
    obj = {
      value,
      icon: '๐ธ๐ช',
      title: 'Swedish Krona',
    };
  } else if (key === 'CHF') {
    obj = {
      value,
      icon: '๐จ๐ญ',
      title: 'Swiss Franc',
    };
  } else if (key === 'ISK') {
    obj = {
      value,
      icon: '๐ฎ๐ธ',
      title: 'Icelandic Krรณna',
    };
  } else if (key === 'NOK') {
    obj = {
      value,
      icon: '๐ณ๐ด',
      title: 'Norwegian Krone',
    };
  } else if (key === 'HRK') {
    obj = {
      value,
      icon: '๐ญ๐ท',
      title: 'Euro',
    };
  } else if (key === 'RUB') {
    obj = {
      value,
      icon: '๐ท๐บ',
      title: 'Russian Ruble',
    };
  } else if (key === 'TRY') {
    obj = {
      value,
      icon: '๐น๐ท',
      title: 'Turkish lira',
    };
  } else if (key === 'AUD') {
    obj = {
      value,
      icon: '๐ฆ๐บ',
      title: 'Australian Dollar',
    };
  } else if (key === 'BRL') {
    obj = {
      value,
      icon: '๐ง๐ท',
      title: 'Brazilian Real',
    };
  } else if (key === 'CAD') {
    obj = {
      value,
      icon: '๐จ๐ฆ',
      title: 'Canadian Dollar',
    };
  } else if (key === 'CNY') {
    obj = {
      value,
      icon: '๐จ๐ณ',
      title: 'Chinese Yuan',
    };
  } else if (key === 'HKD') {
    obj = {
      value,
      icon: '๐ญ๐ฐ',
      title: 'Hong Kong Dollar',
    };
  } else if (key === 'IDR') {
    obj = {
      value,
      icon: '๐ฎ๐ฉ',
      title: 'Indonesian Rupiah',
    };
  } else if (key === 'ILS') {
    obj = {
      value,
      icon: '๐ฎ๐ฑ',
      title: 'Israeli Shekel',
    };
  } else if (key === 'INR') {
    obj = {
      value,
      icon: '๐ฎ๐ณ',
      title: 'Indian Rupee',
    };
  } else if (key === 'KRW') {
    obj = {
      value,
      icon: '๐ฐ๐ท',
      title: 'South Korean won',
    };
  } else if (key === 'MXN') {
    obj = {
      value,
      icon: '๐ฒ๐ฝ',
      title: 'Mexican Peso',
    };
  } else if (key === 'MYR') {
    obj = {
      value,
      icon: '๐ฒ๐พ',
      title: 'Malaysian Ringgit',
    };
  } else if (key === 'NZD') {
    obj = {
      value,
      icon: '๐ณ๐ฟ',
      title: 'New Zealand Dollar',
    };
  } else if (key === 'PHP') {
    obj = {
      value,
      icon: '๐ต๐ญ',
      title: 'Philippine Peso',
    };
  } else if (key === 'SGD') {
    obj = {
      value,
      icon: '๐ธ๐ฌ',
      title: 'Singapore Dollar',
    };
  } else if (key === 'THB') {
    obj = {
      value,
      icon: '๐น๐ญ',
      title: 'Thai Baht',
    };
  } else if (key === 'ZAR') {
    obj = {
      value,
      icon: '๐ฟ๐ฆ',
      title: 'South African Rand',
    };
  } else if (key === 'ARS') {
    obj = {
      value,
      icon: '๐ฆ๐ท',
      title: 'Argentine Peso',
    };
  } else if (key === 'DZD') {
    obj = {
      value,
      icon: '๐ฉ๐ฟ',
      title: 'Algerian Dinar',
    };
  } else if (key === 'MAD') {
    obj = {
      value,
      icon: '๐ฒ๐ฆ',
      title: 'Moroccan Dirham',
    };
  } else if (key === 'TWD') {
    obj = {
      value,
      icon: '๐น๐ผ',
      title: 'New Taiwan dollar',
    };
  } else if (key === 'BTC') {
    obj = {
      value,
      icon: 'โฟ',
      title: 'Bitcoin',
    };
  } else if (key === 'ETH') {
    obj = {
      value,
      icon: 'ฮ',
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
