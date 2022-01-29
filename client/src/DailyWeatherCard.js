import React from 'react';
import { Text, VStack } from '@chakra-ui/react';
import SVGIcon from './SVGIcon';
import dayjs from 'dayjs';

export default function DailyWeatherCard({
  timestamp,
  temperature,
  icon,
  description,
  fromKtoC,
}) {
  return (
    <VStack p={4} bg="white" borderRadius={'xl'}>
      <SVGIcon
        width={40}
        height={30}
        iconName={icon}
        description={description}
      />
      <Text fontSize="md" fontWeight={'semibold'}>
        {dayjs(timestamp).format('DD, MMM')}
      </Text>
      <Text fontSize="md" fontWeight={'semibold'}>
        {fromKtoC(temperature)} <Text as="sup">o</Text>C
      </Text>
    </VStack>
  );
}
