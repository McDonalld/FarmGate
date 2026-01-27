import * as React from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";

/* SVGR has dropped some elements not supported by react-native-svg: desc */
const ProfileLogoOutline = (props:SvgProps) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    id="User-Rounded--Streamline-Solar"
    height={28}
    width={28}
    {...props}
  >
    <G id="Line Duotone/Users/User Rounded">
      <Path
        id="Vector"
        stroke="#ffffffff"
        d="M12 21c3.866 0 7 -1.7909 7 -4 0 -2.2091 -3.134 -4 -7 -4 -3.86599 0 -7 1.7909 -7 4 0 2.2091 3.13401 4 7 4Z"
        strokeWidth={1.5}
      />
      <Path
        id="Vector_2"
        stroke="#ffffffff"
        d="M12 10c2.2091 0 4 -1.79086 4 -4s-1.7909 -4 -4 -4C9.79086 2 8 3.79086 8 6s1.79086 4 4 4Z"
        strokeWidth={1.5}
      />
    </G>
  </Svg>
);
export default ProfileLogoOutline;
