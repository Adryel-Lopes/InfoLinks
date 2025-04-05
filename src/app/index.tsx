import {View, Text, StyleSheet} from "react-native"
import { red } from "react-native-reanimated/lib/typescript/Colors";

export default function Index (){
    return (
        <View>
            <Text style={{ color: "blue", fontSize: 22 }}>olá mundo!</Text>
            <Text style={styles.title} >Adryel</Text>
            <Text style={styles.subTitle}>Endereço</Text>
            <Text style={styles.contP}></Text>
        </View>
    );
} 
const styles = StyleSheet.create({
    title: {
        color: "red",
        fontSize: 50,
    },
    subTitle:{
        color: "green",
        fontSize: 22,
        fontFamily: "Times New Roman",
    },
    contP:{
        color:"navy",
        fontSize: 10,
    }
})