import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import storyStyle from './StoryStyle';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';


const StoryScreen = () => {
  const navigation = useNavigation();

  const handleCameraIconClick = () => {
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // Handle the selected image (response.uri)
        console.log('Image URI: ', response.uri);
      }
    });
  };

  return (
    <View style={storyStyle.container}>
      <View style={storyStyle.header}>
        <FontAwesome5 name="users" size={24} color="black" style={storyStyle.icon} />
        <Text style={storyStyle.title}>Story</Text>
        <FontAwesome5 name="search" size={24} color="black" style={storyStyle.icon} />
      </View>
      
       {/* User details */}
       <View style={storyStyle.userDetails}>
      <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
        <FontAwesome5 name="user-circle" size={40} color="black" style={storyStyle.userBoxIcon} />
      </TouchableOpacity>
      <View style={storyStyle.userInfo}>
        <Text style={storyStyle.userName}>John Doe</Text>
        <Text style={storyStyle.date}>Today</Text>
      </View>
      <View style={storyStyle.actions}>
        <TouchableOpacity onPress={handleCameraIconClick}>
          <FontAwesome5 name="camera" size={24} color="black" style={storyStyle.actionIcon} />
        </TouchableOpacity>
        <FontAwesome5 name="pencil-alt" size={24} color="black" style={storyStyle.actionIcon} />
      </View>
    </View>
      <Text style={storyStyle.text1}>Recenntly Viewd</Text>
      
      {/* Box containing 5 user icons */}
      <View style={storyStyle.userBox}>
        {[1, 2, 3, 4, 5].map((index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate('UserProfile')}>
          <FontAwesome5 name="user-circle" size={40} color="black" style={storyStyle.userBoxIcon} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Recent Updates text */}
      <Text style={storyStyle.recentUpdates}>Recent Updates</Text>

      {/* New Box */}
      <View style={storyStyle.newBox}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <FontAwesome5 name="user-circle" size={40} color="black" style={storyStyle.userBoxIcon} />
              </TouchableOpacity>
              <View style={storyStyle.userInfo}>
        <Text style={storyStyle.userName}>John Doe</Text>
      </View>
        <View style={storyStyle.newBoxInfo}>
        <View style={storyStyle.userInfo}>
          <View style={storyStyle.dateStarContainer}>
            <Text style={storyStyle.date}>Today at 12:26pm</Text>
            <FontAwesome5 name="star" size={24} color="black" style={storyStyle.starIcon} />
          </View>
        </View>
      </View>
      </View>
      {/* New Box */}
      <View style={storyStyle.newBox}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <FontAwesome5 name="user-circle" size={40} color="black" style={storyStyle.userBoxIcon} />
              </TouchableOpacity>
              <View style={storyStyle.userInfo}>
        <Text style={storyStyle.userName}>John Doe</Text>
      </View>
        <View style={storyStyle.newBoxInfo}>
        <View style={storyStyle.userInfo}>
          <View style={storyStyle.dateStarContainer}>
            <Text style={storyStyle.date}>Today at 12:26pm</Text>
            <FontAwesome5 name="star" size={24} color="black" style={storyStyle.starIcon} />
          </View>
        </View>
      </View>
      </View>
      {/* New Box */}
      <View style={storyStyle.newBox}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <FontAwesome5 name="user-circle" size={40} color="black" style={storyStyle.userBoxIcon} />
              </TouchableOpacity>
              <View style={storyStyle.userInfo}>
        <Text style={storyStyle.userName}>John Doe</Text>
      </View>
        <View style={storyStyle.newBoxInfo}>
        <View style={storyStyle.userInfo}>
          <View style={storyStyle.dateStarContainer}>
            <Text style={storyStyle.date}>Today at 12:26pm</Text>
          </View>
        </View>
      </View>
      </View>
      {/* New Box */}
      <View style={storyStyle.newBox}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <FontAwesome5 name="user-circle" size={40} color="black" style={storyStyle.userBoxIcon} />
              </TouchableOpacity>
              <View style={storyStyle.userInfo}>
        <Text style={storyStyle.userName}>John Doe</Text>
      </View>
        <View style={storyStyle.newBoxInfo}>
        <View style={storyStyle.userInfo}>
          <View style={storyStyle.dateStarContainer}>
            <Text style={storyStyle.date}>Today at 12:26pm</Text>
          </View>
        </View>
      </View>
      </View>
      

 {/* Box containing 5 user icons */}
 <View style={storyStyle.muted}>
        {[1, 2, 3, 4, 5].map((index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate('UserProfile')}>
          <FontAwesome5 name="user-circle" size={40} color="black" style={storyStyle.mutedIcon} />
          </TouchableOpacity>
        ))}
      </View>


        {/* Bottom Icons */}
        <View style={storyStyle.bottomIconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Story')}>
          <FontAwesome5 name="circle-notch" size={24} color="black" style={storyStyle.bottomIcon} />
          <Text style={storyStyle.bottomIconText}>Story</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Call')}>
          <FontAwesome5 name="phone-alt" size={24} color="black" style={storyStyle.bottomIcon} />
          <Text style={storyStyle.bottomIconText}>Calls</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <FontAwesome5 name="comments" size={24} color="black" style={storyStyle.bottomIcon} />
          <Text style={storyStyle.bottomIconText}>Chats</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <FontAwesome5 name="user" size={24} color="black" style={storyStyle.bottomIcon} />
          <Text style={storyStyle.bottomIconText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <FontAwesome5 name="cog" size={24} color="black" style={storyStyle.bottomIcon} />
          <Text style={storyStyle.bottomIconText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StoryScreen;
