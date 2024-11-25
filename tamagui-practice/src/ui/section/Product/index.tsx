'use client';

import Link from 'next/link';
import lazy from 'next/dynamic';
import { Suspense } from 'react';


// Component
import { SkeletonProductList } from '@/components';
import { VectorIcon } from '@/icons';

// Types
import { TProduct } from '@/types';

// Constants
import { ROUTER } from '@/constants';
import { Stack, useMedia, XStack } from 'tamagui';
import { Heading, Text } from '@/universal';

const ProductCard = lazy(() => import('@/components/ProductCard'));

type TProductSection = {
  productList: TProduct[];
};

const ProductSection = ({ productList }: TProductSection) => {
  // const isMobile = useBreakpointValue({ base: true, lg: false });
  const { gtMd } = useMedia()
  return (
    <Stack
      paddingTop='54px'
      paddingBottom='50px'
      justifyContent="center"
      alignItems='center'
      $gtMd={{
        paddingTop: '148px',
        paddingBottom: '416px'
      }}
    >
      <Stack maxWidth="1512px">
        <Stack
          paddingHorizontal='28px'
          marginBottom='120px'
          $gtMd={{
            paddingHorizontal: '104px',
            marginBottom: '165px'
          }}
        >
          <XStack width="100%">
            <Heading
              maxWidth="340px"
              variant="septenary"
              size='large'
              $gtMd={{
                size: 'extraHuge'
              }}
            >
              We Have Some Awesome Products.
            </Heading>
            <Text
              marginLeft="118px"
              maxWidth="518px"
              size="medium"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard
              dummy text ever since the 1500s,
            </Text>
          </XStack>
          {/* {isMobile && (
            <Flex w="100%" justifyContent="flex-end">
              <HStack as={Link} href={ROUTER.PRODUCT}>
                <Text
                  size={{ base: 'textSm', lg: 'textMd' }}
                  variant="tertiary"
                >
                  See all
                </Text>
                <VectorIcon />
              </HStack>
            </Flex>
          )} */}
        </Stack>
        <Suspense fallback={<SkeletonProductList length={4} />}>
          <Stack
            style={{
              display: 'grid',
              ...(gtMd && { gridTemplateColumns: 'repeat(4, 1fr' }),
              ...(!gtMd && { gridTemplateColumns: 'repeat(2, 1fr' })
            }}
            paddingHorizontal='28px'
            gap="29px"
            rowGap="120px"
            marginBottom="20px"
            $gtMd={{
              paddingHorizontal: '94px'
            }}
          >
            {productList.map((item) => (
              <Stack key={item.id}>
                <ProductCard
                  id={item.id}
                  image={item.image[0]}
                  title={item.name}
                  price={item.price}
                />
              </Stack>
            ))}
          </Stack>
        </Suspense>
      </Stack>
    </Stack>
  );
};

export default ProductSection;
