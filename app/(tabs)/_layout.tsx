import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabsLayout() {
  const asset = require('../../assets/images/firefly4.jpg')
  return <Tabs 
  screenOptions={{ headerShown: false, 
    tabBarActiveTintColor: "#ffff",
    tabBarInactiveTintColor: "#ffffff54",
    tabBarStyle: {
     backgroundColor: "#424549",
     borderColor: "#42454944"
    }  
  }} 
    >
    <Tabs.Screen 
    name="index"
    options={{
      headerShown: false,
      headerTitleAlign: "center",
      title: "Home",
      tabBarIcon: ({focused, color}) => (
          <Ionicons name="home" size={25} color={focused ? "#ffffff" : color}/>
      )
    }}/>
    <Tabs.Screen 
    name="notifications"
    options={{
      headerShown: false,
      headerTitleAlign: "center",
      title:"Notifications",
      tabBarIcon: ({focused, color}) => (
        <Ionicons name="notifications" size={25} color={focused ? "#ffff" : color}/>
      )
    }}/>
    <Tabs.Screen 
    name="you"
    options={{
      headerShown: false,
      headerTitleAlign: "center",
      title:"You",
      tabBarIcon: ({size}) => (
        <Image source={asset} style={{height:size, width:size, borderRadius:50}}/>
      ),
      tabBarStyle:{
        backgroundColor: "#edb3dbff",
        borderColor: "#edb3dbff",
      }
    }}/>
    </Tabs>
    
}
