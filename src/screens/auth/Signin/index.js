import React, { useState } from "react";
import { View, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { styles } from "./styles";

import { SafeAreaView } from "react-native-safe-area-context";

const Signin = ({navigation}) => {
    const [checked, setChecked] = useState(false);

    const onBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Sign In" />
                <Input label="Email" placeholder="example@gmail.com" />
                <Input isPassword label="Password" placeholder="********" />
                <Button style={styles.button} onPress={() => console.log('Clicked')} title="Sign Up" />
                <Separator text="Or sign in with" />
                <GoogleLogin />
                <Text style={styles.footerText}>Don't have an account? <Text style={styles.footerLink}>Sign Up</Text></Text>
            </View>
        </SafeAreaView>
    )
}

export default Signin;