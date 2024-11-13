import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

// Apis
import { getCartItems } from '@/apis';

// layouts
import { Header } from '@/layouts';
const Footer = dynamic(() => import('@/layouts/Footer'));

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = async ({ children }: AuthLayoutProps) => {
  const { data: cartList } = await getCartItems();
  const { cartItems = [] } = cartList || {};

  return (
    <>
      <Header cartItems={cartItems} />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

export default AuthLayout;
