'use client'
import { RadioGroup, Stack } from 'tamagui';
import { memo, ReactElement } from 'react';
import isEqual from 'react-fast-compare';

// Components
import { Heading } from '@/universal';

type TItemCategory = {
  title: string;
  value: string;
  filter?: string;
  icon?: ReactElement;
  iconActive?: ReactElement;
};

const ItemCategory = ({
  title,
  filter,
  value,
  icon,
  iconActive,
}: TItemCategory) => {
  const isActive = value === filter;

  return (
    <RadioGroup.Item margin={0} value={value} borderWidth={0} backgroundColor='transparent' cursor='pointer'>
      <Stack
        width="56px"
        height="56px"
        borderRadius='$xl'
        backgroundColor={isActive ? '$backgroundPrimary' : '$BackgroundItemCategory'}
        transition=".2s ease-in"
        opacity={1}
        hoverStyle={{
          backgroundColor: '$backgroundPrimary',
        }}
        justifyContent="center"
        alignItems="center"
        marginBottom="8px"
      >
        {!isActive ? icon : iconActive}
      </Stack>
      <Heading size="tiny" variant="quaternary">
        {title}
      </Heading>
    </RadioGroup.Item>
  );
};

export default memo(ItemCategory, isEqual);
