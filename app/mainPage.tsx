import { Image, ScrollView, StyleSheet, Text, View } from "react-native";


const asset = require('../assets/images/server-icon.png');
const mainPage = () => (
    <View style={styles.background}>
        <View style={styles.sideBar}>
            <Image
            style={styles.serverIcon}
            source={asset}>
            </Image>
            <Image
            style={styles.serverIcon}
            source={asset}>
            </Image>
            <Image
            style={styles.serverIcon}
            source={asset}>
            </Image>
            <Image
            style={styles.serverIcon}
            source={asset}>
            </Image>
            <Image
            style={styles.serverIcon}
            source={asset}>
            </Image>
            <Image
            style={styles.serverIcon}
            source={asset}>
            </Image>
            <Image
            style={styles.serverIcon}
            source={asset}>
            </Image>
            <Image
            style={styles.serverIcon}
            source={asset}>
            </Image>
            <Image
            style={styles.serverIcon}
            source={asset}>
            </Image>
            <Image
            style={styles.serverIcon}
            source={asset}>
            </Image>
            <Image
            style={styles.serverIcon}
            source={asset}>
            </Image>
            <Image
            style={styles.serverIcon}
            source={asset}>
            </Image>
            <Image
            style={styles.serverIcon}
            source={asset}>
            </Image>
            <Image
            style={styles.serverIcon}
            source={asset}>
            </Image>
        </View>
        <ScrollView stickyHeaderIndices={[1]}>
            <View style={styles.mainArea}>
                    <Text style={styles.header}>Messages</Text>
                <View style={{flex: 0,flexDirection:"row", marginBottom:20 }}>
                    <Image style={{resizeMode: "cover",borderRadius: 50,height: 35,width: 35, marginHorizontal: 5}} source={asset}></Image>
                    <Image style={{resizeMode: "cover",borderRadius: 50,height: 35,width: 35, marginHorizontal: 5}} source={asset}></Image>
                    <View style={{flex:0, backgroundColor:"#40444b", borderRadius: 30, justifyContent:"center", alignItems:"center", flexGrow:1, flexDirection: "row"}}>
                        <Image style={{resizeMode: "cover",borderRadius: 50,height: 35,width: 35}} source={asset}></Image>
                        <Text style={{marginLeft:5, fontSize: 15, fontWeight: "bold",color: "#ffffff"}}>Add Friends</Text>
                    </View>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flex:0}}>
                    <View style={{flex:0, backgroundColor:"rgba(48, 52, 58, 1)0", flexDirection:"row", borderRadius:15, marginBottom:20, padding: 10, marginRight:10 }}>
                        <Image style={{resizeMode: "cover",borderRadius: 20,height: 90,width:90 }}source={asset}></Image>
                        <View style={{flex:0, flexDirection:"column", marginLeft: 10}}>
                            <Image style={{resizeMode: "cover",borderRadius: 50,height: 35,width: 35,}} source={asset}></Image>
                            <Text style={styles.primaryTextHighlight}>LaserGreen</Text>
                            <Text style={styles.secondaryText}>osu!</Text>
                        </View>
                    </View>
                    <View style={{flex:0, backgroundColor:"rgba(48, 52, 58, 1)0", flexDirection:"row", borderRadius:15, marginBottom:20, padding: 10 }}>
                        <Image style={{resizeMode: "cover",borderRadius: 20,height: 90,width:90 }}source={asset}></Image>
                        <View style={{flex:0, flexDirection:"column", marginLeft: 8}}>
                            <Image style={{resizeMode: "cover",borderRadius: 50,height: 35,width: 35,}} source={asset}></Image>
                            <Text style={styles.primaryTextHighlight}>Henry2</Text>
                            <Text style={styles.secondaryText}>Gamma: Stalker</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.directMessageHighlight}>
                    <Image style={styles.profileIcon} source={asset}></Image>
                    <View style={styles.profileInfo}>
                        <Text style={styles.primaryText}>LaserGreen</Text>
                        <Text style={styles.secondaryText}>You: Toby Fox</Text>
                    </View>
                    <Text style={styles.timeText}>21m</Text>
                </View>
                <View style={styles.directMessage}>
                        <Image style={styles.profileIcon} source={asset}></Image>
                    <View style={styles.profileInfo}>
                        <Text style={styles.primaryText}>XxJoeSwag727xX</Text>
                        <Text style={styles.secondaryText}>XxJoeSwag727xX: lethal time?</Text>
                    </View>
                    <Text style={styles.timeText}>1d</Text>
                </View>
                <View style={styles.directMessage}>
                        <Image style={styles.profileIcon} source={asset}></Image>
                    <View style={styles.profileInfo}>
                        <Text style={styles.primaryText}>Japanese Uni</Text>
                        <Text style={styles.secondaryText}>LaserGreen: 今は大学です</Text>
                    </View>
                    <Text style={styles.timeText}>3d</Text>
                </View>
            </View>
        </ScrollView>
    <View style={styles.navigationBar}>
        <View style={{flex:0, flexDirection: "column", justifyContent: "center"}}>
            <Image style={styles.profileIcon} source={asset}></Image>
            <Text style={styles.navTextHighlight}>Home</Text>
        </View>
        <View style={{flex:0, flexDirection: "column"}}>
            <Image style={{marginLeft: "auto", marginRight:"auto",resizeMode: "cover",borderRadius: 50,height: 45,width: 45, marginBottom: 3}} source={asset}></Image>
            <Text style={styles.navText}>Notifications</Text>
        </View>
        <View style={{flex:0, flexDirection: "column", justifyContent: "center"}}>
            <Image style={styles.profileIcon} source={asset}></Image>
            <Text style={styles.navText}>You</Text>
        </View>
      </View>
    </View>
  );
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "auto",
        height: "auto",
        backgroundColor: "#1e2124"
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
        gap:10,
        padding: 5,
        marginTop: 50
        },
    serverIcon: {
        resizeMode: "cover",
        borderRadius: 50,
        height: 55,
        width: 55,
        marginVertical: 3
        },
    profileIcon: {
        resizeMode: "cover",
        borderRadius: 50,
        height: 45,
        width: 45,
        marginVertical: 3
        },
    mainArea: {
        flex:1,
        width: "auto",
        height: "auto",
        marginLeft: 80,
        padding:10,
        paddingBottom: 1000,
        borderTopLeftRadius: 20,
        backgroundColor: "#282b30",
        alignContent: "space-evenly"
        },
    directMessage: {
        flex:0,
        flexDirection: "row",
        width: "auto",
        alignContent: "center",
        padding: 10,
        borderRadius: 10,
        marginVertical: 1
    },
    directMessageHighlight: {
        flex:0,
        flexDirection: "row",
        width: "auto",
        alignContent: "center",
        backgroundColor: "rgba(48, 52, 58, 1)0",
        padding: 10,
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
        justifyContent: "space-between",
        alignContent:"center",
        padding: 15,
        paddingHorizontal: 50,
        width: "auto",
        height: 100,
        backgroundColor: "#424549"
      },
    header: {
        fontSize: 20,
        padding: 5,
        marginBottom: 10,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    primaryText: { 
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff92"
    },
    primaryTextHighlight: { 
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff"
    },
    secondaryText: {
        fontSize: 15, 
        color: "#ffffff92"
    },
    timeText: { fontSize: 15,
        color: "#ffffff92",
        alignSelf:"flex-end",
        paddingBottom: 25,
        marginLeft: "auto",
    },
    navTextHighlight: { 
        fontSize: 15,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center"
    },
    navText: { 
        fontSize: 15,
        fontWeight: "bold",
        color: "#ffffff92",
        textAlign: "center"
        },
    
});

 export default mainPage;