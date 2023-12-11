import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/components/routes';

import { Navigation } from './src/components/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
        <Navigation/>
    </NavigationContainer>
    
  );
}