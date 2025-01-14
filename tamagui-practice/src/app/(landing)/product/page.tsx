import { Box, Flex } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Metadata } from 'next';

// Pages
import { OverviewSection, ProductPage } from '@/ui';
import { FilterProduct, SkeletonProductList } from '@/components';

type TProductPage = {
  searchParams: Promise<{
    name?: string;
    category?: string;
    id?: string;
  }>;
};

export const metadata: Metadata = {
  title: 'Product',
  description:
    'This is the Product page in a comprehensive e-commerce web application designed to facilitate online shopping.',
};

const Product = async ({ searchParams }: TProductPage) => {
  const { name = '', category = '', id = '' } = (await searchParams) || {};

  const queryConfig = {
    name: name,
    category: category,
    id: id,
  };

  return (
    <Box overflow='hidden'>
      <OverviewSection title="Product page" />
      <Flex
        // paddingBottom={{ base: '100px', md: '350px' }}
        paddingBottom='350px'
        flexDir="column"
        alignItems="center"
        mb="20px"
      >

        <FilterProduct />
        <Suspense fallback={<SkeletonProductList length={8} />}>
          <ProductPage queryConfig={queryConfig} />
        </Suspense>
      </Flex>
    </Box>
  );
};

export default Product;
