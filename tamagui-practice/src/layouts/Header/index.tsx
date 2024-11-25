'use client'

import { Skeleton } from '@chakra-ui/react';
import Link from 'next/link';

// Components
import { InputSearch, Navigation } from '@/components';

// Icons
import { ArrowIcon, LogoIcon, LogoMobile } from '@/icons';

// Constants
import { ROUTER } from '@/constants';
import { Suspense } from 'react';
import { ICartItem } from '@/types';
import { Stack, XStack } from 'tamagui';
import { Text } from '@/universal';


type THeader = {
  cartItems: ICartItem[];
};

const Header = ({ cartItems }: THeader) => (
  <Stack
    width="100%"
    justifyContent="center"
    position='absolute'
    flexDirection='column'
    paddingHorizontal='20px'
    $gtMd={{ position: 'relative', flexDirection: 'row', paddingHorizontal: '52px' }}
  >
    <Stack
      width="100%"
      maxWidth="1512px"
      paddingTop="40px"
      paddingBottom="24px"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack flexDirection="row" alignItems="center">
        <Stack marginLeft='-20px' $gtMd={{ marginLeft: '0' }}>
          <Link href={ROUTER.HOME} title="Home">
            <LogoIcon />
            {/* <Hide above="lg">
              <LogoMobile />
            </Hide> */}
          </Link>
        </Stack>
        <Stack flexDirection="row" alignItems="center">
          <XStack marginLeft="36px" alignItems="center" gap={1}>
            <Text size="large" variant='secondary'>Space Builder</Text>
            <Text variant="tertiary">(Coming soon)</Text>
            <ArrowIcon />
          </XStack>
          <XStack marginLeft='40px' alignItems='center' gap={1} transition='.2s ease-in' hoverStyle={{ opacity: .8 }}>
            <Link
              href={ROUTER.PRODUCT}
              style={{ textDecoration: 'none' }}
            >
              <Text size="large" variant='secondary'>Products</Text>
            </Link>
            <ArrowIcon />
          </XStack>
        </Stack>
        <Stack marginLeft="22px" width="30%">
          <InputSearch />
        </Stack>
      </Stack>
      <Suspense fallback={<Skeleton w="100px" h="40px" />}>
        <Navigation cartItem={cartItems} />
      </Suspense>
    </Stack >

    {/* <Hide above="lg">
      <Box width="100%">
        <InputSearch />
      </Box>
    </Hide> */}
  </Stack >
);
export default Header;
