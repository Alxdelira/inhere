
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View, } from "react-native";
import { styles } from './styles'
import Participante from "./components/Participante";
import { useState } from "react";

export default function Home() {
    const [participantes, setParticipantes] = useState<string[]>([])
    const [participanteName, setParticipanteName] = useState('')
    const data = new Date();
    const dias = new Array(
        'domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'
    );
    const meses = new Array(
        'Janeiro', 'fevereiro','março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    );

    function handlerParticipanteAdd() {
        if (participantes.includes(participanteName)) {
            return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome')
        }

        setParticipantes(prevState => [...prevState, participanteName])
        setParticipanteName('')
    }

    function handlerParticipanteRemove(name: string) {

        Alert.alert("Remover", `Deseja remover o participante ${name} ?`, [
            {
                text: 'Sim',
                onPress: () => setParticipantes(prevState => prevState.filter(participante => participante !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])

    }
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>
            <Text style={styles.eventDate}>
                {dias[data.getDay()]}, {meses[data.getMonth()]} de {data.getFullYear()}
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Participante ..."
                    placeholderTextColor="#6b6b6b"
                    onChangeText={setParticipanteName}
                    value={participanteName}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handlerParticipanteAdd}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participantes}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participante
                        key={item}
                        name={item}
                        onRemove={() => handlerParticipanteRemove(item)}

                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Nimguem Chegou no Evento ainda? Adicione os participantes na sua lista de presença
                    </Text>
                )}
            />



        </View>
    )
}