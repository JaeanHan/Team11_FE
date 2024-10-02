import React from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Box, Text, VStack } from '@chakra-ui/react';
import HeroBannerBg from '@images/heroBg.svg?react';

import styles from './index.module.css';

const height = 300;

export const HeroSection: React.FC = () => {
  return (
    <Box bg={BoomerangColors.blue} height={height} className={styles.hero}>
      <HeroBannerBg viewBox={`0 0 1024 ${height}`} />
      <VStack spacing={25} marginTop={75}>
        <Text color={BoomerangColors.white} fontSize={'20px'}>
          <b>전세사기 대응 가이드라인</b> 저희가 드릴게요!
        </Text>

        {/*TODO: 부메랑 로고로 변경*/}
        <Text color={BoomerangColors.white} fontSize="26px">
          BOOMERANG{'<'}
        </Text>

        <HeroKickBox />
      </VStack>
    </Box>
  );
};

const HeroKickBox = () => (
  <Box
    bg={BoomerangColors.white}
    padding={3}
    width={530}
    textAlign="center"
    borderRadius={34}
    borderTopRightRadius={1}
  >
    <Text fontSize="28px">전세 사기를 당했어요! 어떻게 하죠?😢</Text>
  </Box>
);
