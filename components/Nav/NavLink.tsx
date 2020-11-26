import React from 'react';
import { Button, Link, Text } from '@chakra-ui/react';

type NavLinkProps = {
  children: React.ReactNode;
  target: string;
  style: 'icon' | 'text';
  label?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, target, style, label, ...props }) => {
  const handleInput = () => {
    const elem = document.getElementById(target);
    elem?.scrollIntoView({ behavior: 'smooth' });
  }

  const handleKeyInput = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleInput();
    }
  }

  return (style === 'icon' ?
    <Link
      tabIndex={0}
      aria-label={label}
      size='md'
      onClick={handleInput}
      onTouchEnd={handleInput}
      onKeyDown={handleKeyInput}
      {...props}
    >
      {children}
    </Link> :
    <Button
      as='a'
      tabIndex={0}
      size='md'
      height='30px'
      p={3}
      variant='ghost'
      colorScheme='purple'
      onClick={handleInput}
      onTouchEnd={handleInput}
      onKeyDown={handleKeyInput}
      {...props}
    >
      <Text color='black'>
        {children}
      </Text>
    </Button>
  );
}

export default NavLink;
