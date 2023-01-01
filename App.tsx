import { StatusBar, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { THEME } from './src/theme';
import { SignIn } from '@screens/SignIn';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});
  
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      { fontsLoaded ? <SignIn /> : <Loading /> }
    </NativeBaseProvider>
  );
}