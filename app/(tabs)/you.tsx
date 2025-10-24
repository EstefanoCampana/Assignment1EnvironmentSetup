import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ProfilePage = () => {
    const banner = require('../../assets/images/banner.png')
    const asset = require('../../assets/images/server-icon.png');
    const profile = require('../../assets/images/firefly4.jpg')
    return(
    <View style={styles.background}>
        <ScrollView>
        <View style={{flex:1}}>
            <Image style={{position:"relative",resizeMode: "cover",width: "auto", height: 150}} source={banner}></Image>
            <View style={{flex:0, alignItems: "center",position: "absolute", top: 100, left: 20, flexDirection:"row"}}>
                <View style={{flex:0, justifyContent: "center", alignItems: "center", backgroundColor:"#1e2124", borderRadius: 50, width: 95, height: 95 }}>
                    <Image style={{resizeMode: "cover", width: 75, height: 75, borderRadius: 50}}source={profile}></Image>
                </View>
                
                <View style={{flex:0, justifyContent: "center",height: 35, width:150, borderRadius: 15, backgroundColor:"#ffff", marginLeft: 5}}><Text style={{textAlign: "center"}}>☔  「雨音ノイズ」</Text></View>
            </View>
        </View>
        <View style={{flex:0, flexDirection:"row",position: "absolute",top:35, right:15}}>
                <View style={{flex:0, alignItems: "center", justifyContent: "center",width: 30, height: 30, borderRadius:50, backgroundColor:"#000000c4", marginHorizontal:5}}><Image style={{width:20, height:20, resizeMode: "cover", borderRadius:50}}source={asset}></Image></View>
                <View style={{flex:0, alignItems: "center", justifyContent: "center",width: 30, height: 30, borderRadius:50, backgroundColor:"#000000c4", marginHorizontal:5}}><Image style={{width:20, height:20, resizeMode: "cover", borderRadius:50}}source={asset}></Image></View>
        </View>
        <View style={{flex:3, paddingHorizontal: 5}}>

        </View>
        </ScrollView>
    </View>
    );
}
const styles = StyleSheet.create({
    background: {
        flex:1,
        flexDirection: "column",
        backgroundColor: "#1e2124",
    },
    })

export default ProfilePage;