import { StyleSheet, SafeAreaView, Text, Pressable } from 'react-native'

export default function Inicio({ navigation }: any) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{color: 'white'}}>Início</Text>
                <Pressable onPress={() => navigation.navigate('ProdutoDetalhes')}>
                    <Text style={{color: 'white'}}>Produto Detalhes</Text>
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
})
