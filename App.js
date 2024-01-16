import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';
import StoryScreen from './StoryScreen'; // Import the StoryScreen component
import CallScreen from './CallScreen'; // Import the CallScreen component
import ChatScreen from './ChatScreen'; // Import the CallScreen component
import ProfileScreen from './ProfileScreen'; // Import the CallScreen component
import SettingScreen from './SettingScreen'; // Import the CallScreen component
import TextInputScreen from './TextInputScreen'; // Import the new screen component
import UpdateScreen from './UpdateScreen';


class HomeScreen extends React.Component {
  componentDidMount() {
    // Delayed navigation to ChatScreen after 5 seconds
    this.delayedNavigation = setTimeout(() => {
      this.props.navigation.navigate('Setting');
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the timeout when the component unmounts
    clearTimeout(this.delayedNavigation);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          animationEnabled: false, // Disable transition animation
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Hide default header
        />
        <Stack.Screen
          name="Story"
          component={StoryScreen}
          options={{
            title: null, // Remove the title
            headerLeft: null, // Hide the back button
            headerTransparent: true, // Remove the line at the top
          }}
        />
        <Stack.Screen
          name="Call"
          component={CallScreen}
          options={{
            title: null,
            headerLeft: null, // Hide the back button
            headerTransparent: true, // Remove the line at the top
          }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            title: null,
            headerLeft: null, // Hide the back button
            headerTransparent: true, // Remove the line at the top
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: null,
            headerLeft: null, // Hide the back button
            headerTransparent: true, // Remove the line at the top
          }}
        />
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            title: null,
            headerLeft: null, // Hide the back button
            headerTransparent: true, // Remove the line at the top
          }}
        />
        <Stack.Screen
          name="Text"
          component={TextInputScreen} // Ensure you are using the correct component reference
          options={{
            title: null,
            headerLeft: null, // Hide the back button
            headerTransparent: true, // Remove the line at the top
          }}
        />
        <Stack.Screen
          name="Update"
          component={UpdateScreen} // Ensure you are using the correct component reference
          options={{
            title: null,
            headerLeft: null, // Hide the back button
            headerTransparent: true, // Remove the line at the top
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
