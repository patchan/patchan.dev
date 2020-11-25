import React from 'react'
import { IconButton } from '@chakra-ui/react'

type ContactIconProps = {
  label: string;
  link: string;
  icon: React.ReactElement;
}

const ContactIcon: React.FC<ContactIconProps> = ({ label, link, icon }) => {
  return (
    <IconButton
      as='a'
      aria-label={label}
      isRound
      tabIndex={0}
      size='lg'
      href={link}
      target='_blank'
      icon={icon}
    />
  );
}

export default ContactIcon;
