import { ReactNode } from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Button } from '@chakra-ui/react';

interface PreventionBtnProps {
  children: ReactNode;
  bgColor: string;
  onClick: () => void;
}
export const PreventionBtn: React.FC<PreventionBtnProps> = ({
  children,
  bgColor,
  onClick,
}) => (
  <Button
    onClick={onClick}
    w={'125px'}
    bg={bgColor}
    color={BoomerangColors.white}
    borderRadius={8}
    fontWeight={800}
    fontSize={'30px'}
    h={'63px'}
  >
    {children}
  </Button>
);
