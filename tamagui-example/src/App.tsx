import { TamaguiProvider } from '@tamagui/core';
import config from './tamagui.config'; // your configuration
import './App.css'

export default function App() {
  return (
    <TamaguiProvider config={config}>
      Text
    </TamaguiProvider>
  )
}