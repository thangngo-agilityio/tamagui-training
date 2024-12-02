'use client'
import { useThemeContext } from '@/providers/Tamagui';
import { useState } from 'react';
import { Button } from 'tamagui'

type TSwitchTheme = {
  bgColor: string
}

const SwitchThemeButton = ({ bgColor }: TSwitchTheme) => {
  const { toggleTheme } = useThemeContext();

  return <Button onPress={toggleTheme} width="35px"
    height="35px"
    borderRadius="$full"
    backgroundColor={bgColor} />;
}
export default SwitchThemeButton

