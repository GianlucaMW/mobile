import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Pedidos } from './caminho/para/seu/arquivo/Pedidos';
import { CadastrarPedidos } from './caminho/para/seu/arquivo/CadastrarPedidos';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pedidos">
        <Stack.Screen name="Pedidos" component={Pedidos} />
        <Stack.Screen name="CadastrarPedidos" component={CadastrarPedidos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
