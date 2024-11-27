'use client';

import { Box, Text } from '@chakra-ui/react';
import { useCallback, useMemo, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Components
import UserDropdown from '../UserDropdown';
import { Expand, LoadingIndicator } from '..';

// Actions
import { logout } from '@/actions';

// Constants
import { ROUTER } from '@/constants';

// Icons
import { CartIcon, HeartIcon } from '@/icons';

// Utils
import { calculateTotalQuantity } from '@/utils';

// Types
import { ICartItem } from '@/types';
import { Stack, useMedia, XStack } from 'tamagui';

type TNavigation = {
  cartItem: ICartItem[];
};

const Navigation = ({ cartItem }: TNavigation) => {
  const [isLogout, startTransition] = useTransition();
  const router = useRouter();
  const { gtMd } = useMedia();

  const totalQuantity = useMemo(
    () => calculateTotalQuantity(cartItem),
    [cartItem],
  );

  const handleLogout = useCallback(() => {
    startTransition(async () => {
      await logout();
      router.push(ROUTER.LOGIN);
    });
  }, [router]);
  return (
    <>
      {gtMd ? (
        <XStack flexDirection="row" alignItems="center" gap="32px">
          <HeartIcon />
          <Link href={ROUTER.CART}>
            <Box
              position="relative"
              opacity={1}
              transition=".2s ease-in"
              _hover={{ opacity: '.8' }}
            >
              <CartIcon />
              <Stack
                width="20px"
                height="20px"
                backgroundColor="$backgroundTotalQuantity"
                borderRadius="100%"
                alignItems="center"
                justifyContent="center"
                position="absolute"
                top={-10}
                right={-10}
              >
                <Text size="textMd" variant="secondary">
                  {totalQuantity}
                </Text>
              </Stack>
            </Box>
          </Link>
          <UserDropdown onClick={handleLogout} />
        </XStack>
      ) : <Expand totalQuantity={totalQuantity} onClick={handleLogout} />}

      {isLogout && <LoadingIndicator />}
    </>
  );
};

export default Navigation;
