'use client'

import { Heading } from '@/universal';
import { YStack } from 'tamagui';

type THeadingSection = {
  title: string;
};

const HeadingSection = ({ title }: THeadingSection) => (
  <YStack
    width="100%"
    borderBottomWidth="1px"
    borderBottomColor="#DEE5EF"
    marginTop="65px"
    marginBottom="35px"
    paddingHorizontal='28px'
    style={{ textTransform: 'capitalize' }}
    $gtMd={{
      marginHorizontal: '67px'
    }}
  >
    <Heading size="semiHuge" variant="quinary" marginBottom="8px">
      {title}
    </Heading>
  </YStack>
);

export default HeadingSection;
