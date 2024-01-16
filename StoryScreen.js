import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import storyStyle from './StoryStyle';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';


const StoryEntry = ({ name, onPress }) => (
  <View style={storyStyle.newBox}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <FontAwesome5 name="user-circle" size={40} color="#8B4513" style={storyStyle.userBoxIcon} />
              </TouchableOpacity>
              <View style={storyStyle.userInfo}>
        <Text style={storyStyle.userName}>John Doe</Text>
      </View>
        <View style={storyStyle.newBoxInfo}>
        <View style={storyStyle.userInfo}>
          <View style={storyStyle.dateStarContainer}>
            <Text style={storyStyle.date}>17h ago</Text>
            <FontAwesome5 name="star" size={24} color="#8B4513" style={storyStyle.starIcon} />
          </View>
        </View>
      </View>
      </View>
);

const StoryScreen = () => {
  const navigation = useNavigation();

  const handleCameraIconClick = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync(); // Request camera permissions
    
    if (status === 'granted') {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.cancelled) {
        // Handle the selected image (result.uri)
        console.log('Image URI:', result.uri);
      }
    } else {
      console.log('Permission denied for camera');
    }
  };
  
  const handleLibraryIconClick = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        // Handle the selected image (result.uri)
        console.log('Image URI:', result.uri);
      }
    } else {
      console.log('Permission denied for media library');
    }
  };

  const handleTextIconClick = () => {
    navigation.navigate('Text'); // Use the name you assigned to the screen
  };


  return (
    <View style={storyStyle.container}>
      <View style={storyStyle.header}>
        <FontAwesome5 name="users" size={24} color="#8B4513" style={storyStyle.icon} />
        <Text style={storyStyle.title}>Story</Text>
        <FontAwesome5 name="search" size={24} color="#8B4513" style={storyStyle.icon} />
      </View>
      
      <ScrollView
    contentContainerStyle={storyStyle.scrollContentContainer}
    showsVerticalScrollIndicator={false}
  >
       {/* User details */}
       <View style={storyStyle.userDetails}>
      <TouchableOpacity onPress={() => navigation.navigate('Update')}>
        <FontAwesome5 name="user-circle" size={40} color="#8B4513" style={storyStyle.userBoxIcon} />
      </TouchableOpacity>
      <View style={storyStyle.userInfo}>
        <Text style={storyStyle.userName}>John Doe</Text>
        <Text style={storyStyle.date}>Today</Text>
      </View>
      <View style={storyStyle.actions}>
        <TouchableOpacity onPress={handleCameraIconClick}>
          <FontAwesome5 name="camera" size={24} color="#8B4513" style={storyStyle.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLibraryIconClick}>
          <FontAwesome5 name="image" size={24} color="#8B4513" style={storyStyle.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTextIconClick}>
      <FontAwesome5 name="pencil-alt" size={24} color="#8B4513" style={storyStyle.actionIcon} />
    </TouchableOpacity>
      </View>
    </View>
      <Text style={storyStyle.text1}>Recently Viewd</Text>
      
      {/* Box containing 5 user icons */}
      <View style={storyStyle.userBox}>
        {[1, 2, 3, 4, 5].map((index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate('UserProfile')}>
          <FontAwesome5 name="user-circle" size={40} color="#8B4513" style={storyStyle.userBoxIcon} />
          </TouchableOpacity>
        ))}
      </View>

     
        <Text style={storyStyle.recentUpdates}>Recents Updates</Text>

        {/* Render Call Entries */}
        {[...Array(15)].map((_, index) => (
      <StoryEntry
        key={`StoryEntry_${index}`}
        name="John Doe"
        navigation={navigation} // Pass the navigation object down to StoryEntry
        onPress={() => navigation.navigate('UserProfile')
        }
      />
    ))}

    <Text style={storyStyle.text2}>Muted Status</Text>


 {/* Box containing 5 user icons */}
 <View style={storyStyle.muted}>
        {[1, 2, 3, 4, 5].map((index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate('UserProfile')}>
          <FontAwesome5 name="user-circle" size={40} color="#8B4513" style={storyStyle.mutedIcon} />
          </TouchableOpacity>
        ))}
      </View>

      </ScrollView>

        {/* Bottom Icons */}
        <View style={storyStyle.bottomIconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Story')}>
          <FontAwesome5 name="circle-notch" size={24} color="#8B4513" style={storyStyle.bottomIcon} />
          <Text style={storyStyle.bottomIconText}>Story</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Call')}>
          <FontAwesome5 name="phone-alt" size={24} color="#8B4513" style={storyStyle.bottomIcon} />
          <Text style={storyStyle.bottomIconText}>Calls</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <FontAwesome5 name="comments" size={24} color="#8B4513" style={storyStyle.bottomIcon} />
          <Text style={storyStyle.bottomIconText}>Chats</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <FontAwesome5 name="user" size={24} color="#8B4513" style={storyStyle.bottomIcon} />
          <Text style={storyStyle.bottomIconText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <FontAwesome5 name="cog" size={24} color="#8B4513" style={storyStyle.bottomIcon} />
          <Text style={storyStyle.bottomIconText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StoryScreen;
