import { useColorModeValue, useTheme } from '@chakra-ui/react';
import React from 'react';
import NavLink from './NavLink';

const LogoLink: React.FC = () => {
  const theme = useTheme();
  const logoColor = useColorModeValue(theme.colors.purple[500], theme.colors.purple[400])
  
  return (
    <NavLink label='go to page top' target='top' style='icon'>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="35px" height="35px" viewBox="0 0 512 512"
      preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={logoColor} stroke="none">
          <path d="M438 5110 c-201 -34 -350 -163 -411 -355 l-22 -70 0 -2125 0 -2125
          22 -70 c52 -166 172 -286 338 -338 l70 -22 2125 0 2125 0 70 22 c166 52 286
          172 338 338 l22 70 0 2125 0 2125 -22 70 c-51 163 -168 282 -333 338 l-65 22
          -2105 1 c-1158 1 -2126 -2 -2152 -6z m2322 -1020 c231 -21 396 -63 565 -145
          302 -146 452 -388 472 -760 12 -248 -57 -486 -190 -646 -232 -280 -735 -423
          -1274 -362 l-53 6 0 -432 c0 -237 1 -431 3 -431 1 0 121 -22 267 -48 l265 -48
          0 -105 0 -104 -743 -3 -743 -2 3 107 3 107 170 41 c94 23 182 44 198 48 l27 7
          0 1238 0 1238 -200 48 -200 48 0 104 0 104 658 0 c370 0 707 -5 772 -10z"/>
          <path d="M2280 3141 l0 -679 97 -7 c128 -10 314 0 388 20 214 58 366 203 439
          418 41 122 41 348 0 487 -56 191 -207 331 -427 399 -80 24 -238 41 -389 41
          l-108 0 0 -679z"/>
        </g>
      </svg>
    </NavLink>
  );
}

export default LogoLink;
