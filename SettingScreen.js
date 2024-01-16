// ProfileScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import SettingStyle from './SettingStyle';
import { useNavigation } from '@react-navigation/native';

const SettingScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSettingPress = (setting) => {
    // Handle press for each setting item
    console.log(`${setting} Pressed`);
  };

  return (
<View style={SettingStyle.container}>
    {/* Search Box */}
   
       

      <View style={SettingStyle.header}></View>
      <Text style={SettingStyle.title}>Settings</Text>
      <ScrollView
        style={SettingStyle.scrollContainer}
        contentContainerStyle={SettingStyle.scrollContentContainer}
        showsVerticalScrollIndicator={false} // Optionally hide the vertical scroll indicator
      >
       {/* Search Box */}
    <View style={SettingStyle.searchContainer}>
      <FontAwesome5 name="search" size={20} color="#555" style={SettingStyle.searchIcon} />
      <TextInput
        style={SettingStyle.searchBox}
        placeholder="Search settings..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
    </View>
         {/* Settings List */}
      <View style={SettingStyle.settingBox}>
        <Text style={SettingStyle.settingBoxTitle}>Account Settings</Text>
        <TouchableOpacity style={SettingStyle.settingItem} onPress={() => handleSettingPress("Account")}>
          <Text style={SettingStyle.settingItemText}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={SettingStyle.settingItem} onPress={() => handleSettingPress("Privacy")}>
          <Text style={SettingStyle.settingItemText}>Privacy & Security</Text>
        </TouchableOpacity>
        <TouchableOpacity style={SettingStyle.settingItem} onPress={() => handleSettingPress("Liked Messages")}>
          <Text style={SettingStyle.settingItemText}>Liked Messages</Text>
        </TouchableOpacity>
      </View>

      <View style={SettingStyle.settingBox}>
        <Text style={SettingStyle.settingBoxTitle}>Communication</Text>
        <TouchableOpacity style={SettingStyle.settingItem} onPress={() => handleSettingPress("Chats")}>
          <Text style={SettingStyle.settingItemText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={SettingStyle.settingItem} onPress={() => handleSettingPress("Channels")}>
          <Text style={SettingStyle.settingItemText}>Channels</Text>
        </TouchableOpacity>
      </View>

      <View style={SettingStyle.settingBox}>
        <Text style={SettingStyle.settingBoxTitle}>Notifications</Text>
        <TouchableOpacity style={SettingStyle.settingItem} onPress={() => handleSettingPress("Notifications")}>
          <Text style={SettingStyle.settingItemText}>Notifications</Text>
        </TouchableOpacity>
      </View>

      <View style={SettingStyle.settingBox}>
        <Text style={SettingStyle.settingBoxTitle}>Appearance</Text>
        <TouchableOpacity style={SettingStyle.settingItem} onPress={() => handleSettingPress("Your Data")}>
          <Text style={SettingStyle.settingItemText}>Your Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={SettingStyle.settingItem} onPress={() => handleSettingPress("Help Center")}>
          <Text style={SettingStyle.settingItemText}>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={SettingStyle.settingItem} onPress={() => handleSettingPress("Invite Friends")}>
          <Text style={SettingStyle.settingItemText}>Invite Friends</Text>
        </TouchableOpacity>
      </View>

      <View style={SettingStyle.settingBox}>
        <Text style={SettingStyle.settingBoxTitle}>Feedback and Information</Text>
        <TouchableOpacity style={SettingStyle.settingItem} onPress={() => handleSettingPress("Feedback")}>
          <Text style={SettingStyle.settingItemText}>Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={SettingStyle.settingItem} onPress={() => handleSettingPress("App Information")}>
          <Text style={SettingStyle.settingItemText}>App Information</Text>
        </TouchableOpacity>
      </View>


      </ScrollView>

      
      {/* Bottom Icons */}
      <View style={SettingStyle.bottomIconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Story')}>
          <FontAwesome5 name="circle-notch" size={24} color="#8B4513" style={SettingStyle.bottomIcon} />
          <Text style={SettingStyle.bottomIconText}>Story</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Call')}>
          <FontAwesome5 name="phone-alt" size={24} color="#8B4513" style={SettingStyle.bottomIcon} />
          <Text style={SettingStyle.bottomIconText}>Calls</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <FontAwesome5 name="comments" size={24} color="#8B4513" style={SettingStyle.bottomIcon} />
          <Text style={SettingStyle.bottomIconText}>Chats</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <FontAwesome5 name="user" size={24} color="#8B4513" style={SettingStyle.bottomIcon} />
          <Text style={SettingStyle.bottomIconText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <FontAwesome5 name="cog" size={24} color="#8B4513" style={SettingStyle.bottomIcon} />
          <Text style={SettingStyle.bottomIconText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingScreen;
