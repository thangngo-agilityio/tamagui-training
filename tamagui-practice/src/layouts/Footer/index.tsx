'use client'

import { Circle, Image, Stack, useMedia, XStack, YStack } from 'tamagui';

// Components
import { NavFooter, SwitchTheme } from '@/components';
import { LineDownIcon, LogoWhiteIcon } from '@/icons';

// Constants
import { FOOTER_COMPANY_LIST, FOOTER_SERVICE_LIST } from '@/constants';
import { Button, Heading, Text } from '@/universal';

const Footer = () => {
  const { gtMd } = useMedia();
  return (
    <>
      {
        gtMd ? (
          <YStack position='relative'>
            <Image
              source={{ uri: "/images/background-footer-secondary.svg" }}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: 'unset',
                objectFit: 'contain',
              }}
            />
            <Stack
              width="92%"
              justifyContent="center"
              alignItems='center'
              backgroundColor="$BackgroundFooter"
              boxShadow="50px 130px 100px rgba(0, 0, 0, 14.59%)"
              marginTop="-276px"
              marginBottom="64px"
            >
              <YStack width="100%" maxWidth="1512px" paddingHorizontal="252px" paddingVertical="74px">
                <Heading
                  maxWidth="864px"
                  size="ultraHuge"
                  variant="septenary"
                  marginBottom="48px"
                >
                  Let’s make your space amazing together.
                </Heading>
                <Button variant="footer" style={{ textTransform: 'uppercase' }}>
                  Let&apos;s get started
                </Button>
              </YStack>
            </Stack>
            <Stack justifyContent="center" alignItems='center'>
              <YStack width="100%" maxWidth="1512px" paddingHorizontal="172px">
                <XStack marginBottom="62px">
                  <Stack position="relative" flex={2}>
                    <XStack gap="120px">
                      <YStack>
                        <Heading marginBottom="22px" variant="primary" size="middleLarge">
                          Service
                        </Heading>
                        <YStack gap="10px" >
                          {FOOTER_SERVICE_LIST.map((item) => (
                            <NavFooter
                              key={item.id}
                              path={item.path}
                              name={item.name}
                            />
                          ))}
                        </YStack>
                      </YStack>
                      <YStack >
                        <Heading marginBottom="22px" variant="primary" size="middleLarge">
                          Company
                        </Heading>
                        <YStack gap="10px" >
                          {FOOTER_COMPANY_LIST.map((item) => (
                            <NavFooter
                              key={item.id}
                              path={item.path}
                              name={item.name}
                            />
                          ))}
                        </YStack>
                      </YStack>
                    </XStack>
                    <Stack position="absolute" top={0} right={0}>
                      <LineDownIcon />
                    </Stack>
                  </Stack>
                  <Stack flex={1} paddingLeft="166px">
                    <YStack >
                      <Heading marginBottom="22px" variant="primary" size="middleLarge">
                        Get in Touch
                      </Heading>
                      <Text maxWidth="282px" variant="footer" size="medium" marginBottom="24px">
                        Feel free to get in touch with us vai email
                      </Text>
                      <Text variant="footerPrimary" size="ultraLarge" marginBottom="28px">
                        minifurs@gmail.com
                      </Text>
                      <XStack alignItems="center" gap="12px">
                        <Circle size='35px'
                          backgroundColor="$backgroundFooterItem" />
                        <SwitchTheme />
                        <Stack
                          width="35px"
                          height="35px"
                          borderRadius="$full"
                          backgroundColor="$backgroundFooterItem"
                        />
                        <Stack
                          width="35px"
                          height="35px"
                          borderRadius="$full"
                          backgroundColor="$backgroundFooterItem"
                        />
                        <Stack
                          width="35px"
                          height="35px"
                          borderRadius="$full"
                          backgroundColor="$backgroundPrimary"
                        />
                        <Stack
                          width="35px"
                          height="35px"
                          borderRadius="$full"
                          backgroundColor="$backgroundFooterItem"
                        />
                      </XStack>
                    </YStack>
                  </Stack>
                </XStack>
                <XStack
                  width="100%"
                  borderTopWidth="1px"
                  borderColor="border.100"
                  justifyContent="space-between"
                  alignItems="center"
                  paddingRight="30px"
                  paddingTop="8px"
                  paddingBottom="14px"
                >
                  <Stack>
                    <LogoWhiteIcon />
                  </Stack>
                  <Text variant="copyright" size="small">
                    &copy; 2020@webovio. All Rights Reserved.
                  </Text>
                </XStack>
              </YStack>
            </Stack>
          </YStack>
        ) : (
          <Stack height="90px" borderTopWidth="1px" borderColor="$borderPrimaryInput" />
        )
      }
    </>
  );
}

export default Footer;
