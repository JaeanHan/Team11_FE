import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Flex, Image, Text } from '@chakra-ui/react';

interface MoreInfoBoxProps {
  title: string;
  subtitle: string;
  icon: string;
  link: string;
}

export const MoreInfoBox: React.FC<MoreInfoBoxProps> = ({
  title,
  subtitle,
  icon,
  link,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      w="374px"
      h="146px"
      bg="#F1F1F1"
      borderRadius={14}
      p="26px 28px"
      cursor="pointer"
      onClick={handleClick}
    >
      <Flex flexDir="column">
        <Text
          fontSize="25px"
          fontWeight={800}
          color="#414141"
          whiteSpace="pre-line"
          lineHeight="26px"
        >
          {title}
        </Text>
        <Text fontSize="17px" color="#969696" mt="4px">
          {subtitle}
        </Text>
      </Flex>
      <Image src={icon} />
    </Flex>
  );
};
