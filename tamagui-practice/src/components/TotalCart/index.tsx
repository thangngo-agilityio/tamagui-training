'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

// Actions
import { updateMyCart } from '@/actions';

// hooks
import { useCustomToast } from '@/hooks';

// Constants
import { ROUTER, SUCCESS_MESSAGES } from '@/constants';

// Types
import { ICartItem } from '@/types';

// Utils
import { calculateTotalPrice, formatAmountNumber } from '@/utils';
import { Stack, XStack, YStack } from 'tamagui';
import { Button, Heading, Text } from '@/universal';

type TTotalCart = {
  cartItem: ICartItem[];
  cartId: string;
};

const TotalCart = ({ cartItem, cartId }: TTotalCart) => {
  const [isDisable, setIsDisable] = useState(false);
  const { showToast } = useCustomToast();
  const router = useRouter();

  const total = useMemo(() => calculateTotalPrice(cartItem), [cartItem]);

  const handleCheckout = useCallback(async () => {
    const res = await updateMyCart(cartId, []);

    const { error } = res || {};

    if (error) {
      showToast(error);
    } else {
      showToast(SUCCESS_MESSAGES.CHECKOUT, 'success');
    }

    return router.push(ROUTER.ORDER);
  }, [cartId, showToast, router]);

  useEffect(() => {
    if (cartItem.length === 0) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [cartItem]);

  return (
    <Stack
      flexDirection='column'
      justifyContent="space-between"
      paddingHorizontal='28px'
      $gtMd={{ flexDirection: 'row', paddingHorizontal: '67px', paddingBottom: '610px' }}
    >
      <YStack alignItems="flex-start" marginBottom='20px' $gtMd={{ marginBottom: 0 }}>
        <XStack gap="15px">
          <Heading
            variant="product"
            size='huge'
            $gtMd={{ size: 'ultraHuge' }}
          >
            Total:
          </Heading>
          <Text variant="totalCart" size='superLarge' $gtMd={{ size: 'ultimateLarge' }}>
            N{formatAmountNumber(total.toString())}
          </Text>
        </XStack>
        <Text variant="septenary" size='extraLarge' $gtMd={{ size: 'superLarge' }}>
          Delivery exclusive
        </Text>
      </YStack>
      <Button
        variant="checkout"
        onPress={handleCheckout}
        disabled={isDisable}
      >
        Checkout
      </Button>
    </Stack>
  );
};

export default TotalCart;
