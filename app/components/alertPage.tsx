
import { useRouter } from "expo-router";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const AlertDisplay = () => {

    const router = useRouter();

        return (
        <TouchableOpacity onPress={() => router.navigate('../components/messagePage')}>
            <Image source={require('../../assets/images/5431-chat.png')} 
            style={styles.iconSize}/>
        </TouchableOpacity>
    );
};

export default AlertDisplay;

const styles = StyleSheet.create({

    iconSize: {
        position: 'absolute',
        bottom: 60,
        right: 10,
        width: 60,
        height: 60,
    },
});

