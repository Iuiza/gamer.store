import { Ionicons } from '@expo/vector-icons'
import { Text, StyleSheet, SafeAreaView, Pressable, Alert } from 'react-native'
import Cores from '@/src/data/constants/Cores'

export default function Usuario({ navigation }: any) {
    return (
        <SafeAreaView style={styles.container}>
            <Pressable
                style={styles.botao}
                onPress={() => {
                    navigation.navigate('UltimasCompras')
                }}
            >
                <Ionicons name="cart-outline" size={22} style={styles.botaoTexto} />
                <Text style={styles.botaoTexto}>Últimas compras</Text>
            </Pressable>
            <Pressable
                style={styles.botaoLogout}
                onPress={() => {
                    Alert.alert('Logout', 'Logout feito com sucesso!', [{ text: 'OK' }])
                }}
            >
                <Ionicons name="log-out-outline" size={22} style={styles.botaoTexto} />
                <Text style={styles.botaoTexto}>Logout</Text>
            </Pressable>
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
    botaoLogout: {
        color: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff3030',
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
