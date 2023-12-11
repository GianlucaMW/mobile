import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Header } from '../components/header';
import { Navigation } from '../components/TabNavigator';
import { UsePedidos } from '../context/PedidosContext';

export function VerPedidos () {
    const [ idPesquisa, setIdPesquisa ] = useState('');
    const { pedidos } = UsePedidos();
    
    const handlePesquisa = () => {
        if (!pedidos || pedidos.length === 0) {
            console.log('Nenhum pedido encontrado: ', pedidos);
            return;
        }
        console.log('Pedidos: ', pedidos);
        console.log('ID do Pedido: ', idPesquisa);

        const pedidosFiltrados = pedidos.filter(pedidos => pedidos.id === idPesquisa);

        console.log('Pedidos encontrados; ', pedidosFiltrados);
    };
    return (
        <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#121212' }}>
            <Header />

            <Text style={{ color: 'white', fontSize: 32, marginTop: 3, marginLeft: 'auto', marginRight: 'auto' }}>
                Ver Pedidos
            </Text>

            <View style={{ backgroundColor: 'white', width: '80%', height: 560, margin: 'auto', borderRadius: 20, alignItems: 'center '}}>

                <TextInput style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 5, borderRadius: 10, padding: 5 }}
                placeholder='Pesquisar por ID'
                value={idPesquisa}
                onChangeText={setIdPesquisa}
            />

            <View style={{ width: '90%', height: 2, backgroundColor: 'gray', margin: 5, borderRadius: 10 }} />

            <TouchableOpacity onPress={handlePesquisa} style={{ backgroundColor: 'yellow', padding: 10, borderRadius: 10, margin: 10 }}>
                <Text style={{ color: 'white' }}>Pesquisar por ID</Text>
            </TouchableOpacity>

            <FlatList
                data={pedidos}
                keyExtractor={(pedidos, index) => index.toString()}
                renderItem={({ pedidos }) => (
                    <View style={{ backgroundColor: 'white', padding: 10, margin: 5, borderRadius: 10 }}>
                        <Text>{`ID: ${pedidos.id}, Nome: ${pedidos.nome}, Descrição: ${pedidos.descricao}, Valor: ${pedidos.valor}`}</Text>
                    </View>
                )}
            />
            </View>
            <Navigation />
        </View>
    );
}



