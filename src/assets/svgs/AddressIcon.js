import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const AddressIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color}
        d="M18 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-6v7L9.5 7.5 7 9V2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12z"
      />
    </Svg>
  );
};

export default AddressIcon;
