import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Header } from "../components/header";
import Pesquisar from '../../assets/Pesquisar.svg';
import Add from '../../assets/ADD.svg';


export function Pedidos({ navigation }) {
  const goToCadastrarPedidos = () => {
    navigation.navigate('CadastrarPedidos');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: 'your-bg-color' }}>
      <Header />

      <Text style={{ color: 'white', fontSize: 32, marginTop: 3, alignSelf: 'center' }}>Pedidos</Text>

      <View style={{ backgroundColor: 'your-card-bg-color', width: 320, height: 560, margin: 'auto', borderRadius: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 3, elevation: 5, alignItems: 'center' }}>
        <View style={{ width: 300, height: 40, alignItems: 'center', borderRadius: 30, backgroundColor: 'rgba(255, 255, 255, 0.1)', marginTop: 2, flexDirection: 'row', padding: 2, justifyContent: 'space-between' }}>
          <Pesquisar />
          <TextInput
            style={{ marginLeft: 2, width: 200, height: 30, margin: 2, color: 'white' }}
            onChangeText={(text) => console.log(text)}
            placeholder='Pesquisar'
          />
          <View style={{ width: 8 }}>
            <Add />
          </View>
        </View>
        <View style={{ width: '90%', height: 2, backgroundColor: 'gray', margin: 2, borderRadius: 10 }} />

        <View style={{ flex: 1, alignItems: 'center', marginTop: 4 }}>
          <TouchableOpacity style={{ backgroundColor: 'blue', padding: 2, borderRadius: 10, marginBottom: 2 }}>
            <Text style={{ color: 'white' }}>Ver Pedidos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'green', padding: 2, borderRadius: 10, marginBottom: 2 }}>
            <Text style={{ color: 'white' }} onPress={goToCadastrarPedidos}>Cadastrar Pedidos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'yellow', padding: 2, borderRadius: 10, marginBottom: 2 }}>
            <Text style={{ color: 'white' }}>Editar Pedidos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'red', padding: 2, borderRadius: 10, marginBottom: 2 }}>
            <Text style={{ color: 'white' }}>Excluir Pedidos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
