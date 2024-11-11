import { styled, TamaguiProvider, Theme, View } from '@tamagui/core';
import config from './tamagui.config'; // your configuration
import './App.css'
import { Button, Heading } from './components';

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
        <Heading fontSize='$11'>Tamagui heading</Heading>
        <Button isLoading variant='default' fit={true}>Text</Button>
      </Theme>
    </TamaguiProvider>
  )
}
