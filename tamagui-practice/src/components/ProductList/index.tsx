'use client';

import { Text } from '@chakra-ui/react';

// Components
import { ProductCard, Pagination } from '@/components';

// Hooks
import { usePagination } from '@/hooks';

// Types
import { TProduct } from '@/types';

// Constants
import { PAGE_SIZE_PRODUCT } from '@/constants';
import { Stack, useMedia, YStack } from 'tamagui';

type TProductListProps = {
  productList: TProduct[];
};

const ProductList = ({ productList }: TProductListProps) => {
  const { gtMd } = useMedia()

  const {
    data,
    filterData,
    arrOfCurrButtons,
    isDisabledPrev,
    isDisableNext,
    handlePageChange,
    handlePageClick,
  } = usePagination(productList, PAGE_SIZE_PRODUCT);

  return (
    <YStack alignItems="center" paddingHorizontal='28px' $gtMd={{ paddingHorizontal: 0 }}>
      {productList?.length > 0 ? (
        <Stack
          style={{
            display: 'grid',
            ...(gtMd && { gridTemplateColumns: 'repeat(4, 2fr' }),
            ...(!gtMd && { gridTemplateColumns: 'repeat(2, 1fr' })
          }}
          paddingHorizontal='28px'
          gap='120px 15px'
          marginBottom="20px"
          $gtMd={{
            paddingHorizontal: '94px',
            gap: '120px 29px'
          }}
        >
          {filterData?.map((item) => (
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
      ) : (
        <Stack paddingHorizontal='28px' marginBottom="50px" $gtMd={{ paddingHorizontal: '320px' }}>
          <Text size="textLg" textAlign="center">
            No products in list
          </Text>
        </Stack>
      )}
      <Pagination
        currentPage={data?.currentPage}
        isDisableNext={isDisableNext}
        isDisabledPrev={isDisabledPrev}
        arrOfCurrButtons={arrOfCurrButtons}
        onPageChange={handlePageChange}
        onClickPage={handlePageClick}
      />
    </YStack>
  );
};

export default ProductList;
