'use client'

import Link from 'next/link';
import { Stack } from 'tamagui';

// Component
import { Button, Heading, Text } from '@/universal';

// Constants
import { ROUTER } from '@/constants';

// Icons
import { SuccessIcon } from '@/icons';

const OrderSuccess = () => (
  <Stack
    paddingTop="202px"
    paddingHorizontal='28px'
    paddingBottom='100px'
    alignItems="center"
    justifyContent="center"
    $gtMd={{
      paddingHorizontal: 0,
      paddingBottom: '468px'
    }}
  >
    <SuccessIcon />
    <Heading variant="orderSuccess" size="semiHuge" marginBottom="10px">
      Your Order has been accepted
    </Heading>
    <Text size="large" variant="orderSuccess" marginBottom="70px">
      Your item is being processed! A confirmation email will be sent to you!
    </Text>
    <Link
      href={ROUTER.HOME}
      style={{
        width: 300,
        textAlign: 'center',
        backgroundColor: '#284F49',
        borderRadius: '15px',
        textDecoration: 'none',
        padding: 10,
        color: '#FFF'
      }}
    >
      Back home
    </Link>
  </Stack>
);

export default OrderSuccess;
