import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: desc */
const ProfileLogo = (props:SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    fill="none"
    id="User-Rounded--Streamline-Solar"
    height={28}
    width={28}
    {...props}
  >
    <Path
      fill="#ffffffff"
      d="M8 6a4 4 0 1 0 8 0 4 4 0 1 0 -8 0"
      strokeWidth={1}
    />
    <Path
      fill="#ffffffff"
      d="M5 17a7 4 0 1 0 14 0 7 4 0 1 0 -14 0"
      strokeWidth={1}
    />
  </Svg>
);
export default ProfileLogo;
