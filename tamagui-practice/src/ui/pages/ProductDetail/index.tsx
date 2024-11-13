import { Suspense } from 'react';
import { Box } from '@chakra-ui/react';

// Components
import {
  HeadingSection,
  ProductInfo,
  SkeletonProductDetail,
} from '@/components';

import { getCartItems, getProductDetail } from '@/apis';

// Constants

type TProductDetail = {
  productId: string;
};

const ProductDetail = async ({ productId }: TProductDetail) => {
  const { data: cartList } = await getCartItems();
  const { cartItems = [], id } = cartList || {};

  const { data: product } = await getProductDetail(productId);

  const { category = '' } = product || {};

  return (
    <Box px={{ base: '28px', lg: '67px' }} pb={{ base: '100px', lg: '610px' }}>
      <HeadingSection title={category} />
      <Suspense fallback={<SkeletonProductDetail />}>
        <ProductInfo product={product} cartId={id} cartItems={cartItems} />
      </Suspense>
    </Box>
  );
};

export default ProductDetail;
