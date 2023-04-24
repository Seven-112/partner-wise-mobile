
import 'expo-dev-client';
import { NavigationContainer } from '@react-navigation/native';
import GlobalNavigation from './src/navigation/global_navigation';

export default function App() {
  return (
    <NavigationContainer>
      <GlobalNavigation />
    </NavigationContainer>
  )
}

