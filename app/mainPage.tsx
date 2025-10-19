import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AlertDisplay from "./alertPage";

const asset = require('../assets/images/server-icon.png');
const friendIcon = require('../assets/images/friendicon.png');
const pfp1 = require('../assets/images/lasergreen.png');
const pfp2 = require('../assets/images/henry2.png');
const pfp3 = require('../assets/images/joe swag.png');
const home = require('../assets/images/homeicon.png');
const bell = require('../assets/images/bellicon.png');
const you = require('../assets/images/mypfp.png');
const server1 = require('../assets/images/server1.png');
const server2 = require('../assets/images/server2.png');
const server3 = require('../assets/images/server3.png');
const server4 = require('../assets/images/server4.png');
const server5 = require('../assets/images/server5.png');
const server6 = require('../assets/images/server6.png');
const server7 = require('../assets/images/server7.png');
const server8 = require('../assets/images/server8.png');
const server9 = require('../assets/images/server9.png');
const server10 = require('../assets/images/server10.png');
const gameIcon = require('../assets/images/game-icon.png');
const gameIcon2 = require('../assets/images/game-icon2.jpg');
const groupIcon = require('../assets/images/group-icon.png');

const p2 = require('../assets/images/server12.png');
const p3 = require('../assets/images/server16.jpg');
const p4 = require('../assets/images/server17.jpg');
const p5 = require('../assets/images/server20.jpg');
const p6 = require('../assets/images/server13.png');
const p7 = require('../assets/images/inboxicon.png');
const p8 = require('../assets/images/searchicon.png');

const mainPage = () => (
    <SafeAreaView style={styles.background}>
        <View style={styles.sideBar}>
            <Image style={styles.directMessageIcon} source={server1}>
            </Image>
            <Image style={styles.serverIcon} source={server2}>
            </Image>
            <Image style={styles.serverIcon} source={server3}>
            </Image>
            <Image style={styles.serverIcon} source={server4}>
            </Image>
            <Image style={styles.serverIcon} source={server5}>
            </Image>
            <Image style={styles.serverIcon} source={server6}>
            </Image>
            <Image style={styles.serverIcon} source={server7}>
            </Image>
            <Image style={styles.serverIcon} source={server8}>
            </Image>
            <Image style={styles.serverIcon} source={server9}>
            </Image>
            <Image style={styles.serverIcon} source={server10}>
            </Image>
            <Image style={styles.serverIcon} source={asset}>
            </Image>
            <Image style={styles.serverIcon} source={asset}>
            </Image>
            <Image style={styles.serverIcon} source={asset}>
            </Image>
            <Image style={styles.serverIcon} source={asset}>
            </Image>

        </View>
        <View style={styles.mainArea}>
            <Text style={styles.header}>Messages</Text>
                <View style={styles.mainBar}>
                    <Image style={styles.mainBarIcon} source={p8}></Image>
                    <Image style={styles.mainBarIcon} source={p7}></Image>
                    <View style={styles.addFriendsButton}>
                        <Image style={styles.addFriendsIcon} source={friendIcon}></Image>
                        <Text style={styles.addFriendsText}>Add Friends</Text>
                    </View>
                </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flex:0, marginBottom:10}}>
                    <View style={styles.activityStatusContainer}>
                        <Image style={styles.activityStatusImage}source={gameIcon}></Image>
                        <View style={styles.activityStatusProfile}>
                            <Image style={styles.profileIconSmall} source={pfp1}></Image>
                            <Text style={styles.primaryTextHighlight}>LaserGreen</Text>
                            <Text style={styles.secondaryText}>osu!</Text>
                        </View>
                    </View>
                    <View style={styles.activityStatusContainer}>
                        <Image style={styles.activityStatusImage}source={gameIcon2}></Image>
                        <View style={styles.activityStatusProfile}>
                            <Image style={styles.profileIconSmall} source={pfp2}></Image>
                            <Text style={styles.primaryTextHighlight}>Henry2</Text>
                            <Text style={styles.secondaryText}>Gamma: Stalker</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.directMessageHighlight}>
                    <Image style={styles.profileIcon} source={pfp1}></Image>
                    <View style={styles.profileInfo}>
                        <Text style={styles.primaryText}>LaserGreen</Text>
                        <Text style={styles.secondaryText}>You: Toby Fox</Text>
                    </View>
                    <Text style={styles.timeText}>21m</Text>
                </View>
                <View style={styles.directMessage}>
                        <Image style={styles.profileIcon} source={pfp3}></Image>
                    <View style={styles.profileInfo}>
                        <Text style={styles.primaryText}>XxJoeSwag727xX</Text>
                        <Text style={styles.secondaryText}>XxJoeSwag727xX: lethal time?</Text>
                    </View>
                    <Text style={styles.timeText}>12h</Text>
                </View>
                <View style={styles.directMessage}>
                        <Image style={styles.profileIcon} source={groupIcon}></Image>
                    <View style={styles.profileInfo}>
                        <Text style={styles.primaryText}>Japanese Uni</Text>
                        <Text style={styles.secondaryText}>LaserGreen: 今は大学です</Text>
                    </View>
                    <Text style={styles.timeText}>1d</Text>
                </View>
                <View style={styles.directMessage}>
                        <Image style={styles.profileIcon} source={pfp2}></Image>
                    <View style={styles.profileInfo}>
                        <Text style={styles.primaryText}>Henry2</Text>
                        <Text style={styles.secondaryText}>You: skill issue :joy_cat::joy_cat</Text>
                    </View>
                    <Text style={styles.timeText}>2d</Text>
                </View>

                <View style={styles.directMessage}>
                        <Image style={styles.profileIcon} source={p4}></Image>
                    <View style={styles.profileInfo}>
                        <Text style={styles.primaryText}>Trident</Text>
                        <Text style={styles.secondaryText}>You: Yo whens the mobile assignment due</Text>
                    </View>
                    <Text style={styles.timeText}>2d</Text>
                </View>

                <View style={styles.directMessage}>
                        <Image style={styles.profileIcon} source={p5}></Image>
                    <View style={styles.profileInfo}>
                        <Text style={styles.primaryText}>Flatline</Text>
                        <Text style={styles.secondaryText}>You: CS?</Text>
                    </View>
                    <Text style={styles.timeText}>4d</Text>
                </View>

                <View style={styles.directMessage}>
                        <Image style={styles.profileIcon} source={p3}></Image>
                    <View style={styles.profileInfo}>
                        <Text style={styles.primaryText}>porky</Text>
                        <Text style={styles.secondaryText}>You: yooooooooo</Text>
                    </View>
                    <Text style={styles.timeText}>5d</Text>
                </View>

                <View style={styles.directMessage}>
                        <Image style={styles.profileIcon} source={p6}></Image>
                    <View style={styles.profileInfo}>
                        <Text style={styles.primaryText}>yungSnack</Text>
                        <Text style={styles.secondaryText}>You: hey</Text>
                    </View>
                    <Text style={styles.timeText}>7d</Text>
                </View>

                <View style={styles.directMessage}>
                        <Image style={styles.profileIcon} source={p2}></Image>
                    <View style={styles.profileInfo}>
                        <Text style={styles.primaryText}>Spenny6</Text>
                        <Text style={styles.secondaryText}>You: tryna run cod</Text>
                    </View>
                    <Text style={styles.timeText}>9d</Text>
                </View>
                <View>
                <AlertDisplay/>
                </View> 
            </ScrollView>

            
        </View>
        <View style={styles.navigationBar}>
            <View style={styles.navigationButton}>
                <Image style={styles.navigationIconHighlight} source={home}></Image>
                <Text style={styles.navTextHighlight}>Home</Text>
            </View>
            <View style={styles.navigationButton}>
                <Image style={styles.navigationIcon} source={bell}></Image>
                <Text style={styles.navText}>Notifications</Text>
            </View>
            <View style={styles.navigationButton}>
                <Image style={styles.navigationIcon} source={you}></Image>
                <Text style={styles.navText}>You</Text>
            </View>

        </View>
    </SafeAreaView>
  );
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#1e2124",
    },
    mainBar: {
        flex: 0,
        flexDirection:"row", 
        marginBottom:15
    },
    mainBarIcon: {
        resizeMode: "cover",
        borderRadius: 50,
        height: 30,
        width: 30, 
        marginHorizontal: 5
    },
    addFriendsButton: {
        flex:0, 
        backgroundColor:"#40444b", 
        borderRadius: 30, 
        justifyContent:"center", 
        alignItems:"center", 
        flexGrow:1, 
        flexDirection: "row", 
        marginHorizontal: 5
    },
    addFriendsText: {
        marginLeft:5,
        fontSize: 13, 
        fontWeight: "bold",
        color: "#ffffff"
    },
    addFriendsIcon: {
        resizeMode: "cover",
        borderRadius: 10,
        height: 20,
        width: 20, 
        tintColor: "#ffff"
    },
    activityStatusContainer: {
        flex:0, 
        backgroundColor:"rgba(48, 52, 58, 1)0", 
        flexDirection:"row", 
        borderRadius:15, 
        padding: 10, 
        marginRight:10
    },
    activityStatusImage: {
        resizeMode: "cover",
        borderRadius: 50,
        height: 70,
        width:70 
    },
    activityStatusProfile: {
        flex:0, 
        flexDirection:"column", 
        marginLeft: 10
    },
    profileIconSmall:{
        resizeMode: "cover",
        borderRadius: 50,
        height: 35,
        width: 35,
    },
    sideBar: {
        flex:1,
        flexDirection: "column",
        alignItems: "center",
        alignContent: "space-evenly",
        alignSelf: "flex-start",
        height: "auto",
        width: 80,
        backgroundColor: "#1e2124",
        padding: 5,
    },
    directMessageIcon: {
        resizeMode: "cover",
        borderRadius:  10,
        height: 45,
        width: 45,
        marginBottom: 20,
        marginTop: 3
    },
    serverIcon: {
        resizeMode: "cover",
        borderRadius: 50,
        height: 45,
        width: 45,
        marginVertical: 5
    },
    profileIcon: {
        resizeMode: "cover",
        borderRadius: 50,
        height: 40,
        width: 40,
        marginVertical: 3
    },
    mainArea: {
        flex:0,
        marginLeft: 80,
        padding:10,
        borderTopLeftRadius: 20,
        backgroundColor: "#282b30",
        alignContent: "space-evenly",
        alignSelf: "center"
    },
    directMessage: {
        flex:0,
        flexDirection: "row",
        width: "auto",
        alignContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 10,
        marginVertical: 1
    },
    directMessageHighlight: {
        flex:0,
        flexDirection: "row",
        width: "auto",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(48, 52, 58, 1)0",
        padding: 5,
        borderRadius: 10,
        marginVertical: 1
    },
    profileInfo: {
        flex:0,
        flexDirection: "column",
        paddingLeft: 10
    },
    navigationBar: {
        flex: 0,
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "space-between",
        padding: 15,
        paddingHorizontal: 50,
        paddingBottom: 50,
        width: "auto",
        height: 100,
        backgroundColor: "#424549"
    },
    navigationButton: {
        flex:0, 
        flexDirection: "column", 
        justifyContent: "center"
    },
    navigationIconHighlight:{
        marginLeft: "auto", 
        marginRight:"auto",
        resizeMode: "stretch",
        borderRadius: 50,
        height: 25,
        width: 25, 
        marginBottom: 3, 
        tintColor: "#ffff"
    },
    navigationIcon:{
        marginLeft: "auto",
         marginRight:"auto",
         resizeMode: "stretch",
         borderRadius: 50,
         height: 25,
         width: 25, 
         marginBottom: 3
    },
    header: {
        fontSize: 20,
        padding: 5,
        marginBottom: 10,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    primaryText: { 
        fontSize: 15,
        fontWeight: "bold",
        color: "#ffffff92"
    },
    primaryTextHighlight: { 
        fontSize: 15,
        fontWeight: "bold",
        color: "#ffffff"
    },
    secondaryText: {
        fontSize: 10, 
        color: "#ffffff92"
    },
    timeText: { 
        fontSize: 9,
        color: "#ffffff92",
        alignSelf:"flex-end",
        paddingBottom: 25,
        marginLeft: "auto",
    },
    navTextHighlight: { 
        fontSize: 9,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center"
    },
    navText: { 
        fontSize: 9,
        fontWeight: "bold",
        color: "#ffffff92",
        textAlign: "center"
        },
});

export default mainPage;