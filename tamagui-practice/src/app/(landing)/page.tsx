import { Metadata } from 'next';

// Pages
import { HomePage } from '@/ui';

// Constants
import { PAGE_SIZE } from '@/constants';
import { Box } from '@chakra-ui/react';
import { Suspense } from 'react';
import { SkeletonSection } from '@/components';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'This is the Home page in a comprehensive e-commerce web application designed to facilitate online shopping.',
};

// Pages

type THome = {
  searchParams: Promise<{
    limit?: number;
    page?: string;
  }>;
};

const Home = async ({ searchParams }: THome) => {
  const { limit = PAGE_SIZE, page = '1' } = (await searchParams) || {};

  const queryConfigs = {
    limit: limit,
    page: page,
  };

  return (
    <Box>
      <Suspense fallback={<SkeletonSection length={4} />}>
        <HomePage queryConfigs={queryConfigs} />
      </Suspense>
    </Box>
  );
};

export default Home;
