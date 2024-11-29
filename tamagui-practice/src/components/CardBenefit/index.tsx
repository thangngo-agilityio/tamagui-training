'use client';

import { Stack, YStack } from 'tamagui';
import { memo, ReactElement } from 'react';
import isEqual from 'react-fast-compare';
import { Heading, Text } from '@/universal';

type TCardBenefit = {
  icon?: ReactElement;
  title?: string;
  text?: string;
};

const CardBenefit = ({ icon, title, text }: TCardBenefit) => (
  <Stack alignItems="center" flexDirection="row">
    <Stack>{icon}</Stack>
    <YStack width='100%' marginLeft="24px">
      <Heading variant='secondary' size="medium" marginBottom="2px">
        {title}
      </Heading>
      <Text variant="senary" size="medium">
        {text}
      </Text>
    </YStack>
  </Stack>
);

export default memo(CardBenefit, isEqual);
