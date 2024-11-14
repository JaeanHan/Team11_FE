import Calendar from 'react-calendar';

import { ConsultingItemTitle } from '@/components/ConsultingManagement/ConsultingItemTitle';
import { BoomerangColors } from '@/utils/colors';
import { Box, Button, Flex, VStack } from '@chakra-ui/react';
import pointer from '@images/pointer.svg';

import './index.css';

const times: string[] = Array.from({ length: 15 }, (_, i) => {
  const hour = (9 + i).toString().padStart(2, '0');
  return `${hour}:00`;
});

type ReservedTimes = {
  [key: string]: string[];
};

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const SelectConsultingDaySection: React.FC<{
  selectedDate: Date | null;
  setSelectedDate: (
    value: ((prevState: Date | null) => Date | null) | Date | null
  ) => void;
  selectedTime: string;
  setSelectedTime: (value: ((prevState: string) => string) | string) => void;
}> = ({ selectedDate, setSelectedDate, selectedTime, setSelectedTime }) => {
  const reservedTimes: ReservedTimes = {
    '2024-11-12': ['10:00', '12:00'],
    '2024-11-13': ['09:00', '13:00', '15:00'],
  };

  const handleDateChange = (value: Value) => {
    if (value instanceof Date) {
      setSelectedDate(value);
      setSelectedTime('');
    }
  };

  const getReservedTimes = (): string[] => {
    if (!selectedDate) return [];
    const dateString = selectedDate.toISOString().split('T')[0];
    return reservedTimes[dateString] || [];
  };

  return (
    <Box w="951px">
      <ConsultingItemTitle
        title="원하시는 상담 날짜를 선택해주세요!"
        icon={pointer}
      />
      <VStack justifyContent="center">
        <Flex w="870px" h="394px" borderRadius="17px">
          <Calendar
            onChange={handleDateChange}
            value={selectedTime ?? new Date()}
            locale="ko"
            calendarType="gregory"
            view="month"
            prev2Label={null}
            next2Label={null}
            showNeighboringMonth={false}
          />
          <Box
            borderTop={`2px solid ${BoomerangColors.deepBlue}`}
            borderBottom={`2px solid ${BoomerangColors.deepBlue}`}
          >
            <Flex
              maxW={300}
              wrap="wrap"
              justifyContent="center"
              alignItems="center"
              gap={2}
              h="100%"
              p="5px 0"
            >
              {times.map((time) => (
                <Button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  isDisabled={
                    selectedDate == null || getReservedTimes().includes(time)
                  }
                  border="none"
                  variant={selectedTime === time ? 'solid' : 'outline'}
                  width="70px"
                  height="40px"
                  fontSize="1rem"
                  fontWeight={500}
                >
                  {time}
                </Button>
              ))}
            </Flex>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};
