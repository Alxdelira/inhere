import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
    name: string;
    onRemove: () => void;
}


export default function Participante({ name, onRemove }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.nome}>
                {name}
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={onRemove}
            >
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}