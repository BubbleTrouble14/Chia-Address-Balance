import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const DonateIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color}
        d="M3.9 13.8H2.7c-.3 0-.6.3-.6.6v7c0 .3.3.6.6.6h1.2c1 0 1.7-.8 1.7-1.7v-4.7c0-1-.7-1.8-1.7-1.8zM21.7 14.9l-.3-.3c-.4-.4-1.1-.3-1.6.1l-2.6 3-.1.1c-.3.4-.8.6-1.3.6h-4.5c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h3.5c.6 0 1.2-.5 1.2-1.2 0-.6-.5-1.2-1.2-1.2h-2.1c-.3 0-.7-.1-1-.4-1.4-1.2-3.5-1.3-5-.3v7.2c1.2.3 2.3.5 3.5.5h5.2c1.3 0 2.5-.6 3.3-1.6l2.8-3.7c.5-.5.5-1.2.2-1.6z"
      />
      <Circle fill={props.color} cx={14.8} cy={8} r={4.6} />
    </Svg>
  );
};

export default DonateIcon;
