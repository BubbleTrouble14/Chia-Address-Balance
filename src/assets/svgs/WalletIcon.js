import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const WalletIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color}
        d="M18.7 9.6H21V8c0-1-.7-1.8-1.6-1.8h-.8V4.4c0-1-.7-1.8-1.6-1.8H5.2C4 2.6 3 3.5 2.8 4.8c0 .1-.1.2-.1.2v13.7c0 1.5 1.1 2.7 2.5 2.7h14.1c.9 0 1.6-.8 1.6-1.8V18h-2.2c-2.3 0-4.2-1.9-4.2-4.2 0-2.3 1.9-4.2 4.2-4.2zM5.2 6.2c-.5 0-.8-.4-.8-.9s.4-.9.8-.9h11.6v1.8H5.2z"
      />
      <Path
        fill={props.color}
        d="M22.1 11.1h-3.4c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7h3.4c.4 0 .7-.3.7-.7v-4c0-.4-.3-.7-.7-.7zm-3.4 3.8c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1c.1.6-.4 1.1-1.1 1.1z"
      />
    </Svg>
  );
};

export default WalletIcon;
