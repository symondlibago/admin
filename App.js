// App.js

import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from './sidebar';
import NavBar from './nav';
import MyEventScreen from './myevent';
import EditScreen from './edit';
import Profile from './profile';
import Notifications from './notification';
import Settings from './settings';
import Feedback from './feedback';
import Budget from './budget';
import Inventory from './inventory';
import Attendees from './attendee';
import Dashboard from './dashboard';
import Event from './event';
import Services from './services';
import Schedule from './schedule';
import About from './about';
import Contact from './contact';
import FindEvent from './findevent';
import Create from './create';
import ViewSched from './viewsched';



const Drawer = createDrawerNavigator();

const MainScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Burger icon to open sidebar */}
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
        <Ionicons name="menu" size={32} color="white" />
      </TouchableOpacity>
      <Dashboard />
      <NavBar />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="MyEventScreen" component={MyEventScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="EditScreen" component={EditScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Drawer.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
        <Drawer.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
        <Drawer.Screen name="Feedback" component={Feedback} options={{ headerShown: false }} />
        <Drawer.Screen name="Budget" component={Budget} options={{ headerShown: false }} />
        <Drawer.Screen name="Inventory" component={Inventory} options={{ headerShown: false }} />
        <Drawer.Screen name="Attendees" component={Attendees} options={{ headerShown: false }} />
        <Drawer.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Drawer.Screen name="Event" component={Event} options={{ headerShown: false }} />
        <Drawer.Screen name="Services" component={Services} options={{ headerShown: false }} />
        <Drawer.Screen name="Schedule" component={Schedule} options={{ headerShown: false }} />
        <Drawer.Screen name="About" component={About} options={{ headerShown: false }} />
        <Drawer.Screen name="Contact" component={Contact} options={{ headerShown: false }} /> 
        <Drawer.Screen name="FindEvent" component={FindEvent} options={{ headerShown: false }} />
        <Drawer.Screen name="Create" component={Create} options={{ headerShown: false }} />
        <Drawer.Screen name="ViewSched" component={ViewSched} options={{ headerShown: false }} />

        

        


        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
});

export default App;
