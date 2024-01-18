import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import callStyle from './CallStyle';
import { useNavigation } from '@react-navigation/native';

const CallEntry = ({ name, onPress }) => (
  <TouchableOpacity onPress={onPress} style={callStyle.newBox}>
    <FontAwesome5 name="user-circle" size={40} color="#8B4513" style={callStyle.userBoxIcon} />
    <View style={callStyle.dateStarContainer}>
      <Text style={callStyle.userName}>{name}</Text>
    </View>
    <View style={callStyle.dateContainer}>
    <Text style={callStyle.date}>Today at 12:26pm</Text>
       </View>
    <View style={callStyle.dateStarContainer}>
      <FontAwesome5 name="star" size={24} color="#8B4513" style={callStyle.starIcon} />
      <FontAwesome5 name="exclamation-circle" size={24} color="#8B4513" style={callStyle.exclamation} />
    </View>
  </TouchableOpacity>
);


const CallScreen = () => {
  const navigation = useNavigation();

  const handleSettingPress = (setting) => {
    // Handle press for each setting item
    console.log(`${setting} Pressed`);
  };
  return (
    <View style={callStyle.container}>
    <View style={callStyle.header}>
      <FontAwesome5 name="phone-alt" size={24} color="#8B4513" style={callStyle.icon} />
      <Text style={callStyle.title}>Call</Text>
      <FontAwesome5 name="search" size={24} color="#8B4513" style={callStyle.icon} />
    </View>

    {/* Box with "All" and "Missed" sections */}
    <View style={callStyle.boxContainer}>
      <TouchableOpacity style={callStyle.boxItem}>
        <Text style={callStyle.boxText}>All</Text>
      </TouchableOpacity>
      <View style={callStyle.separator} />
      <TouchableOpacity style={callStyle.boxItem}>
        <Text style={callStyle.boxText}>Missed</Text>
      </TouchableOpacity>
    </View>

 
    <ScrollView
    contentContainerStyle={callStyle.scrollContentContainer}
    showsVerticalScrollIndicator={false}
  >
    <Text style={callStyle.recentCalls}>Recents</Text>

    {/* Render Call Entries */}
    {[...Array(15)].map((_, index) => (
  <CallEntry
    key={`callEntry_${index}`}
    name="John Doe"
    onPress={() => navigation.navigate('UserProfile')}
  />
))}
  </ScrollView>


      {/* Bottom Icons */}
      <View style={callStyle.bottomIconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Story')}>
          <FontAwesome5 name="circle-notch" size={24} color="#8B4513" style={callStyle.bottomIcon} />
          <Text style={callStyle.bottomIconText}>Story</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Call')}>
          <FontAwesome5 name="phone-alt" size={24} color="#8B4513" style={callStyle.bottomIcon} />
          <Text style={callStyle.bottomIconText}>Calls</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <FontAwesome5 name="comments" size={24} color="#8B4513" style={callStyle.bottomIcon} />
          <Text style={callStyle.bottomIconText}>Chats</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <FontAwesome5 name="user" size={24} color="#8B4513" style={callStyle.bottomIcon} />
          <Text style={callStyle.bottomIconText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <FontAwesome5 name="cog" size={24} color="#8B4513" style={callStyle.bottomIcon} />
          <Text style={callStyle.bottomIconText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default CallScreen;
