'use client'

// Component
import {
  CartIcon,
  HamburgerIcon,
  HeartIcon,
  LineIcon,
  LogoIcon,
  Logout,
} from '@/icons';

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
      <Stack
        onPress={() => setOpen((prev) => !prev)}
        left="-15px"
        data-testid="button-hamburger"
      >
        <HamburgerIcon />
      </Stack>
      <Sheet
        forceRemoveScrollEnabled={isOpen}
        open={isOpen}
        onOpenChange={setOpen}
        dismissOnSnapToBottom
        snapPoints={[80]}
        // snapPointsMode='mixed'
        position={position}
        onPositionChange={setPosition}
        zIndex={100}
        animation="medium"
      >
        <Sheet.Overlay
          animation="lazy"
          backgroundColor='$backgroundMenu'
        />
        <Sheet.Handle />
        <Sheet.Frame width='$full' padding="$4" justifyContent="center" alignItems="center" gap="$5" backgroundColor='$backgroundMenu'>
          <Button size="$6" circular onPress={() => setOpen(false)}>Close</Button>
          <Link href="/" as="h1" style={{ marginBottom: '27.5px' }}>
            <LogoIcon />
          </Link>
          <LineIcon />

          <YStack gap="15px" alignItems="flex-start">
            <XStack
              width="100%"
              borderBottomWidth="1px solid"
              borderColor="border.500"
              paddingBottom="10px"
            >
              <HeartIcon />
              <Heading>Favorites</Heading>
            </XStack>

            <XStack
              width="100%"
              borderBottomWidth="1px "
              borderColor="$borderSecondaryInput"
              paddingBottom="10px"
            >
              <Link href={ROUTER.CART} style={{ textDecoration: 'none' }}>
                <Stack
                  position="relative"
                  opacity={1}
                  transition=".2s ease-in"
                  hoverStyle={{ opacity: .8 }}
                >
                  <CartIcon />
                  <Stack
                    width="20px"
                    height="20px"
                    backgroundColor="$backgroundTotalQuantity"
                    borderRadius="100%"
                    alignItems="center"
                    justifyContent="center"
                    position="absolute"
                    top={-3}
                    right={-3}
                  >
                    <Text size="small" variant="secondary">
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
            >
              <Logout />
              <Heading>Logout</Heading>
            </XStack>
          </YStack>
        </Sheet.Frame>
      </Sheet>
    </>
  );
};

export default ExpandSidebar;
