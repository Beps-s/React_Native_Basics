import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    agreeText: {
        marginHorizontal: 14,
        color: colors.blue,
    },
    agreeTextBold: {
        fontWeight: 'bold',
    },
});