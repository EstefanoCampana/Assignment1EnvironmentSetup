import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AlertDisplay = () => {
    const [visible, setVisible] = useState(false);
    return (
        <View style={styles.container}>
                {visible && (
                <View style={styles.alertContainer}>
                    <Text style={styles.alertMessage}>Alert Button Pressed</Text>
                </View>
            )}
            <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => setVisible(!visible)}>
                <Image 
                    source={require('../../assets/images/5431-chat.png')} 
                    style={styles.iconSize}
                />
            </TouchableOpacity>
        </View>
    );
};
export default AlertDisplay;

const styles = StyleSheet.create({

    container: {
        flex: 1,

    },

    alertContainer: {
        position: 'absolute',
    },

    alertMessage: {
        fontSize: 30,
        color: '#ffffff',
        backgroundColor: '#000000',
        marginLeft: 140,
        right: 70,
        bottom: 200,
        padding: 20,
    },

    iconButton: {
        position: 'absolute',
        bottom: 40,
        right: 0,
    },
    
    iconSize: {
        width: 55,
        height: 55,
    },
});

