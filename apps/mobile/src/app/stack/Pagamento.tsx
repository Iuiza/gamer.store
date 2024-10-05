import { StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native'

export default function Pagamento() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.containerScroll}>
                <Text style={styles.titulo}>Forma de Pagamento</Text>
                <Text style={styles.titulo}>Dados da Entrega</Text>
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
    },
    containerScroll: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
})
