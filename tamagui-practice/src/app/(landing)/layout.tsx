
import { ReactNode } from 'react';

// Apis
import { getCartItems } from '@/apis';

// layouts
import { Footer, Header } from '@/layouts';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = async ({ children }: AuthLayoutProps) => {
  const { data: cartList } = await getCartItems();
  const { cartItems = [] } = cartList || {};

  return (
    <div>
      <Header cartItems={cartItems} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
