import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    nome: {
        color: '#fff',
        flex: 1,
        fontSize: 16,
        marginLeft: 16
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor:'#e23c44',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
}) 
