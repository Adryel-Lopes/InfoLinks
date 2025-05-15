import {View, Text, StyleSheet} from "react-native"
import {styles} from "./styles"
import { green } from "react-native-reanimated/lib/typescript/Colors";


export default function Index (){
    return (
        <View style={styles.container}>
            <Text style={{ color: "blue", fontSize: 22 }}>olá mundo!</Text>
            <Text style={styles.title} >Adryel</Text>
            <Text style={styles.subTitle}>Endereço</Text>
            <Text style={styles.contP}>Data de nascimento</Text>
        </View>
    );
} 


