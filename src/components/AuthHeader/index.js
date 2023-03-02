import React from "react";
import { Pressable, Text, Image, View } from "react-native";
import { styles } from "./styles";

const AuthHeader = ({title, onBackPress}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onBackPress}>
                <Image style={styles.image} source={require('../../assets/auth_back.png')} />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default AuthHeader;