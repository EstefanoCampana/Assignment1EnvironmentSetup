import { Image, StyleSheet, Text, View } from "react-native";

const pfp1 = require('../../assets/images/lasergreen.png');
const NotificationsPage = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.topRow}>
                <Text style={styles.Discord}>Discord</Text>
            </View>
            <View style={styles.bottomRow}>
                <Image style = {styles.notify} source={pfp1}></Image>
                <Text style={styles.text}>You: Toby Fox</Text>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e2124",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 40,
        paddingLeft: 20,
    },
    Discord: {
        color: "#ffffff",
        fontSize: 24,
        fontWeight: "bold",

    },
    notify: {
        resizeMode: "cover",
        borderRadius: 60,
        height: 60,
        width: 60,
    },
    text: {
        fontSize: 10,
        color: "#ffffff92",
    },
    bottomRow:{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between", 
        alignItems: "center",
        width: "100%",
        marginBottom: 20,

    }

    
});

export default NotificationsPage;