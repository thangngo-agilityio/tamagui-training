'use client'
import Image from 'next/image';
import { Stack, YStack } from 'tamagui';
import Link from 'next/link';

// Component
import { Heading, Text } from '@/universal';

// Icons
import { HeartIcon } from '@/icons';

// Utils
import { formatAmountNumber } from '@/utils';

// Constants
import { ROUTER } from '@/constants';

type ProductCard = {
  id: string;
  image: string;
  title: string;
  price: number;
};

const ProductCard = ({ id, image, title, price }: ProductCard) => (
  <Link href={ROUTER.PRODUCT_DETAIL_PAGE(id)} scroll style={{ textDecoration: 'none' }}>
    <YStack
      flexDirection="column"
      borderRadius="sm"
      boxShadow="0 4px 50px -5px rgba(32, 32, 32, 10%)"
      paddingBottom='8px'
      alignItems="center"
      $gtMd={{
        paddingBottom: '14px'
      }}
    >
      <Stack
        width="90%"
        position="relative"
        justifyContent="center"
        marginTop="-90px"
        marginBottom="18px"
        transition=".2s ease-in"
        hoverStyle={{
          width: '100%',
        }}
      >
        <Stack
          width="100%"
          height='94px'
          borderRadius="$sm"
          overflow="hidden"
          $gtMd={{
            height: '180px'
          }}
        >
          <Image
            width={276}
            height={180}
            src={image}
            alt={title}
            style={{
              borderRadius: 'sm',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Stack>
        <Stack
          width='30px'
          height='30px'
          position="absolute"
          justifyContent="center"
          alignItems="center"
          borderRadius="$full"
          backgroundColor="$backgroundBody"
          top="10px"
          right='15px'
          $gtMd={{
            width: '45px',
            height: '45px',
            right: '30px'
          }}
        >
          <HeartIcon />
        </Stack>
      </Stack>
      <YStack width="100%" paddingHorizontal='8px' $gtMd={{ paddingHorizontal: '16px' }}>
        <Heading variant="senary" size='extraSmall' numberOfLines={1} $gtMd={{ size: 'medium' }}>
          {title}
        </Heading>
        <Text variant="productCard" size='small' weight='bold' $gtMd={{ size: 'medium' }}>
          N{formatAmountNumber(price.toString())}
        </Text>
      </YStack>
    </YStack>
  </Link>
);

export default ProductCard;
