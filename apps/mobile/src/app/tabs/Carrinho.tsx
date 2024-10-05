import { StyleSheet, SafeAreaView, ScrollView, Pressable, Text } from 'react-native'
import Cores from '@/src/data/constants/Cores'

export default function Carrinho({ navigation }: any) {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingVertical: 20, width: '100%' }}>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E001D',
        width: '100%',
    },
    botao: {
        color: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Cores.PRIMARIA,
        alignSelf: 'center',
        borderRadius: 9999,
        height: 40,
        marginVertical: 20,
        paddingHorizontal: 50,
        gap: 8,
    },
    botaoTexto: {
        color: '#FFF',
    },
})
