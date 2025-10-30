import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ProfilePage = () => {
    const banner = require('../../assets/images/banner.png');
    const profile = require('../../assets/images/firefly4.jpg');
    const activity = require('../../assets/images/activity-image.png');
    const pfp1 = require('../../assets/images/lasergreen.png');
    const pfp2 = require('../../assets/images/henry2.png');
    const pfp3 = require('../../assets/images/joe swag.png');
    const pfp4 = require('../../assets/images/server12.png');
    const pfp5 = require('../../assets/images/server16.jpg');
    const pfp6 = require('../../assets/images/server17.jpg');
    return(
        <View style={styles.background}>
            <LinearGradient colors={["#492a8f","#edb3dbff"]} style={styles.background} start={{x:0,y:0.25}} end={{x:0,y:1}} locations={[0,1]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.bannerContainer}>
                    <Image style={styles.bannerImage} source={banner}></Image>
                    <View style={styles.profileContainer}>
                        <View style={styles.profileImageContainer}>
                            <Image style={styles.profilePicture}source={profile}></Image>
                        </View>
                        
                        <View style={styles.statusContainer}><Text style={styles.statusText}>☔  「雨音ノイズ」</Text></View>
                    </View>
                </View>
                <View style={styles.settingsContainer}>
                        <View style={styles.settingsIcon}>
                            <Ionicons name="search" size={20} color={"#fff"}/>
                        </View>
                        <View style={styles.settingsIcon}>
                            <Ionicons name="settings" size={20} color={"#fff"}/>
                        </View>
                </View>
                <View style={styles.mainArea}>
                    <View style={styles.columnFlex}>
                        <Text style={styles.profileName}>Smowiever</Text>
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileSubText}>smowiever</Text>
                            <View style={styles.profileTagContainer}>
                                <Text style={styles.profileTag}>💀 928</Text>
                            </View>
                            <View style={styles.profileBadgesContainer}>
                                <Ionicons name="balloon" size={15} color={"#fff"}/>
                                <Ionicons name="cart" size={15} color={"#fff"}/>
                                <Ionicons name="cash" size={15} color={"#fff"}/>
                                <Ionicons name="medkit" size={15} color={"#fff"}/>
                                <Ionicons name="shield" size={15} color={"#fff"}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.editProfileButton}>
                        <Ionicons name="pencil" color="#fff" size={15}/>
                        <Text style={styles.editButtonText}>Edit Profile</Text>
                    </View>
                    <View style={styles.activityContainer}>
                        <View style={styles.activityHeaderContainer}>
                            <Text style={styles.activityHeaderText}>Listening to Spotify</Text>
                            <Ionicons name="logo-youtube" size={10} color={"#ffffff98"}/>
                        </View>
                        <View style={styles.spotifyContainer}>
                            <Image style={styles.activityImage} source={activity}></Image>
                            <View style={styles.columnFlex}>
                                <Text style={styles.activityPrimaryText}>Roulette Dares (The Haunt Of)</Text>
                                <Text style={styles.activitySecondaryText}>The Mars Volta</Text>
                            </View>
                        </View>
                        <View style={styles.musicLengthContainer}>
                            <View style={styles.musicBarContainer}>
                                <View style={styles.musicBarHighlight}></View>
                                <View style={styles.musicBar}></View>
                            </View>
                            <View style={styles.rowFlex}>
                                <Text style={styles.musicLengthStart}>03:56</Text>
                                <Text style={styles.musicLengthEnd}>07:31</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.activityContainer}>
                        <Text style={styles.headerText}>Member Since</Text>
                        <View style={styles.rowFlex}>
                            <Ionicons name="logo-discord" size={18} color={"#ffffffc9"}/>
                            <Text style={styles.memberSinceText}>10 Sept 2020</Text>
                        </View>
                    </View>
                    <View style={styles.connectionsContainer}>
                        <Text style={styles.connectionsHeader}>Connections</Text>
                        <View style={styles.connectionInnerContainer}>
                            <View style={styles.connection}>
                                <Ionicons name="logo-soundcloud" size={20} color={"#ff7700"}/>
                                <Text style={styles.connectionText}>Smowiever</Text>
                                <Ionicons name="checkmark-circle" size={18} color={"#fff"}/>
                                <Ionicons name="arrow-up-right-box-outline" size={18} color={"#fff"} style={{marginLeft: "auto"}}/>
                            </View>
                            <View style={styles.connection}>
                                <Ionicons name="logo-youtube" size={20} color={"#CC181E"}/>
                                <Text style={styles.connectionText}>Smowiever</Text>
                                <Ionicons name="checkmark-circle" size={18} color={"#fff"}/>
                                <Ionicons name="arrow-up-right-box-outline" size={18} color={"#fff"} style={{marginLeft: "auto"}}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.friendsContainer}>
                        <View style={styles.rowFlex}>
                            <Text style={styles.friendsHeader}>Friends</Text>
                            <View style={styles.iconsContainer}>
                                <Image style={styles.profileIconSmall} source={pfp1}></Image>
                                <Image style={styles.profileIconSmall} source={pfp2}></Image>
                                <Image style={styles.profileIconSmall} source={pfp3}></Image>
                                <Image style={styles.profileIconSmall} source={pfp4}></Image>
                                <Image style={styles.profileIconSmall} source={pfp5}></Image>
                                <Image style={styles.profileIconSmall} source={pfp6}></Image>
                            </View>
                            <Ionicons name="chevron-forward" size={15} color={"#fff"}/>
                        </View>
                    </View>
                    <View style={styles.notesContainer}>
                        <Text style={styles.notesText}>Note (only visible to you)</Text>
                        <Ionicons name="list" size={15} color={"#fff"} style={{marginLeft: "auto"}}/>
                    </View>
                </View>
                </ScrollView>
        </LinearGradient>
    </View>
    );
}
const styles = StyleSheet.create({
    background: {
        flex:1,
        flexDirection: "column",
    },
    bannerContainer: {
        flex:1, 
        marginBottom:40
    },
    bannerImage: {
        position:"relative",
        resizeMode: "cover",
        width: "auto",
         height: 150
        },
    profileContainer: {
        flex:0,
        alignItems: "center",
        position: "absolute",
        top: 100, 
        left: 20, 
        flexDirection:"row"
    },
    profileImageContainer:{
        flex:0,
        borderRadius: 50, 
        justifyContent: "center", 
        alignItems: "center", 
        width: 95, 
        height: 95, 
        backgroundColor:"#492a8f" 
    },
    profilePicture: {
        resizeMode: "cover", 
        width: 75, 
        height: 75, 
        borderRadius: 50
    },
    profileIconSmall: {
        resizeMode: "cover",
        borderRadius: 50,
        height: 20,
        width: 20,
    },
    statusContainer:{
        flex:0, 
        justifyContent: "center",
        height: 35, 
        width:150, 
        borderRadius: 15, 
        backgroundColor:"#292B2F", 
        marginLeft: 5
    },
    statusText: {
        textAlign: "center", 
        color:"#fff"
    },
    settingsContainer: {
        flex:0, 
        flexDirection:"row",
        position: "absolute",
        top:35, 
        right:15
    },
    settingsIcon: {
        flex:0, 
        alignItems: "center", 
        justifyContent: "center",
        width: 30, 
        height: 30, 
        borderRadius:50, 
        backgroundColor:"#000000c4", 
        marginHorizontal:5
    },
    mainArea: {
        flex:3, 
        paddingHorizontal: 20
    },
    columnFlex: {
        flex:0, 
        flexDirection: "column"
    },
    rowFlex: {
        flex:0, 
        flexDirection: "row"
    },
    profileName: {
        fontSize:20, 
        fontWeight:"bold", 
        color:"#fff"
    },
    profileInfo: {
        flex:0, 
        flexDirection: "row", 
        alignItems:"center"
    },
    profileSubText: {
        fontSize: 15, 
        color:"#fff"
    },
    profileTagContainer: {
        flex:0, 
        alignItems:"center", 
        backgroundColor: "#202225", 
        borderRadius: 5, 
        padding: 3, 
        paddingHorizontal: 8, 
        marginHorizontal: 5 
    },
    profileTag: {
        fontSize: 12, 
        fontWeight:"semibold", 
        textAlign:"center", 
        color:"#fff"
    },
    profileBadgesContainer: {
        flex:0, 
        flexDirection:"row",
        backgroundColor: "#202225", 
        borderRadius: 5, 
        padding: 3, 
        paddingHorizontal: 8, 
        justifyContent:"space-between", 
        marginHorizontal: 5, 
        width:110
    },
    editProfileButton: {
        flex:1, 
        flexDirection:"row", 
        paddingVertical: 10, 
        backgroundColor:"#482990", 
        padding:10, 
        borderRadius: 25, 
        justifyContent: "center", 
        alignItems:"center", 
        marginVertical: 20
    },
    editButtonText: {
        color: "#fff", 
        textAlign:"center",
        marginLeft: 5, 
        fontWeight: "bold"
    },
    activityContainer: {
        flex:1, 
        borderRadius:10, 
        backgroundColor:"#000000a5", 
        padding:15, 
        marginBottom: 20,
        overflow: "hidden"
    },
    activityHeaderContainer: {
        flex:0, 
        flexDirection:"row",
        marginBottom:10, 
        alignItems: "center"
    },
    activityHeaderText: {
        fontSize: 12, 
        color: "#ffffff98", 
        marginRight: 5, 
        fontWeight:"500" 
    },
    spotifyContainer: {
        flex:0, 
        flexDirection: "row", 
        alignItems: "center"
    },
    activityImage: {
        borderRadius: 5, 
        resizeMode: "cover", 
        width:60, 
        height:60, 
        marginRight: 15
    },
    activityPrimaryText: {
        fontSize: 15, 
        textAlign: "center", 
        color:"#ffffffc9"
    },
    activitySecondaryText: {
        fontSize: 10, 
        textAlign: "left", 
        color:"#ffffffc9"
    },
    musicLengthContainer: {
        flex:0,
        marginTop: 10
    },
    musicBarContainer: {
        flex:0, 
        flexDirection: "row", 
        marginBottom: 4
    },
    musicBarHighlight: {
        backgroundColor: "#ffffffc9", 
        flex:2, 
        height:3, 
        borderRadius: 50
    },
    musicBar: {
        backgroundColor: "#ffffff68", 
        flex:3, 
        height:3, 
        borderRadius: 50
    },
    musicLengthStart: {
        fontSize:10, 
        color:"#ffffffc9"
    },
    musicLengthEnd: {
        marginLeft: "auto", 
        fontSize: 10, 
        color:"#ffffffc9"
    },
    headerText: {
        fontSize: 12, 
        color: "#ffffff98", 
        marginRight: 5, 
        fontWeight:"500", 
        marginBottom: 10
    },
    memberSinceText: {
        fontSize: 13, 
        textAlign: "center", 
        color:"#ffffffc9", 
        marginLeft: 5
    },
    connectionsContainer: {
        flex:1, 
        borderRadius:10, 
        backgroundColor:"#000000a5", 
        marginBottom: 20, 
        overflow: "hidden"
    },
    connectionsHeader: {
        fontSize: 12, 
        color: "#ffffff98", 
        fontWeight:"500", 
        margin: 15,
        marginBottom: 10
    },
    connectionInnerContainer: {
        flex:1, 
        backgroundColor:"#0000000c", 
        borderWidth: 0
    },
    connection: {
        flex:0, 
        flexDirection: "row", 
        borderWidth: 0.25, 
        paddingVertical: 15, 
        padding:15, 
        borderBottomColor: "#ffffff21", 
        borderTopWidth:0,
        borderRightWidth: 0, 
        borderLeftWidth:0
    },
    connectionText: {
        fontSize: 13, 
        textAlign: "center", 
        color:"#ffffffff",
        marginRight: 5, 
        marginLeft: 10, 
        fontWeight: "500"
    },
    friendsContainer: {
        flex:1, 
        borderRadius:10, 
        backgroundColor:"#000000a5", 
        padding:15, 
        marginBottom: 20, 
        alignContent: "center"
    },
    friendsHeader: {
        fontSize: 12, 
        color: "#ffffff98", 
        fontWeight:"500"
    },
    iconsContainer: {
        flex:0, 
        flexDirection:"row", 
        marginLeft: "auto", 
        marginRight: 5
    },
    notesContainer: {
        flex:1, 
        borderRadius:10, 
        backgroundColor:"#000000a5", 
        padding:15, 
        marginBottom: 20, 
        alignContent: "center",
        flexDirection: "row"
    },
    notesText: {
        fontSize: 12, 
        color: "#ffffff98", 
        fontWeight:"500"
    }










    
    })

export default ProfilePage;