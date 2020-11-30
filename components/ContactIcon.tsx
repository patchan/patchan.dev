import React from 'react'
import { IconButton, useColorModeValue, useTheme } from '@chakra-ui/react'

type ContactIconProps = {
  label: string;
  link: string;
  icon: React.ReactElement;
}

const ContactIcon: React.FC<ContactIconProps> = ({ label, link, icon }) => {
  const theme = useTheme();
  const boxShadow = useColorModeValue('4px 4px 8px rgb(221 221 229 / 0.9)', '4px 4px 8px rgb(0 0 0 / 0.9)');
  const iconColor = useColorModeValue(theme.colors.text.primary, theme.colors.black);
  const background = useColorModeValue(theme.colors.white, theme.colors.purple[400]);

  return (
    <IconButton
      as='a'
      aria-label={label}
      isRound
      tabIndex={0}
      size='lg'
      colorScheme='purple'
      color={iconColor}
      backgroundColor={background}
      href={link}
      target='_blank'
      rel='noopener'
      icon={icon}
      variant='ghost'
      boxShadow={boxShadow}
    />
  );
}

export default ContactIcon;
