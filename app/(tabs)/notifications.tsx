import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const pfp1 = require('../../assets/images/lasergreen.png');
const pfp2 = require('../../assets/images/henry2.png');
const pfp3 = require('../../assets/images/profile4.jpg');

const NotificationsPage = () =>{
    return(
        <SafeAreaView style={styles.container} edges={['top','left','right']}>
                <View style={styles.topRow}>
                    <Text style={styles.Discord}>Notifications</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
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
                    <Image style = {styles.notify} source={pfp3}></Image>
                    <View style={{flex: 0, flexDirection: "column", width: 230}}>
                        <Text style={styles.text}>Greentea replied to you in <Text style={{fontWeight: "bold"}}>Joe mama but greglet - osu deez</Text></Text>
                        <Text style={styles.secondaryText}>🦌</Text>
                    </View>
                    <Text style={styles.timeText}>2m</Text>
                </View> 
                <View style={styles.bottomRow}>
                    <Image style = {styles.notify} source={pfp1}></Image>
                    <View style={{flex: 0, flexDirection: "column", width: 230}}>
                        <Text style={styles.text}>LaserGreen replied to you in <Text style={{fontWeight: "bold"}}>Japanese Uni:</Text></Text>
                        <Text style={styles.secondaryText}>kinda yeah</Text>
                    </View>
                    <Text style={styles.timeText}>6m</Text>
                </View>
                <View style={styles.bottomRow}>
                    <Image style = {styles.notify} source={pfp1}></Image>
                    <View style={{flex: 0, flexDirection: "column", width: 230}}>
                        <Text style={styles.text}>LaserGreen replied to you in <Text style={{fontWeight: "bold"}}>Japanese Uni:</Text></Text>
                        <Text style={styles.secondaryText}>it does for me bc i switched to pc</Text>
                    </View>
                    <Text style={styles.timeText}>7m</Text>
                </View>
                <View style={styles.bottomRow}>
                    <Image style = {styles.notify} source={pfp1}></Image>
                    <View style={{flex: 0, flexDirection: "column", width: 230}}>
                        <Text style={styles.text}>LaserGreen replied to you in <Text style={{fontWeight: "bold"}}>Japanese Uni:</Text></Text>
                        <Text style={styles.secondaryText}>it is</Text>
                    </View>
                    <Text style={styles.timeText}>8m</Text>
                </View>
                <View style={styles.bottomRow}>
                    <Image style = {styles.notify} source={pfp1}></Image>
                    <View style={{flex: 0, flexDirection: "column", width: 230}}>
                        <Text style={styles.text}>LaserGreen replied to you in <Text style={{fontWeight: "bold"}}>Japanese Uni:</Text></Text>
                        <Text style={styles.secondaryText}>yeah</Text>
                    </View>
                    <Text style={styles.timeText}>8m</Text>
                </View>
                <View style={styles.bottomRow}>
                    <Image style = {styles.notify} source={pfp1}></Image>
                    <View style={{flex: 0, flexDirection: "column", width: 230}}>
                        <Text style={styles.text}>LaserGreen replied to you in <Text style={{fontWeight: "bold"}}>Japanese Uni:</Text></Text>
                        <Text style={styles.secondaryText}>ong</Text>
                    </View>
                    <Text style={styles.timeText}>9m</Text>
                </View>
                <View style={styles.bottomRow}>
                    <Image style = {styles.notify} source={pfp1}></Image>
                    <View style={{flex: 0, flexDirection: "column", width: 230}}>
                        <Text style={styles.text}>LaserGreen replied to you in <Text style={{fontWeight: "bold"}}>Japanese Uni:</Text></Text>
                        <Text style={styles.secondaryText}>looks nice</Text>
                    </View>
                    <Text style={styles.timeText}>9m</Text>
                </View>                
                <View style={styles.bottomRow}>
                    <Image style = {styles.notify} source={pfp1}></Image>
                    <View style={{flex: 0, flexDirection: "column", width: 230}}>
                        <Text style={styles.text}>LaserGreen replied to you in <Text style={{fontWeight: "bold"}}>Japanese Uni:</Text></Text>
                        <Text style={styles.secondaryText}>send</Text>
                    </View>
                    <Text style={styles.timeText}>10m</Text>
                </View>
                </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e2124",
        padding: 20,
        paddingBottom: 0
    },
    Discord: {
        color: "#ffffff",
        fontSize: 24,
        fontWeight: "bold",

    },
    notify: {
        resizeMode: "cover",
        borderRadius: 60,
        height: 50,
        width: 50,
    },
    text: {
        fontSize: 12,
        color: "#ffffff92",
        textOverflow: "ellipsis"
    },
    secondaryText:{
        fontSize: 12,
        color: "#ffffff92",
        marginTop:2,
        marginLeft: 10

    },
    timeText: {
        marginLeft: "auto", 
        color: "#ffffff92",
        alignSelf: "flex-start",
        fontSize: 10
    },
    bottomRow:{
        flex: 0,
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
        bottom: 7,
        right: 7,
        width: 15,
        height: 15,
    borderRadius: 6,
    backgroundColor: "#3BA55D", 
    borderWidth: 2,
    borderColor: "#1e2124",
    }
    
        
});

export default NotificationsPage;