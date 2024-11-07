import { styled, TamaguiProvider, Text, View } from '@tamagui/core';
import config from './tamagui.config'; // your configuration
import './App.css'

const StyledView = styled(View, {
  padding: 10,
})

const Text1 = styled(Text, {
  color: 'green',
})


export default function App() {
  return (

    <TamaguiProvider config={config}>
      <StyledView
        backgroundColor="red"
        hoverStyle={{
          backgroundColor: 'green'
        }}
      />
      <Text1>Tamagui</Text1>
    </TamaguiProvider>
  )
}
