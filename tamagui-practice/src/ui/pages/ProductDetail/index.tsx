import { Suspense } from 'react';

// Components
import {
  HeadingSection,
  ProductInfo,
  SkeletonProductDetail,
} from '@/components';

import { getCartItems, getProductDetail } from '@/apis';


type TProductDetail = {
  productId: string;
};

const ProductDetail = async ({ productId }: TProductDetail) => {
  const { data: cartList } = await getCartItems();
  const { cartItems = [], id } = cartList || {};

  const { data: product } = await getProductDetail(productId);

  const { category = '' } = product || {};

  return (
    <>
      <Suspense fallback={<SkeletonProductDetail />}>
        <ProductInfo product={product} cartId={id} cartItems={cartItems} category={category} />
      </Suspense>
    </>
  );
};

export default ProductDetail;
