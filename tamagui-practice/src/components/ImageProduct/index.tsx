'use client'

import Image from 'next/image';
import { YStack } from 'tamagui';

type TImageProduct = {
  image: string[];
  alt: string;
};

const ImageProduct = ({ image, alt }: TImageProduct) => (
  <YStack borderRadius="sm" flex={1} gap="10px" $gtMd={{ minWidth: '547px' }}>
    {
      image.map((link, index) => (
        <Image
          key={index}
          width={647}
          height={549}
          src={link}
          alt={alt}
          style={{ backgroundSize: '100%', borderRadius: '8px', width: '100%' }}
        />
      ))
    }
  </YStack >
);

export default ImageProduct;
