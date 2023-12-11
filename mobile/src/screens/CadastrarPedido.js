import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { UsePedidos } from '../context/PedidosContext';

export function CadastrarPedidos({ navigation }) {
    const { state, dispatch } = UsePedidos();
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');


    const handleCadastro = () => {

        const idExiste = state.pedidos.some(pedidos => pedidos.id === id);

        if (idExiste) {
            Alert.alert('Erro', 'Este ID está em uso. Por favor, escolha outro ID.');
            return;
        }

        if (!id || !nome || !descricao || !preco) {
            Alert.alert('Erro', 'Porfavor, preencha todos os campos.');
            return;
        }
        const NovoPedido = { id, nome, descricao, preco };

        dispatch({ type: 'cadastrar_pedido', payload: NovoPedido });


        setId('');
        setNome('');
        setDescricao('');
        setPreco('');

        Alert.alert('Sucesso', 'Pedido cadastrado com sucesso!');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#121212'}}>
            <Text style={{ color: 'white', fontSize: 32, marginTop: 3, marginLeft: 'auto', marginRight: 'auto' }}>
                Cadastrar Pedidos
            </Text>

            <View style={{ backgroundColor: 'white', width: '80%', height: 560, margin: 'auto', borderRadius: 20, alignItems: 'center' }}>
                <TextInput
                    style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 2, borderRadius: 10, padding: 2 }}
                    placeholder='ID do Pedido'
                    value={id}
                    onChangeText={setId}
                />
                <TextInput
                    style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 2, borderRadius: 10, padding: 2 }}
                    placeholder='Nome do Pedido'
                    value={nome}
                    onChangeText={setNome}
                />
                <TextInput
                    style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 2, borderRadius: 10, padding: 2 }}
                    placeholder='Descrição do Pedido'
                    value={descricao}
                    onChangeText={setDescricao}
                />
                <TextInput
                    style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 2, borderRadius: 10, padding: 2}}
                    placeholder='Preço do Pedido'
                    value={preco}
                    onChangeText={setPreco}
                />

                <View style={{ width: '90%', height: 2, backgroundColor: 'gray', margin: 2, borderRadius: 10 }} />

                <TouchableOpacity onPress={handleCadastro} style={{ backgroundColor: 'green', padding: 2, borderRadius: 10, margin: 2 }}>
                    <Text style={{ color: 'white' }}>Cadastrar Pedido</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}