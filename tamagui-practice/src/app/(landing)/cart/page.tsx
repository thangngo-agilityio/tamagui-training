import { Metadata } from 'next';

// Components
import { CartPage, OverviewSection } from '@/ui';
import { Box, Container } from '@chakra-ui/react';
import { Suspense } from 'react';
import { SkeletonCartList } from '@/components';

export const metadata: Metadata = {
  title: 'Cart',
  description:
    'This is the Cart page in a comprehensive e-commerce web application designed to facilitate online shopping.',
};

const Cart = () => (
  <Container maxW="100%" p={0}>
    <OverviewSection title="Cart page" />
    <Suspense fallback={<SkeletonCartList length={2} />}>
      <CartPage />
    </Suspense>
  </Container>
);

export default Cart;
