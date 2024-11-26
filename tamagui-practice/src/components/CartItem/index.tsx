'use client'

import Image from 'next/image';
import { useCallback } from 'react';
import { Stack, XStack, YStack } from 'tamagui';

// Component
import { Heading, Text } from '@/universal';

// Utils
import { formatAmountNumber } from '@/utils';

// Icons
import { DeleteIcon } from '@/icons';

type TCartItem = {
  id: string;
  title: string;
  image: string[];
  description: string;
  price: number;
  quantity: number;
  onRemoveItem?: (id: string) => void;
};

const CartItem = ({
  id,
  title,
  image,
  description,
  price,
  quantity,
  onRemoveItem,
}: TCartItem) => {
  const handleRemoveItem = useCallback(() => {
    onRemoveItem && onRemoveItem(id);
  }, [id, onRemoveItem]);
  return (
    <Stack flexDirection='column' gap="30px" $gtMd={{ flexDirection: 'row' }}>
      <Stack flex={1}>
        <Image
          width={347}
          height={290}
          src={image[0]}
          alt={title}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderRadius: '8px',
          }}
        />
      </Stack>
      <YStack flex={4} >
        <Heading
          size='huge'
          variant="quinary"
          marginBottom="5px"
          $gtMd={{ size: 'superHuge' }}
        >
          {title}
        </Heading>
        <Text
          size='small'
          variant="senary"
          marginBottom="30px"
          $gtMd={{
            size: 'extraLarge'
          }}
        >
          {description}
        </Text>

        <YStack marginBottom="30px" alignItems="flex-start">
          <Heading variant="product" size="large">
            Size:
          </Heading>
          <XStack gap="5px">
            <Text variant="senary" size="extraLarge">
              Length-34cm,
            </Text>
            <Text variant="tertiary" size="extraLarge">
              Width-56cm
            </Text>
          </XStack>
        </YStack>

        <Stack width="50%" borderTopWidth="1px" borderColor="$borderLineCart" marginBottom="10px">
          <Heading size="superLarge" variant="quinary" paddingVertical="10px">
            N{formatAmountNumber(price?.toString())}
          </Heading>
        </Stack>

        <XStack gap="10px" alignItems='center'>
          <Heading variant="product" size="large">
            Quantity:
          </Heading>
          <Text variant="tertiary" size="extraLarge">
            {quantity}
          </Text>
        </XStack>
      </YStack>

      <Stack justifyContent="center" alignItems="center">
        <Stack height="fit-content" onPress={handleRemoveItem} cursor="pointer">
          <DeleteIcon />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CartItem;
