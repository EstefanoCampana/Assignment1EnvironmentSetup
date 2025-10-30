
import { Link } from "expo-router";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const AlertDisplay = () => {

        return (
        <Link href='/components/messagePage' style={styles.iconSize} asChild>
        <TouchableOpacity>
            <Image source={require('../../assets/images/5431-chat.png')} 
            style={{height: 60, width:60}}/>
        </TouchableOpacity>
        </Link>
    );
};

export default AlertDisplay;

const styles = StyleSheet.create({

    iconSize: {
        position: 'absolute',
        bottom: 60,
        right: 10,
    },
});

