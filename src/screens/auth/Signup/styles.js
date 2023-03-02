import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    agreeText: {
        color: colors.blue,
        marginHorizontal: 14
    },
    agreeTextBold: {
        fontWeight: '700'
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