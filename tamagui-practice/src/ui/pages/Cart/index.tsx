
// Components
import { CartList, TotalCart } from '@/components';
import { getCartItems } from '@/apis';

const CartPage = async () => {
  const { data: cartList } = await getCartItems();
  const { cartItems = [], id } = cartList || {};

  return (
    <>
      <CartList cartItem={cartItems} cartId={id} />
      <TotalCart cartItem={cartItems} cartId={id} />
    </>
  );
};

export default CartPage;
