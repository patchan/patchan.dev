import React from 'react'
import { IconButton, useTheme } from '@chakra-ui/react'

type ContactIconProps = {
  label: string;
  link: string;
  icon: React.ReactElement;
}

const ContactIcon: React.FC<ContactIconProps> = ({ label, link, icon }) => {
  const theme = useTheme();

  return (
    <IconButton
      as='a'
      aria-label={label}
      isRound
      tabIndex={0}
      size='lg'
      colorScheme='purple'
      color={theme.colors.text.primary}
      href={link}
      target='_blank'
      rel='noopener'
      icon={icon}
      variant='ghost'
      boxShadow='4px 4px 8px rgb(221 221 229 / 0.9)'
    />
  );
}

export default ContactIcon;
