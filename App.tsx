import Principal from "./src/Principal";
import { NativeBaseProvider, StatusBar } from 'native-base'

import { TEMAS } from './src/estilos/temas/temas'

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <Principal />
    </NativeBaseProvider>
  );
}

