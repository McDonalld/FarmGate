import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: desc */
const Hamburger = (props:SvgProps
) => (
  <Svg
    viewBox="0 0 24 24"
    fill="none"
    id="Hamburger-Menu--Streamline-Solar-Ar"
    height={30}
    width={30}
    {...props}
  >
    <Path
      d="M20 7 4 7"
      stroke="#000000"
      strokeLinecap="round"
      strokeWidth={1.5}
    />
    <Path
      d="M20 12 4 12"
      stroke="#000000"
      strokeLinecap="round"
      strokeWidth={1.5}
    />
    <Path
      d="M20 17 4 17"
      stroke="#000000"
      strokeLinecap="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default Hamburger;
