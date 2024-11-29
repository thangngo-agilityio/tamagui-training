import { Metadata } from 'next';

// Components
import { CartPage, OverviewSection } from '@/ui';
import { Container } from '@chakra-ui/react';

export const metadata: Metadata = {
  title: 'Cart',
  description:
    'This is the Cart page in a comprehensive e-commerce web application designed to facilitate online shopping.',
};

const Cart = () => (
  <Container maxW="100%" p={0}>
    <OverviewSection title="Cart page" />
    <CartPage />
  </Container>
);

export default Cart;
