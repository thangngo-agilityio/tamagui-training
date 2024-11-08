import { styled, TamaguiProvider, Theme, View } from '@tamagui/core';
import config from './tamagui.config'; // your configuration
import './App.css'
import { Heading } from './components';

const StyledView = styled(View, {
  padding: 10,
})

export default function App() {
  return (

    <TamaguiProvider config={config}>
      <Theme name='light_web'>
        <StyledView
          backgroundColor="red"
          hoverStyle={{
            backgroundColor: 'green'
          }}
        />
        <Heading>Tamagui heading</Heading>
      </Theme>
    </TamaguiProvider>
  )
}
