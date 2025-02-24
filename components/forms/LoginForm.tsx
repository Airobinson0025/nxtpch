import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import CustomButton from "../ui/CustomButton";

export default function LoginForm() {

    // Store input values in state
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    // Set to track if form is being submitted
    const [ isSubmitting, setIsSubmitting ] = useState(false);

    // Validation for form
    const validateForm = () => {
        if ( !email || !password) {
            Alert.alert('Validation Error', 'Email and Password are required');
            return false;
        }
        return true;
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    ></TextInput>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    ></TextInput>
            </View>

            <CustomButton title="Login" onPress={() => {}} />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 40,
    },
    inputContainer: {},
    label: {
        marginBottom: 5,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 17,
    },
    button: {
        height: 40,
        justifyContent: 'center',
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: 5,
    }
})