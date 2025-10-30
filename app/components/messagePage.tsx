import { Link } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const newMessage = () => {

    const backArrow = require('../../assets/images/download.jpg');
    const addAFriend = require('../../assets/images/addafriend.png');
    const addAGroup = require('../../assets/images/2522093.png');
    const GreaterThan = require('../../assets/images/greaterThan.png');
    const icon = require('../../assets/images/iconicon.jpg');
    const profile1 = require('../../assets/images/joe swag.png');
    const profile2 = require('../../assets/images/henry2.png');
    const profile3 = require('../../assets/images/lasergreen.png');  
    const profile4 = require('../../assets/images/profile4.jpg');
    const profile5 = require('../../assets/images/profile5.jpg');
    const profile6 = require('../../assets/images/profile6.jpg');

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.center}>
                <Text style={styles.text}>New Message</Text>
                </View>
                
                <View style={styles.searchBox}>
                <Text style={styles.text}>To:  Search your friends</Text>
                </View>

                <Link href='/' asChild style={styles.imageArrow}>
                <TouchableOpacity>
                    <Image source={backArrow} style={{height: 30,width: 30, resizeMode:"cover", borderRadius: 60}}/>
                </TouchableOpacity>
                </Link>
            </View>

        <ScrollView>

            <View style={styles.sectionBackground}>
                <View style={[styles.directMessageHighlight, styles.border]}>
                    <Image source={addAGroup} style={[styles.image, styles.groupImage]}/>
                    <Text style={styles.text}>New Group</Text>
                    <Image source={GreaterThan} style={[styles.image, styles.friendGroupArrow]}/>
                </View>

                <View style={styles.directMessageHighlight}>
                    <Image source={addAFriend} style={[styles.image, styles.friendImage]}/>
                    <Text style={styles.text}>Add a Friend</Text>
                    <Image source={GreaterThan} style={[styles.image, styles.friendGroupArrow]}/>
                </View>
            </View>

            <View>
                <Text style={styles.description}>Suggested</Text>
            </View>

            <View style={styles.sectionBackground}>

                <View>
                <View style={[styles.profileInfo, styles.border]}>
                    <Image source={profile1} style={styles.image}/>
                    <Text style={styles.text}>XxJoeSwag727xX</Text>

                    <View style={styles.little}>
                        <Image source={icon} style={styles.littleIcon}/>
                        <Text style={{color: "#ffffff"}}>908</Text>
                    </View>
                </View>
                    
            </View>
            <Text style={styles.textSmall}>xxjoeswag727xx</Text>
            <View>
                <View style={[styles.profileInfo, styles.border]}>
                    <Image source={profile2} style={styles.image}/>
                    <Text style={styles.text}>Henry2</Text>
                        <View style={styles.little}>
                            <Image source={icon} style={styles.littleIcon}/>
                            <Text style={{color: "#ffffff"}}>908</Text>
                        </View>
                </View>
                <Text style={styles.textSmall}>henryinohio</Text>
            </View>
            <View>
                <View style={[styles.profileInfo, styles.border]}>
                    <Image source={profile3} style={styles.image}/>
                    <Text style={styles.text}>LaserGreen</Text>

                    <View style={styles.little}>
                        <Image source={icon} style={styles.littleIcon}/>
                        <Text style={{color: "#ffffff"}}>908</Text>
                    </View>

                </View>
                <Text style={styles.textSmall}>lasergreen</Text>
            </View>
            <View>
                <View style={styles.profileInfo}>
                    <Image source={profile4} style={styles.image}/>
                    <Text style={styles.text}>GreenTea</Text>
                    <View style={styles.little}>
                        <Image source={icon} style={styles.littleIcon}/>
                        <Text style={{color: "#ffffff"}}>908</Text>
                    </View>
                </View>
                <Text style={styles.textSmall}>greentea</Text>
            </View>
        </View>

            <View>
                <Text style={styles.description}>!</Text>
            </View>

            <View style={styles.sectionBackground}>
                <View style={styles.profileInfo}>
                <Image source={profile5} style={styles.image}/>
                <Text style={styles.text}>!CDE!</Text>
                </View>
                <Text style={styles.textSmall}>cde0406</Text>
            </View>

            <View>
                <Text style={styles.description}>$</Text>
            </View>

            <View style={styles.sectionBackground}>
                <View style={styles.profileInfo}>
                <Image source={profile6} style={styles.image}/>
                <Text style={styles.text}>$hans_#</Text>
                </View>
                <Text style={styles.textSmall}>hans_1803</Text>
            </View>
            
            </ScrollView>
        </View>

        
    )
}

export default newMessage;


const styles = StyleSheet.create({

    container: {
        backgroundColor: "#1e2124",
        flex: 1,
        paddingTop: 70,
    },
        directMessageHighlight: {
        flex:0,
        flexDirection: "row",
        width: "auto",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "#262727",
        padding: 5,
        borderRadius: 10,
    },
    profileInfo: {
        flex:0,
        flexDirection: "row",
        paddingLeft: 10
    },
    image: {
        resizeMode: "cover",
        borderRadius: 50,
        height: 40,
        width: 40,
        marginVertical: 3
    },
    text: {
        color: "#ffffff",
        fontSize: 18,
        left: 20,
    },
    textSmall: {
        
        color: "#ffffff",
        fontSize: 12,
        bottom: 20,
        left: 70,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchBox: {
        backgroundColor: "#000000",
        padding: 10,
        borderRadius: 15,
        margin: 20,
        color: "#808080",
    },

    sectionBackground: {
        backgroundColor: "#262727",
        padding: 10,
        borderRadius: 15,
        margin: 20,
    },
    imageArrow: {
        position: 'absolute',
        bottom: 75,
        marginVertical: 3,
    },
    description: {
        left: 10,
        color: "#ffffff",
        fontSize: 17,
        fontFamily: 'italic',
    },

    groupImage: {
        tintColor: "#3E2F84",
    },

    friendImage: {
        tintColor: "#FFC0CB",
    },

    friendGroupArrow: {
        position: 'absolute',  
        tintColor: "#808080",
        height: 20,
        width: 20,
        left: 300,

    },

    border: {
        borderColor: "#808080",
        borderBottomWidth: 0.3,
        overflow: 'hidden',
    },
    littleIcon: {
        width: 15,
        height: 15,
    },
    little: {
        flexDirection: "row",
        backgroundColor: "#808080",
        left: 30,
        height: 20,
        padding : 2,
        borderRadius: 5,
    },
});
