'use client';

import { Fragment } from 'react';

import { RadioGroup, Stack, useMedia, XStack, YStack } from 'tamagui';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Components
import { CardBenefit, ItemCategory, ProductCard, SkeletonProductList } from '@/components';
import { Heading, Text } from '@/universal';

// Constants
import { BENEFIT_LIST, MENU_ITEM_FILTER, ROUTER } from '@/constants';

// Types
import { TProduct } from '@/types';
import { VectorIcon } from '@/icons';

type TTrendingSection = {
  productList: TProduct[];
};

const TrendingSection = ({ productList }: TTrendingSection) => {
  const { gtMd, gtLg } = useMedia()

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      $gtMd={{ paddingHorizontal: '94px' }}
    >
      <YStack
        width='100%'
        justifyContent="center"
        alignItems="center"
        $gtMd={{ width: 'unset', maxWidth: '1512px' }}
      >
        <XStack
          width='100%'
          paddingHorizontal='28px'
          paddingTop="20px"
          paddingBottom="26px"
          backgroundColor='transparent'
          gap='15px'
          justifyContent="center"
          alignItems="center"
          marginBottom="46px"
          $gtMd={{
            width: '73%',
            paddingHorizontal: '145px',
            backgroundColor: '$backgroundFilter',
            boxShadow: '0 11px 30px 4px rgba(0, 0, 0, 7%)',
            gap: '75px',
            marginTop: '-60px',
          }}
        >
          {MENU_ITEM_FILTER.map((item) => {
            const IconComponent = item.icon || Fragment;
            const IconActiveComponent = item.iconActive || Fragment;
            return (
              <RadioGroup
                flexDirection="column"
                alignItems="center"
                cursor="pointer"
                key={item.id}
              >
                <ItemCategory
                  value={item.value}
                  title={item.itemContent}
                  icon={<IconComponent />}
                  iconActive={<IconActiveComponent />}
                />
              </RadioGroup>
            );
          })}
        </XStack>

        {gtMd && (
          <XStack
            gap="92px"
            marginBottom="98px"
            paddingHorizontal="104px"
            style={{
              display: 'grid',
              ...(gtMd && { gridTemplateColumns: 'repeat(2, 1fr' }),
              ...(gtLg && { gridTemplateColumns: 'repeat(4, 1fr' }),
            }}
          >
            {BENEFIT_LIST.map((item) => {
              const IconComponent = item.icon || Fragment;
              return (
                <CardBenefit
                  key={item.id}
                  icon={<IconComponent />}
                  title={item.title}
                  text={item.text}
                />
              );
            })}
          </XStack>
        )}

        <Stack
          width='100%'
          paddingHorizontal='28px'
          marginBottom='136px'
          flexDirection='row'
          justifyContent='space-between'
          alignItems="center"
          $gtMd={{
            flexDirection: 'column',
            width: 'unset',
            paddingHorizontal: 0,
            marginBottom: '136px'
          }}
        >
          <YStack
            alignItems='center'
            $gtMd={{
              width: "100%",
              marginBottom: '30px'
            }}
          >
            <Heading
              marginBottom="10px"
              size='large'
              variant="quinary"
              $gtMd={{
                size: 'ultraHuge'
              }}
            >
              Top Trending
            </Heading>
            {gtMd && (
              <>
                <Text maxWidth="797px" variant="septenary" size="extraLarge" marginBottom="10px" textAlign='center'>
                  Find a bright ideal to suit your taste with our great
                  selection of suspension, wall, floor and table lights.
                </Text>
                <Stack width="98px" height="5px" backgroundColor="$backgroundPrimary" />
              </>
            )}
          </YStack>
          <Link href={ROUTER.PRODUCT} style={{ textDecoration: 'none' }}>
            <XStack width="100%" alignItems='center' justifyContent="flex-end" gap={5}>
              <Text size='extraSmall' variant="tertiary" $gtMd={{ size: 'small' }}>
                See all
              </Text>
              <VectorIcon />
            </XStack>
          </Link>
        </Stack>

        <Stack
          style={{
            display: 'grid',
            ...(gtMd && { gridTemplateColumns: 'repeat(4, 1fr' }),
            ...(!gtMd && { gridTemplateColumns: 'repeat(2, 1fr' })
          }}
          paddingHorizontal='28px'
          gap='29px'
          rowGap="120px"
          marginBottom="85px"
          $gtMd={{
            paddingHorizontal: '94px',
            gap: '29px'
          }}
        >
          {productList?.map((item) => (
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
      </YStack >
    </Stack >
  );
};

export default TrendingSection;
