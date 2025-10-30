import { Image, StyleSheet, Text, View } from "react-native";

const pfp1 = require('../../assets/images/lasergreen.png');
const pfp2 = require('../../assets/images/henry2.png');
const pfp3 = require('../../assets/images/joe swag.png');
const p2 = require('../../assets/images/server12.png');
const p3 = require('../../assets/images/server16.jpg');
const p4 = require('../../assets/images/server17.jpg');
const p5 = require('../../assets/images/server20.jpg');
const p6 = require('../../assets/images/server13.png');
const server1 = require('../../assets/images/server1.png');
const server2 = require('../../assets/images/server2.png');
const server3 = require('../../assets/images/server3.png');

const NotificationsPage = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.topRow}>
                <Text style={styles.Discord}>Notifications</Text>
            </View>
            <View style={styles.Recent}>
                <View style={styles.avatar}>
                    <Image style={styles.notify} source={pfp2}></Image>
                    <View style={styles.statusDot}></View>
                </View>
                    
                <View style={{flex: 1}}>
                    <Text style={styles.Request}>Henry2 sent you a friend request</Text>
                    <View style={styles.button}>
                        <View style={styles.bluebutton}>
                            <Text style={styles.buttontext}>Accept</Text>
                        </View>
                        <View style={styles.greybutton}>
                            <Text style={styles.buttontext}>Ignore</Text>
                        </View>
                    </View>
                </View>
                   
            </View>
            <View style={styles.Recent}>
                <Text style={styles.RecentActivity}>Recent Activity</Text>
            </View>
            <View style={styles.bottomRow}>
                <Image style = {styles.notify} source={pfp2}></Image>
                <Text style={styles.text}>blah blah</Text>
            </View>
            <View style={styles.bottomRow}>
                <Image style = {styles.notify} source={pfp3}></Image>
                <Text style={styles.text}>blah blah</Text>
            </View>
            <View style={styles.bottomRow}>
                <Image style = {styles.notify} source={p2}></Image>
                <Text style={styles.text}>blah blah</Text>
            </View>
            <View style={styles.bottomRow}>
                <Image style = {styles.notify} source={p3}></Image>
                <Text style={styles.text}>blah blah blah</Text>
            </View>
            <View style={styles.bottomRow}>
                <Image style = {styles.notify} source={p4}></Image>
                <Text style={styles.text}>blah blah blah</Text>
            </View>
            <View style={styles.bottomRow}>
                <Image style = {styles.notify} source={p5}></Image>
                <Text style={styles.text}>blah blah blah</Text>
            </View>
            <View style={styles.bottomRow}>
                <Image style = {styles.notify} source={p6}></Image>
                <Text style={styles.text}>blah blah</Text>
            </View>
            <View style={styles.bottomRow}>
                <Image style = {styles.notify} source={server1}></Image>
                <Text style={styles.text}>blah blah blah</Text>
            </View>
            <View style={styles.bottomRow}>
                <Image style = {styles.notify} source={server2}></Image>
                <Text style={styles.text}>blah blah blah</Text>
            </View>
            <View style={styles.bottomRow}>
                <Image style = {styles.notify} source={server3}></Image>
                <Text style={styles.text}>blah blah blah</Text>
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
        fontSize: 20,
        color: "#ffffff92",
    },
    bottomRow:{
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        marginBottom: 20,
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between", 
        alignItems: "center",
        width: "100%",
        marginBottom: 20,

    },
    Recent: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginBottom: 25,
        width: "100%",

    },
    RecentActivity: {
        color: "#616161ff",
        fontSize: 15,
        fontWeight: "bold",
    },
    Request: {
        color: "#ffffffff",
        fontSize: 15,
        fontWeight: "bold",
    },

    button: {
        flexDirection: "row",
        gap: 10,
        marginTop: 8,
    },
    bluebutton: {
        backgroundColor: "#6445ffff",
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 18,
        alignItems: "center",
        justifyContent: "center",
    },
    greybutton: {
        backgroundColor: "#5f5f5fff", 
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 18,
        alignItems: "center",
        justifyContent: "center",
        
    },
    buttontext: {
        color: "#ffffffff",
        fontWeight: "bold",
        fontSize: 15,
    },
    avatar: {
        position: "relative",
        width: 60,
        height: 60,
    },
    statusDot: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 15,
        height: 15,
    borderRadius: 6,
    backgroundColor: "#3BA55D", 
    borderWidth: 2,
    borderColor: "#1e2124",
    }
    
        
});

export default NotificationsPage;