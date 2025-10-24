import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ProfilePage = () => {
    const banner = require('../../assets/images/banner.png')
    const asset = require('../../assets/images/server-icon.png');
    const profile = require('../../assets/images/firefly4.jpg')
    return(
        <View style={styles.background}>
            <LinearGradient colors={["#492a8f","#edb3de"]} style={styles.background} start={{x:0,y:0.25}} end={{x:0,y:1}} locations={[0,1]}>
                <ScrollView>
                <View style={{flex:1, marginBottom:40}}>
                    <Image style={{position:"relative",resizeMode: "cover",width: "auto", height: 150}} source={banner}></Image>
                    <View style={{flex:0, alignItems: "center",position: "absolute", top: 100, left: 20, flexDirection:"row"}}>
                        <View style={{flex:0,borderRadius: 50, justifyContent: "center", alignItems: "center", width: 95, height: 95, backgroundColor:"#492a8f" }}>
                            <Image style={{resizeMode: "cover", width: 75, height: 75, borderRadius: 50}}source={profile}></Image>
                        </View>
                        
                        <View style={{flex:0, justifyContent: "center",height: 35, width:150, borderRadius: 15, backgroundColor:"#424549", marginLeft: 5}}><Text style={{textAlign: "center", color:"#fff"}}>☔  「雨音ノイズ」</Text></View>
                    </View>
                </View>
                <View style={{flex:0, flexDirection:"row",position: "absolute",top:35, right:15}}>
                        <View style={{flex:0, alignItems: "center", justifyContent: "center",width: 30, height: 30, borderRadius:50, backgroundColor:"#000000c4", marginHorizontal:5}}><Image style={{width:20, height:20, resizeMode: "cover", borderRadius:50}}source={asset}></Image></View>
                        <View style={{flex:0, alignItems: "center", justifyContent: "center",width: 30, height: 30, borderRadius:50, backgroundColor:"#000000c4", marginHorizontal:5}}><Image style={{width:20, height:20, resizeMode: "cover", borderRadius:50}}source={asset}></Image></View>
                </View>
                <View style={{flex:3, paddingHorizontal: 20}}>
                    <View style={{flex:0, flexDirection: "column"}}>
                        <Text style={{fontSize:20, fontWeight:"bold", color:"#fff"}}>Smowiever</Text>
                        <View style={{flex:0, flexDirection: "row", alignItems:"center"}}>
                            <Text style={{fontSize: 12, color:"#fff"}}>smowiever</Text>
                            <View style={{flex:0, alignItems:"center", backgroundColor: "#424549", borderRadius: 10, padding: 3, marginHorizontal: 5 }}><Text style={{fontSize: 12, fontWeight:"semibold", textAlign:"center", color:"#fff"}}>💀928</Text></View>
                            <View style={{flex:0, flexDirection:"row",backgroundColor: "#424549", borderRadius: 10, padding: 3, justifyContent:"space-between", marginHorizontal: 5, width:100}}>
                                <Ionicons name="balloon" size={15} color={"#fff"}/>
                                <Ionicons name="cart" size={15} color={"#fff"}/>
                                <Ionicons name="cash" size={15} color={"#fff"}/>
                                <Ionicons name="medkit" size={15} color={"#fff"}/>
                                <Ionicons name="shield" size={15} color={"#fff"}/>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection:"row", paddingVertical: 15, backgroundColor:"#492a8f", padding:10, borderRadius: 25, justifyContent: "center", marginVertical: 20}}>
                        <Ionicons name="pencil" color="#fff" size={15}/>
                        <Text style={{color: "#fff", textAlign:"center"}}>Edit Profile</Text>
                    </View>
                    <View>
                        
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
    })

export default ProfilePage;