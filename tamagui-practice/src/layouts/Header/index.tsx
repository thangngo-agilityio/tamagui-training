import { Box, Flex, Hide, Show, Skeleton, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

// Components
import { InputSearch } from '@/components';

// Icons
import { ArrowIcon, LogoIcon, LogoMobile } from '@/icons';

// Constants
import { ROUTER } from '@/constants';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { ICartItem } from '@/types';

const Navigation = dynamic(() => import('@/components/Navigation'));

type THeader = {
  cartItems: ICartItem[];
};

const Header = ({ cartItems }: THeader) => (
  <Flex
    as="header"
    w="100%"
    justifyContent="center"
    position={{ base: 'absolute', lg: 'unset' }}
    flexDir={{ base: 'column', lg: 'unset' }}
    px={{ base: '20px', lg: '52px' }}
  >
    <Flex
      w="100%"
      maxW="1512px"
      pt="40px"
      pb="24px"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack w="100%" flexDirection="row" alignItems="center">
        <Box ml={{ base: '-20px', lg: 'unset' }}>
          <Link href={ROUTER.HOME} title="Home">
            <Show above="lg">
              <LogoIcon />
            </Show>
            <Hide above="lg">
              <LogoMobile />
            </Hide>
          </Link>
        </Box>
        <Show above="lg">
          <Stack flexDirection="row" alignItems="center">
            <Flex ml="36px" alignItems="center" gap={1}>
              <Text size="lg">Space Builder</Text>
              <Text variant="tertiary">(Coming soon)</Text>
              <ArrowIcon />
            </Flex>
            <Flex
              as={Link}
              href={ROUTER.PRODUCT}
              ml="40px"
              alignItems="center"
              gap={1}
              transition=".2s ease-in"
              _hover={{ opacity: '.8' }}
            >
              <Text size="lg">Products</Text>
              <ArrowIcon />
            </Flex>
          </Stack>
          <Box ml="22px" width="30%">
            <InputSearch />
          </Box>
        </Show>
      </Stack>
      <Suspense fallback={<Skeleton w="100px" h="40px" />}>
        <Navigation cartItem={cartItems} />
      </Suspense>
    </Flex>

    <Hide above="lg">
      <Box width="100%">
        <InputSearch />
      </Box>
    </Hide>
  </Flex>
);
export default Header;
