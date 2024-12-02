'use client';

// Component
import { CartIcon, HamburgerIcon, HeartIcon, LineIcon, LogoIcon, Logout } from '@/icons';

// Constants
import { ROUTER } from '@/constants';
import { Button, Sheet, Stack, XStack, YStack } from 'tamagui';
import { useState } from 'react';
import Link from 'next/link';
import { Heading, Text } from '@/universal';

type TSidebarProps = {
  totalQuantity: number;
  onClick?: () => void;
};

const ExpandSidebar = ({ totalQuantity, onClick }: TSidebarProps) => {
  const [isOpen, setOpen] = useState(false);
  const [position, setPosition] = useState(0);
  return (
    <>
      <Stack onPress={() => setOpen((prev) => !prev)} left="-15px" data-testid="button-hamburger">
        <HamburgerIcon />
      </Stack>
      <Sheet
        forceRemoveScrollEnabled={isOpen}
        open={isOpen}
        onOpenChange={setOpen}
        dismissOnSnapToBottom
        snapPoints={[60]}
        // snapPointsMode="mixed"
        position={position}
        onPositionChange={setPosition}
        zIndex={100}
        animation="medium"
      >
        <Sheet.Overlay animation="lazy" />
        <Sheet.Handle />
        <Sheet.Frame
          width="$full"
          justifyContent="center"
          alignItems='flex-start'
          paddingHorizontal={25}
          gap="10px"
          backgroundColor="$backgroundButtonQuantity"
        >
          <Stack position='absolute' top={10} right={10}>
            <Button size="$6" onPress={() => setOpen(false)}>
              Close
            </Button>
          </Stack>
          <Link href="/" as="h1" style={{ marginBottom: '27.5px' }}>
            <LogoIcon />
          </Link>
          <LineIcon />

          <YStack width='100%' gap="15px" alignItems="flex-start">
            <XStack width="100%" borderBottomWidth="1px" borderColor="$borderSecondaryInput" paddingBottom="10px" gap={10}>
              <HeartIcon />
              <Heading>Favorites</Heading>
            </XStack>

            <XStack width="100%" borderBottomWidth="1px " borderColor="$borderSecondaryInput" paddingBottom="10px" gap={10}>
              <Link href={ROUTER.CART} style={{ textDecoration: 'none' }}>
                <Stack position="relative" opacity={1} transition=".2s ease-in" hoverStyle={{ opacity: 0.8 }}>
                  <CartIcon />
                  <Stack
                    width="20px"
                    height="20px"
                    backgroundColor="$backgroundTotalQuantity"
                    borderRadius="100%"
                    alignItems="center"
                    justifyContent="center"
                    position="absolute"
                    top={-10}
                    right={-10}
                  >
                    <Text size="small" variant='primary'>
                      {totalQuantity}
                    </Text>
                  </Stack>
                </Stack>
              </Link>
              <Heading>Cart</Heading>
            </XStack>

            <XStack
              width="100%"
              borderBottomWidth="1px"
              borderColor="$borderSecondaryInput"
              paddingBottom="10px"
              onPress={onClick}
              cursor="pointer"
              data-testid="button-logout"
              gap={10}
            >
              <Logout />
              <Heading>Logout</Heading>
            </XStack>
          </YStack>
        </Sheet.Frame>
      </Sheet >
    </>
  );
};

export default ExpandSidebar;
