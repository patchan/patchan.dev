import React from 'react';
import { Button, Link, Text, useColorModeValue, useTheme } from '@chakra-ui/react';

type NavLinkProps = {
  children: React.ReactNode;
  target: string;
  style: 'icon' | 'text';
  label?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, target, style, label, ...props }) => {
  const theme = useTheme();
  const textColor = useColorModeValue(theme.colors.text.primary, theme.colors.dark.text.primary);

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
      height='30px'
      p={3}
      variant='ghost'
      colorScheme='purple'
      onClick={handleInput}
      onTouchEnd={handleInput}
      onKeyDown={handleKeyInput}
      {...props}
    >
      <Text color={textColor}>
        {children}
      </Text>
    </Button>
  );
}

export default NavLink;
