// Types
import { getProducts } from '@/apis';
import { ProductList } from '@/components';



type TTrendingSection = {
  queryConfig: {
    name?: string;
    category?: string;
    id?: string;
  };
};

const ProductPage = async ({ queryConfig }: TTrendingSection) => {
  const { data: productList } = await getProducts(queryConfig);
  return <ProductList productList={productList} />;
};

export default ProductPage;
