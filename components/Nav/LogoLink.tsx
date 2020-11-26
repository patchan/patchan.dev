import React from 'react';
import NavLink from './NavLink';
import { Image } from '@chakra-ui/react';

const LogoLink: React.FC = () => {
  return (
    <NavLink label='go to page top' target='top' style='icon'>
      <Image aria-hidden width='32px' src='/apple-touch-icon.png' />
    </NavLink>
  );
}

export default LogoLink;
