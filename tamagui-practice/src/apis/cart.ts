// Services
import { httpClientCart } from '@/service';

// Types

// Constants
import { API_PATH } from '@/constants';

// Utils
import { formatUrlWithQuery } from '@/utils';

// Auth configs
import { auth } from '@/configs';
import { ICart } from '@/types';

export const getCartItems = async (): Promise<{ data: ICart }> => {
  try {
    const session = await auth();

    const userId = session?.user?.id || '';

    const endpoint = formatUrlWithQuery(API_PATH.CARTS, { userId });

    const res = await httpClientCart.getRequest<ICart[]>({
      endpoint,
      configOptions: {
        next: { tags: [API_PATH.CARTS] },
      },
    });

    return { data: res[0] };
  } catch (error) {
    throw error;
  }
};
