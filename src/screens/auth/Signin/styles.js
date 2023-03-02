import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    button: {
        marginVertical: 20
    },
    footerText: {
        color: colors.blue,
        textAlign: 'center',
        marginBottom: 56
    },
    footerLink: {
        fontWeight: 'bold'
    }
})