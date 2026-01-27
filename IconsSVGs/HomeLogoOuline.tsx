import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: desc */
const HomeLogoOutline = (props: SvgProps) => (
  <Svg
    viewBox="-0.5 -0.5 16 16"
    fill="none"
    id="Home-Line--Streamline-Majesticons"
    height={32}
    width={32}
    {...props}
  >
    <Path
      stroke="#ffffffff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.5 11.875v-5.3125a0.625 0.625 0 0 0 -0.25 -0.5l-4.375 -3.28125a0.625 0.625 0 0 0 -0.75 0l-4.375 3.28125a0.625 0.625 0 0 0 -0.25 0.5V11.875a0.625 0.625 0 0 0 0.625 0.625h2.5a0.625 0.625 0 0 0 0.625 -0.625v-1.875a0.625 0.625 0 0 1 0.625 -0.625h1.25a0.625 0.625 0 0 1 0.625 0.625v1.875a0.625 0.625 0 0 0 0.625 0.625h2.5a0.625 0.625 0 0 0 0.625 -0.625z"
      strokeWidth={1}
    />
  </Svg>
);
export default HomeLogoOutline;
