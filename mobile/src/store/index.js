import {createStore} from 'redux';
import { persistStore, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Reducers from '../reducers';

const persistConfig = {
    key: 'aulamobile',
    storage: AsyncStorage,
    timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, Reducers);

export const Store = createStore(persistedReducer);

// export const store = () => configureStore({
//     reducer: persistReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// })

export const Persistor = persistStore(Store);