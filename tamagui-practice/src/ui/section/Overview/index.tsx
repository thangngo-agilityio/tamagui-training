'use client'

import { Button, Heading, Text } from '@/universal';
import { Image, YStack } from 'tamagui';

type TOverviewSection = {
  title?: string;
  isHomePage?: boolean;
};

const OverviewSection = ({ isHomePage, title }: TOverviewSection) => (
  <YStack
    paddingHorizontal='28px'
    paddingTop={isHomePage ? '162px' : '172px'}
    paddingBottom={isHomePage ? '78px' : '78px'}
    justifyContent="center"
    $gtMd={{
      paddingHorizontal: '122px',
      paddingTop: isHomePage ? '162px' : '35px',
      paddingBottom: isHomePage ? '150px' : '35px'
    }}
  >
    <Image
      source={{ uri: '/images/background-overview.png' }} style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 'unset',
        objectFit: 'contain',
      }}
    />
    <YStack width="100%" maxWidth="1512px">
      <Heading
        maxWidth="705px"
        size={isHomePage ? 'medium' : 'superHuge'}
        variant="primary"
        textAlign={!isHomePage ? 'center' : 'unset'}
        $gtMd={{
          size: isHomePage ? 'ultraHuge' : 'superHuge'
        }}
      >
        {isHomePage ? 'We allow customers build & Customize items' : title}
      </Heading>
      {isHomePage && (
        <>
          <Text
            maxWidth="665px"
            marginBottom="20px"
            size='tiny'
            variant="primary"
            $gtMd={{ size: 'middleLarge' }}
          >
            Find a bright ideal to suit your taste with our great selection of
            suspension, wall, floor and table lights.
          </Text>
          <Button variant='overview'>Shop Now</Button>
        </>
      )}
    </YStack>
  </YStack >

);

export default OverviewSection;
