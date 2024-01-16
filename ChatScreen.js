import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import ChatStyle from './ChatStyle';
import { useNavigation } from '@react-navigation/native';


const ChatEntry = ({ message, name, onPress }) => (
  <View style={ChatStyle.newBox}>
    <TouchableOpacity onPress={onPress}>
      <FontAwesome5 name="user-circle" size={40} color="#8B4513" style={ChatStyle.userBoxIcon} />
    </TouchableOpacity>
    <View style={ChatStyle.userInfo}>
      <Text style={ChatStyle.userName}>{name}</Text>
      <Text style={ChatStyle.userMessage}>{message}</Text>
    </View>
    <View style={ChatStyle.newBoxInfo}>
      <View style={ChatStyle.dateStarContainer}>
        <Text style={ChatStyle.dateText}>02:45</Text>
        <FontAwesome5 name="star" size={24} color="#8B4513" style={ChatStyle.starIcon} />
      </View>
    </View>
  </View>
);

const ChatScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={ChatStyle.container}>
      <View style={ChatStyle.header}>
        <FontAwesome5 name="trash-alt" size={24} color="#8B4513" style={ChatStyle.icon} />
        <Text style={ChatStyle.title}>Chat</Text>
        <FontAwesome5 name="camera" size={24} color="#8B4513" style={ChatStyle.icon} />
        
      </View>

        {/* Box with "All" and "Missed" sections */}
        <View style={ChatStyle.boxContainer}>
        <TouchableOpacity style={ChatStyle.boxItem}>
          <Text style={ChatStyle.boxText}>All Chats</Text>
        </TouchableOpacity>
        <View style={ChatStyle.separator} />
        <TouchableOpacity style={ChatStyle.boxItem}>
          <Text style={ChatStyle.boxText}>Groups</Text>
        </TouchableOpacity>
        <View style={ChatStyle.separator} />
        <TouchableOpacity style={ChatStyle.boxItem}>
          <Text style={ChatStyle.boxText}>Favourites</Text>
        </TouchableOpacity>
        <View style={ChatStyle.separator} />
        <TouchableOpacity style={ChatStyle.boxItem}>
          <Text style={ChatStyle.boxText}>Channels</Text>
        </TouchableOpacity>
      </View>


      <ScrollView
        contentContainerStyle={ChatStyle.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Render Call Entries */}
        {[...Array(15)].map((_, index) => (
          <ChatEntry
            key={`ChatEntry${index}`}
            name="John Doe"
            message="Hello World"
            onPress={() => navigation.navigate('UserProfile')}
          />
        ))}
      </ScrollView>


         {/* Bottom Icons */}
         <View style={ChatStyle.bottomIconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Story')}>
          <FontAwesome5 name="circle-notch" size={24} color="#8B4513" style={ChatStyle.bottomIcon} />
          <Text style={ChatStyle.bottomIconText}>Story</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Call')}>
          <FontAwesome5 name="phone-alt" size={24} color="#8B4513" style={ChatStyle.bottomIcon} />
          <Text style={ChatStyle.bottomIconText}>Calls</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <FontAwesome5 name="comments" size={24} color="#8B4513" style={ChatStyle.bottomIcon} />
          <Text style={ChatStyle.bottomIconText}>Chats</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <FontAwesome5 name="user" size={24} color="#8B4513" style={ChatStyle.bottomIcon} />
          <Text style={ChatStyle.bottomIconText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <FontAwesome5 name="cog" size={24} color="#8B4513" style={ChatStyle.bottomIcon} />
          <Text style={ChatStyle.bottomIconText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
