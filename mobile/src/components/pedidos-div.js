import { View, Text} from 'react-native';
import Atualizar from '../../assets/Atualizar.svg'

export function DivPedidos(){
    
    return(
        <View className='w-[290] h-8 bg-gray-300 rounded-full p-1 flex-row items-center justify-between mb-2'> 
            <View className='flex-row items-center'>
                <View className='w-6 h-6 rounded-full bg-slate-500'/>
                <Text> Pedidos</Text>
            </View>

            <View className='h-6 mr-1 w-auto'>
                <Atualizar/>
            </View>
        </View>
    )
}