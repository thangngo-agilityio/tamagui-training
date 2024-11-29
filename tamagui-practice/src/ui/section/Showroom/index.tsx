'use client';

import { Stack, XStack, YStack } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient'
import Image from 'next/image';

// Component
import { Button, Heading, Text } from '@/universal';

const ShowroomSection = () => {
  return (
    <Stack
      position='relative'
      justifyContent="center"
      alignItems='center'
      borderRadius="$sm"
    >
      <LinearGradient
        position='absolute'
        width='100%'
        height='100%'
        paddingHorizontal='24px'
        borderRadius="$sm"
        colors={['$backgroundShowroom', '$backgroundShowroomSecondary']}
        start={[1, 0]}
        end={[1, 0]}
        zIndex={-1}

      />
      <XStack width="100%" maxWidth="1512px" marginHorizontal='20px' $gtMd={{ paddingHorizontal: '125px', marginHorizontal: 0 }}>
        <YStack
          paddingTop='30px'
          paddingBottom='15px'
          flex={2}
          $gtMd={{
            paddingTop: '49px',
            paddingBottom: '39px',
            flex: 1
          }}
        >
          <Heading
            marginBottom="10px"
            variant="septenary"
            size='small'
            maxWidth="580px"
            $gtMd={{
              size: 'semiHuge'
            }}
          >
            Customize your furniture and build your space with minifurs
          </Heading>
          <Text
            width='180px'
            marginBottom='5px'
            fontSize='6px'
            maxWidth="580px"
            $gtMd={{
              width: 'unset',
              marginBottom: '22px',
              size: 'extraLarge',
              fontSize: 'unset'
            }}
          >
            Allows you to view our showrooms containing our latest furniture
            collections
          </Text>
          <Button
            variant='showroom'
          // $gtMd={{
          //   variant: 'showroom'
          // }}
          >
            Coming soon...
          </Button>
        </YStack>

        <Stack
          flex={1}
          justifyContent="center"
          position='relative'
          $gtMd={{
            position: 'unset'
          }}
        >
          <Stack
            position='absolute'
            width='264px'
            height='127px'
            $gtMd={{
              position: 'unset',
              width: 'unset',
              height: 'unset'
            }}
          >
            <Image
              width={545}
              height={356}
              src="/images/egg-chair.svg"
              alt="egg-chair"
              style={{ width: '100%' }}
            />
          </Stack>
        </Stack>
      </XStack>
    </Stack >
  );
};

export default ShowroomSection;
