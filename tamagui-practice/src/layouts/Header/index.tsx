'use client';

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
import { Stack, useMedia, XStack } from 'tamagui';
import { Text } from '@/universal';

type THeader = {
  cartItems: ICartItem[];
};

const Header = ({ cartItems }: THeader) => {
  const { gtMd } = useMedia();

  return (
    <Stack
      width="100%"
      justifyContent="center"
      position="absolute"
      zIndex="1"
      flexDirection="column"
      paddingHorizontal="20px"
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
          <Stack marginLeft="-20px" $gtMd={{ marginLeft: '0' }}>
            <Link href={ROUTER.HOME} title="Home">
              {gtMd ? <LogoIcon /> : <LogoMobile />}
            </Link>
          </Stack>
          {gtMd && (
            <>
              <Stack flexDirection="row" alignItems="center">
                <XStack marginLeft="36px" alignItems="center" gap={1}>
                  <Text size="large" variant="secondary">
                    Space Builder
                  </Text>
                  <Text variant="tertiary">(Coming soon)</Text>
                  <ArrowIcon />
                </XStack>
                <XStack
                  marginLeft="40px"
                  alignItems="center"
                  gap={1}
                  transition=".2s ease-in"
                  hoverStyle={{ opacity: 0.8 }}
                >
                  <Link href={ROUTER.PRODUCT} style={{ textDecoration: 'none' }}>
                    <Text size="large" variant="secondary">
                      Products
                    </Text>
                  </Link>
                  <ArrowIcon />
                </XStack>
              </Stack>

              <Stack marginLeft="22px" width="30%">
                <InputSearch />
              </Stack>
            </>
          )}
        </Stack>
        <Suspense fallback={<Skeleton w="100px" h="40px" />}>
          <Navigation cartItem={cartItems} />
        </Suspense>
      </Stack>

      {!gtMd && (
        <Stack width="100%">
          <InputSearch />
        </Stack>
      )}
    </Stack>
  );
};
export default Header;
