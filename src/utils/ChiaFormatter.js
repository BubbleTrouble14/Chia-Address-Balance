export const convertMojoToChia = (mojo) => mojo / 10 ** 12;

export const convertChiaToMojo = (xch) => xch * 10 ** 12;

export const formatToChiaObj = (mojoVal) => {
  const mojo = mojoVal % 10000000;
  const xch = convertMojoToChia(mojoVal - mojo);
  const mojoString = mojo === 1 ? 'Mojo' : 'Mojos';
  if (mojo !== 0 && xch !== 0) {
    return { text: `${xch} XCH and ${mojo} ${mojoString}`, xch, mojo };
  }
  if (mojo !== 0 && xch === 0) {
    return { text: `${mojo} ${mojoString}`, xch, mojo };
  }
  return { text: `${xch} XCH`, xch, mojo };
};
