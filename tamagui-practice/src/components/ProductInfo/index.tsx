'use client';

import { Stack, useMedia, XStack, YStack } from 'tamagui';
import { useRouter } from 'next/navigation';
import { Fragment, useCallback, useState } from 'react';

// Actions
import { updateMyCart } from '@/actions';

// Components
import ImageProduct from '../ImageProduct';
import CardBenefit from '../CardBenefit';
import { Button, Heading, Text } from '@/universal';

// Hooks
import { useCustomToast } from '@/hooks';

// Utils
import { formatAmountNumber } from '@/utils';

// Icons
import { MinusIcon, PlusIcon } from '@/icons';

// Constants
import { BENEFIT_LIST, ROUTER, SUCCESS_MESSAGES } from '@/constants';

// Types
import { ICartItem, TProduct } from '@/types';

// Components

type TProductInfo = {
  cartId: string;
  cartItems: ICartItem[];
  product?: TProduct;
  length?: string;
  width?: string;
};

const ProductInfo = ({ product, cartId, cartItems }: TProductInfo) => {
  const [quantity, setQuantity] = useState(1);
  const { showToast } = useCustomToast();
  const router = useRouter();
  const { gtMd } = useMedia();

  const {
    id: productId = '',
    image = [],
    name = '',
    price = 0,
    description = '',
  } = product || {};

  const handleAddToCart = useCallback(async () => {
    const newCartItems = [...cartItems];

    const itemExist = newCartItems.find((cartItem) => {
      const { product: productItem } = cartItem || {};
      const { id } = productItem || {};

      return id === productId;
    });

    if (itemExist) {
      itemExist.quantity = quantity;
    } else {
      newCartItems.push({ product, quantity: quantity });
    }

    const res = await updateMyCart(cartId, newCartItems);

    const { error } = res || {};

    if (error) {
      showToast(error);
    } else {
      showToast(SUCCESS_MESSAGES.ADD_CART, 'success');
    }
  }, [cartId, cartItems, product, productId, quantity, showToast]);

  const handleBuyNow = useCallback(async () => {
    handleAddToCart();

    return router.push(ROUTER.CART);
  }, [handleAddToCart, router]);

  // Handle change quantity
  const onChange = useCallback(
    (operation: 'increment' | 'decrement') => {
      setQuantity((prevQuantity) =>
        operation === 'increment' ? prevQuantity + 1 : prevQuantity - 1,
      );
    },
    [setQuantity],
  );

  const handleDecrement = useCallback(async () => {
    onChange('decrement');
  }, [onChange]);

  const handleIncrement = useCallback(async () => {
    onChange('increment');
  }, [onChange]);

  return (
    <Stack flexDirection='column' gap="42px" paddingHorizontal='28px' paddingBottom='100px' $gtMd={{ flexDirection: 'row', paddingHorizontal: '67px', paddingBottom: '610px' }}>
      <ImageProduct image={image} alt={name} />
      <YStack flex={1}>
        <Heading
          size='huge'
          variant="quinary"
          marginBottom="5px"
          $gtMd={{ size: 'superHuge' }}
        >
          {name}
        </Heading>
        <Text
          size='small'
          variant="senary"
          marginBottom='10px'
          $gtMd={{ size: 'extraLarge', marginBottom: '30px' }}
        >
          {description}
        </Text>
        <YStack marginBottom='10px' alignItems="flex-start" $gtMd={{ marginBottom: '30px' }}>
          <Heading variant="product" weight='bold' size="superLarge">
            Dimension:
          </Heading>
          <XStack gap="5px">
            <Text variant="senary" size='small' $gtMd={{ size: 'extraLarge' }} >
              Length - 34cm,
            </Text>
            <Text variant="tertiary" size='small' $gtMd={{ size: 'extraLarge' }}>
              Width-56cm
            </Text>
          </XStack>
        </YStack>

        <Stack
          borderTopWidth="1px"
          borderBottomWidth="1px"
          borderColor="border.300"
          marginBottom="28px"
        >
          <Heading size="superLarge" variant="quinary" paddingVertical="10px">
            N{formatAmountNumber(price?.toString())}
          </Heading>
        </Stack>

        <XStack marginBottom="44px" gap="60px">
          <YStack alignItems="flex-start">
            <Heading variant="quaternary" size="middleLarge" marginBottom="20px">
              Quantity available
            </Heading>
            <XStack gap="20px">
              <Button
                variant="quantity"
                data-testid="btn-decrement"
                onPress={handleDecrement}
                disabled={quantity === 1}
                aria-label="Minus button"
              >
                <MinusIcon />
              </Button>
              <Text variant="quantity">{quantity}</Text>
              <Button
                variant="quantity"
                onPress={handleIncrement}
                data-testid="btn-increment"
                aria-label="Plus button"
              >
                <PlusIcon />
              </Button>
            </XStack>
          </YStack>
          <YStack alignItems="flex-start">
            <Heading marginBottom="20px" variant="quaternary" size="middleLarge">
              Color:
            </Heading>
            <XStack gap='10px'>
              <Stack
                width="36px"
                height="36px"
                borderRadius="100%"
                backgroundColor="$backgroundOptionPrimary"
              />
              <Stack
                width="36px"
                height="36px"
                borderRadius="100%"
                backgroundColor="$backgroundOptionSecondary"
              />
              <Stack
                width="36px"
                height="36px"
                borderRadius="100%"
                backgroundColor="$backgroundOptionTertiary"
              />
            </XStack>
          </YStack>
        </XStack>

        <XStack
          style={{
            display: 'grid',
            ...(gtMd && { gridTemplateColumns: 'repeat(2, 1fr' }),
          }}
          gap='20px'
          marginBottom='20px'
          $gtMd={{ gap: '92px', marginBottom: '40px' }}
        >
          {BENEFIT_LIST.map((item) => {
            const IconComponent = item.icon || Fragment;
            return (
              <Stack key={item.id}>
                <CardBenefit
                  icon={<IconComponent />}
                  title={item.title}
                  text={item.text}
                />
              </Stack>
            );
          })}
        </XStack>

        <Heading
          variant="quinary"
          size="large"
          marginBottom='25px'
          $gtMd={{ marginBottom: '58px' }}
        >
          Delivery Fee: N3,000-N5000
        </Heading>

        <Stack
          flexDirection='column'
          gap='20px'
          $gtMd={{ flexDirection: 'row', gap: 0 }}
        >
          <Button
            variant="buy"
            onPress={handleBuyNow}
          >
            Buy now
          </Button>
          <Button
            variant="cart"
            onPress={handleAddToCart}
            $gtMd={{
              marginLeft: '30px'
            }}
          >
            Add to cart
          </Button>
        </Stack>
      </YStack >
    </Stack >
  );
};

export default ProductInfo;
