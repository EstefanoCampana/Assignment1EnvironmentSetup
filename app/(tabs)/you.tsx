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
                <View style={{flex:1, marginBottom:40}}>
                    <Image style={{position:"relative",resizeMode: "cover",width: "auto", height: 150}} source={banner}></Image>
                    <View style={{flex:0, alignItems: "center",position: "absolute", top: 100, left: 20, flexDirection:"row"}}>
                        <View style={{flex:0,borderRadius: 50, justifyContent: "center", alignItems: "center", width: 95, height: 95, backgroundColor:"#492a8f" }}>
                            <Image style={{resizeMode: "cover", width: 75, height: 75, borderRadius: 50}}source={profile}></Image>
                        </View>
                        
                        <View style={{flex:0, justifyContent: "center",height: 35, width:150, borderRadius: 15, backgroundColor:"#292B2F", marginLeft: 5}}><Text style={{textAlign: "center", color:"#fff"}}>☔  「雨音ノイズ」</Text></View>
                    </View>
                </View>
                <View style={{flex:0, flexDirection:"row",position: "absolute",top:35, right:15}}>
                        <View style={{flex:0, alignItems: "center", justifyContent: "center",width: 30, height: 30, borderRadius:50, backgroundColor:"#000000c4", marginHorizontal:5}}>
                            <Ionicons name="search" size={20} color={"#fff"}/>
                        </View>
                        <View style={{flex:0, alignItems: "center", justifyContent: "center",width: 30, height: 30, borderRadius:50, backgroundColor:"#000000c4", marginHorizontal:5}}>
                            <Ionicons name="settings" size={20} color={"#fff"}/>
                        </View>
                </View>
                <View style={{flex:3, paddingHorizontal: 20}}>
                    <View style={{flex:0, flexDirection: "column"}}>
                        <Text style={{fontSize:20, fontWeight:"bold", color:"#fff"}}>Smowiever</Text>
                        <View style={{flex:0, flexDirection: "row", alignItems:"center"}}>
                            <Text style={{fontSize: 15, color:"#fff"}}>smowiever</Text>
                            <View style={{flex:0, alignItems:"center", backgroundColor: "#202225", borderRadius: 5, padding: 3, paddingHorizontal: 8, marginHorizontal: 5 }}><Text style={{fontSize: 12, fontWeight:"semibold", textAlign:"center", color:"#fff"}}>💀 928</Text></View>
                            <View style={{flex:0, flexDirection:"row",backgroundColor: "#202225", borderRadius: 5, padding: 3, paddingHorizontal: 8, justifyContent:"space-between", marginHorizontal: 5, width:110}}>
                                <Ionicons name="balloon" size={15} color={"#fff"}/>
                                <Ionicons name="cart" size={15} color={"#fff"}/>
                                <Ionicons name="cash" size={15} color={"#fff"}/>
                                <Ionicons name="medkit" size={15} color={"#fff"}/>
                                <Ionicons name="shield" size={15} color={"#fff"}/>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection:"row", paddingVertical: 10, backgroundColor:"#482990", padding:10, borderRadius: 25, justifyContent: "center", alignItems:"center", marginVertical: 20}}>
                        <Ionicons name="pencil" color="#fff" size={15}/>
                        <Text style={{color: "#fff", textAlign:"center", marginLeft: 5, fontWeight: "bold"}}>Edit Profile</Text>
                    </View>
                    <View style={{flex:1, borderRadius:10, backgroundColor:"#000000a5", padding:15, marginBottom: 20}}>
                        <View style={{flex:0, flexDirection:"row", marginBottom:10, alignItems: "center"}}>
                            <Text style={{fontSize: 12, color: "#ffffff98", marginRight: 5, fontWeight:"500"}}>Listening to Spotify</Text>
                            <Ionicons name="logo-youtube" size={10} color={"#ffffff98"}/>
                        </View>
                        <View style={{flex:0, flexDirection: "row", alignItems: "center"}}>
                            <Image style={{borderRadius: 5, resizeMode: "cover", width:60, height:60, marginRight: 15}} source={activity}></Image>
                            <View style={{flex:0, flexDirection:"column"}}>
                                <Text style={{fontSize: 15, textAlign: "center", color:"#ffffffc9"}}>Roulette Dares (The Haunt Of)</Text>
                                <Text style={{fontSize: 10, textAlign: "left", color:"#ffffffc9"}}>The Mars Volta</Text>
                            </View>
                        </View>
                        <View style={{flex:0, marginTop: 10}}>
                            <View style={{flex:0, flexDirection: "row", marginBottom: 4}}>
                                <View style={{backgroundColor: "#ffffffc9", flex:2, height:3, borderRadius: 50}}></View>
                                <View style={{backgroundColor: "#ffffff68", flex:3, height:3, borderRadius: 50}}></View>
                            </View>
                            <View style={{flex:0, flexDirection: "row"}}>
                                <Text style={{fontSize:10, color:"#ffffffc9"}}>03:56</Text>
                                <Text style={{marginLeft: "auto", fontSize: 10, color:"#ffffffc9"}}>07:31</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1, borderRadius:10, backgroundColor:"#000000a5", padding:15, marginBottom: 20}}>
                        <Text style={{fontSize: 12, color: "#ffffff98", marginRight: 5, fontWeight:"500", marginBottom: 10}}>Member Since</Text>
                        <View style={{flex:0, flexDirection: "row"}}>
                            <Ionicons name="logo-discord" size={18} color={"#ffffffc9"}/>
                            <Text style={{fontSize: 13, textAlign: "center", color:"#ffffffc9", marginLeft: 5}}>10 Sept 2020</Text>
                        </View>
                    </View>
                    <View style={{flex:1, borderRadius:10, backgroundColor:"#000000a5", marginBottom: 20, overflow: "hidden"}}>
                        <Text style={{fontSize: 12, color: "#ffffff98", fontWeight:"500", margin: 15, marginBottom: 10}}>Connections</Text>
                        <View style={{flex:1, backgroundColor:"#0000000c", borderWidth: 0}}>
                            <View style={{flex:0, flexDirection: "row", borderWidth: 0.25, paddingVertical: 15, padding:15, borderBottomColor: "#ffffff21", borderTopWidth:0, borderRightWidth: 0, borderLeftWidth:0}}>
                                <Ionicons name="logo-soundcloud" size={20} color={"#ff7700"}/>
                                <Text style={{fontSize: 13, textAlign: "center", color:"#ffffffff", marginRight: 5, marginLeft: 10, fontWeight: "500"}}>Smowiever</Text>
                                <Ionicons name="checkmark-circle" size={18} color={"#fff"}/>
                                <Ionicons name="arrow-up-right-box-outline" size={18} color={"#fff"} style={{marginLeft: "auto"}}/>
                            </View>
                            <View style={{flex:0, flexDirection: "row", borderWidth: 0.25, paddingVertical: 15, padding:15, borderBottomColor: "#ffffff21", borderTopWidth:0, borderRightWidth: 0, borderLeftWidth:0}}>
                                <Ionicons name="logo-youtube" size={20} color={"#CC181E"}/>
                                <Text style={{fontSize: 13, textAlign: "center", color:"#ffffffff", marginRight: 5, marginLeft: 10, fontWeight: "500"}}>Smowiever</Text>
                                <Ionicons name="checkmark-circle" size={18} color={"#fff"}/>
                                <Ionicons name="arrow-up-right-box-outline" size={18} color={"#fff"} style={{marginLeft: "auto"}}/>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1, borderRadius:10, backgroundColor:"#000000a5", padding:15, marginBottom: 20, alignContent: "center"}}>
                        <View style={{flex:0, flexDirection:"row"}}>
                            <Text style={{fontSize: 12, color: "#ffffff98", fontWeight:"500"}}>Friends</Text>
                            <View style={{flex:0, flexDirection:"row", marginLeft: "auto", marginRight: 5}}>
                                <Image style={styles.profileIcon} source={pfp1}></Image>
                                <Image style={styles.profileIcon} source={pfp2}></Image>
                                <Image style={styles.profileIcon} source={pfp3}></Image>
                                <Image style={styles.profileIcon} source={pfp4}></Image>
                                <Image style={styles.profileIcon} source={pfp5}></Image>
                                <Image style={styles.profileIcon} source={pfp6}></Image>
                            </View>
                            <Ionicons name="chevron-forward" size={15} color={"#fff"}/>
                        </View>
                    </View>
                    <View style={{flex:1, borderRadius:10, backgroundColor:"#000000a5", padding:15, marginBottom: 20, alignContent: "center", flexDirection: "row"}}>
                        <Text style={{fontSize: 12, color: "#ffffff98", fontWeight:"500"}}>Note (only visible to you)</Text>
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
    profileIcon: {
        resizeMode: "cover",
        borderRadius: 50,
        height: 20,
        width: 20,
    },
    })

export default ProfilePage;