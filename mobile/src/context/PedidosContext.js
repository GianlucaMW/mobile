import React, { createContext, useContext, useReducer } from 'react';

const PedidosContext = createContext();

const initialState = {
    pedidos: [],
};

const PedidosReducer = (state, action) => {
    switch (action.type) {
        case 'cadastrar_pedido':
            return {
                ...state,
                pedidos: [...state.itens, action.payload],
            };
        default:
            return state;
    };
};

const PedidosProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PedidosReducer, initialState);

    return (
        <PedidosContext.Provider value={{ state, dispatch}}>
            {children}
        </PedidosContext.Provider>
    );
};


const UsePedidos = () => {
    const context = useContext(PedidosContext);
    
    if (!context) {
        throw new Error('UsePedidos deve ser utilizados dentro de um PedidosProvider');
    }
    return context;
};


export { PedidosProvider, UsePedidos };