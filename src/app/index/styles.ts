import {StyleSheet} from "react-native"
import { colors } from "@/styles/colors"
export const styles = StyleSheet.create({
    container: {        
        borderColor: colors.gray[950],
        borderWidth: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    title: {
        color: colors.gray[500],
        fontSize: 50,
    },
    subTitle:{
        color: colors.green[900],
        fontSize: 22,
        fontFamily: "Times New Roman", 
    },
    contP:{
        color:colors.green[300], 
        fontSize: 10,
    }
})