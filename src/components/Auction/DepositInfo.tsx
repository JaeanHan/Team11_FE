import React from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';

interface DepositInfoProps {
  safeAmount: number;
  cautionAmount: number;
  dangerAmount: number;
}

const DepositInfo: React.FC<DepositInfoProps> = ({
  safeAmount,
  cautionAmount,
  dangerAmount,
}) => {
  const depositData = [
    {
      color: 'green.500',
      label: '안전한 금액',
      amount: `${Math.round(safeAmount / 10000).toLocaleString()}만원`,
    },
    {
      color: 'yellow.400',
      label: '주의가 필요한 금액',
      amount: `${Math.round(cautionAmount / 10000).toLocaleString()}만원`,
    },
    {
      color: 'red.500',
      label: '위험한 금액(채권)',
      amount: `${Math.round(dangerAmount / 10000).toLocaleString()}만원`,
    },
  ];

  return (
    <Box w={{ base: 'full', md: '64%' }} ml={{ base: 0, md: 5 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        mt={{ base: 10, md: 28 }}
        w="full"
        fontSize="2xl"
        fontWeight="bold"
        color="gray.600"
      >
        {depositData.map((item, index) => (
          <Flex
            key={index}
            gap={3}
            mt={index !== 0 ? { base: 10, md: 20 } : 0}
            alignItems="center"
          >
            <Box bg={item.color} borderRadius="md" w="26px" h="26px" />
            <Text>
              {item.label} :{' '}
              <Text as="span" fontWeight="extrabold" color={item.color}>
                {item.amount}
              </Text>
            </Text>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default DepositInfo;
