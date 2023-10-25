import React, {useEffect, useState} from "react";

import {createNativeStackNavigator}
from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator}
from "@react-navigation/bottom-tabs";

import Login from './pages/login';
import ListaNota from "./pages/lista-nota";
import { UseSelector } from "react-redux";
import { UserService } from "./services";
import {Store} from './store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App(){
    const BottomTabNavigator = () => {
        return (
            <Tab.Navigator>
                <Tab.Screen name="ListaNota" component={ListaNota} />
                {/* <Tab.Screen
                        name="Login"
                        component={Login}
                        options={{title: 'Notas'}}/> */}
            </Tab.Navigator>
        );
    };
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={
                    Store.getState()[UserService.reducerKey]?.token
                    ? 'BottomTabNavigator'
                    : 'Login'
                }>
                <Stack.Screen component={Login} name="Login" />
                <Stack.Screen
                    component={BottomTabNavigator}
                    name="BottomTabNavigator"
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}