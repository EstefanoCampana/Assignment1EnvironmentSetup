import { StyleSheet, Text, View } from "react-native";

const NotificationsPage = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>discord</Text>
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
        paddingLeft: 16,
    },
    text: {
        color: "#ffffff",
        fontSize: 24,
        fontWeight: "bold",

    },
    
});

export default NotificationsPage;