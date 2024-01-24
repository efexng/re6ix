import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, Keyboard } from 'react-native';
import storyStyle from './StoryStyle';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';


const StoryEntry = ({ name, imageSource, navigation, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={storyStyle.newBox}>
    <Image source={imageSource} style={storyStyle.userBoxImage} />
      <View style={storyStyle.userInfo}>
        <Text style={storyStyle.userName}>{name}</Text>
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
  </TouchableOpacity>
);


const StoryScreen = () => {
  const navigation = useNavigation();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);



  useEffect(() => {
    // Focus on the TextInput when it's mounted
    if (isSearchVisible && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchVisible]);

  const handleSearchPress = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  
  const handleCancelSearch = () => {
    setIsSearchVisible(false);
    setSearchQuery('');
  };

  

  const users = [
    { name: 'John Doe', imageSource: require('./img/user3.jpeg') },
    { name: 'Jane Miller', imageSource: require('./img/user4.jpeg') },
    { name: 'Alice Smith', imageSource: require('./img/user5.jpeg') },
    { name: 'Bob Johnson', imageSource: require('./img/user6.jpeg') },
    { name: 'Eva Davis', imageSource: require('./img/user7.jpeg') },
    { name: 'Michael Brown', imageSource: require('./img/user8.jpeg') },
    { name: 'Sophia Wilson', imageSource: require('./img/user9.jpeg') },
    { name: 'Chris Miller', imageSource: require('./img/user10.jpeg') },
    { name: 'Olivia Martinez', imageSource: require('./img/user11.jpeg') },
    { name: 'David Taylor', imageSource: require('./img/user12.jpeg') },
  ];
  
  

  
  // Filter the entries based on the exact search query match
  // Filter the entries based on the exact search query match
const filteredEntries = users.filter((user) =>
searchQuery ? user.name.toLowerCase().includes(searchQuery.toLowerCase()) : true
);

  

  const handleCameraIconClick = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync(); // Request camera permissions
    
    if (status === 'granted') {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
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

      if (!result.canceled) {
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
  
  const handleUsersIconPress = () => {
    // Navigate to a new screen where users can choose between add to favorites and view all contacts
    navigation.navigate('UsersOptions');
  };



  return (
    <View style={storyStyle.container}>
      <View style={storyStyle.header}>
      <TouchableOpacity onPress={handleUsersIconPress} style={storyStyle.touchable}>
          <FontAwesome5 name="users" size={24} color="#8B4513" style={storyStyle.icon} />
        </TouchableOpacity>
        <Text style={storyStyle.title}>Story</Text>
        <TouchableOpacity onPress={handleSearchPress} style={storyStyle.touchable}>
          <FontAwesome5 name="search" size={24} color="#8B4513" style={storyStyle.icon} />
        </TouchableOpacity>
        {isSearchVisible ? (
      <>
        <View style={storyStyle.searchBox}>
          <FontAwesome5 name="search" size={24} color="#8B4513" style={storyStyle.searchicon} />
          <TextInput
            ref={searchInputRef}
            placeholder="Search..."
            style={storyStyle.searchInput}
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <TouchableOpacity onPress={handleCancelSearch} style={storyStyle.cancelButton}>
            <Text style={storyStyle.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </>
    ) : null}
      </View>
      
      <ScrollView
    contentContainerStyle={storyStyle.scrollContentContainer}
    showsVerticalScrollIndicator={false}
    onScroll={() => Keyboard.dismiss()} 
    scrollEventThrottle={16}  // You can adjust this value based on your needs


  >
       {/* User details */}
       <View style={storyStyle.userDetails}>
       <TouchableOpacity onPress={() => navigation.navigate('Update')}>
        {/* Replace FontAwesome5 with Image */}
        <Image
          source={require('./img/user1.png')} // Provide the path to your image
          style={storyStyle.userBoxImage} // Apply the specified style
        />
      </TouchableOpacity>
      <View style={storyStyle.userInfo}>
        <Text style={storyStyle.userName}>John Doe</Text>
        <Text style={storyStyle.date}>10 minutes ago</Text>
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
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {[
      { image: require('./img/user3.jpeg'), name: 'John ' },
      { image: require('./img/user4.jpeg'), name: 'Jane ' },
      { image: require('./img/user5.jpeg'), name: 'Alice ' },
      { image: require('./img/user6.jpeg'), name: 'Bob ' },
      { image: require('./img/user7.jpeg'), name: 'Eva ' },
      { image: require('./img/user8.jpeg'), name: 'Chris ' },
      { image: require('./img/user9.jpeg'), name: 'Olivia ' },
      { image: require('./img/user10.jpeg'), name: 'Daniel ' },
      { image: require('./img/user11.jpeg'), name: 'Sophia ' },
      { image: require('./img/user12.jpeg'), name: 'Michael ' },
    ].map((item, index) => (
      <TouchableOpacity key={index} onPress={() => navigation.navigate('Update')}>
        {/* Replace FontAwesome5 with Image */}
        <View style={{ alignItems: 'center', marginRight: 30 }}>
          <Image
            source={item.image}
            style={storyStyle.userBoxImageRecent}
          />
          <Text style={ storyStyle.userBoxImageRecentNames }>{item.name}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </ScrollView>
</View>



     
        <Text style={storyStyle.recentUpdates}>Recents Updates</Text>

        {/* Render Call Entries */}
        {users
  .filter((user) => (searchQuery ? user.name.toLowerCase().includes(searchQuery.toLowerCase()) : true))
  .map((user, index) => (
    <StoryEntry
      key={`StoryEntry_${index}`}
      name={user.name}
      onPress={() => navigation.navigate('Update')}
      imageSource={user.imageSource}
    />
  ))}

    

    <Text style={storyStyle.text2}>Muted Status</Text>


 {/* Box containing 5 user icons */}
 <View style={storyStyle.userBox}>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {[
      { image: require('./img/user3.jpeg'), name: 'John ' },
      { image: require('./img/user4.jpeg'), name: 'Jane ' },
      { image: require('./img/user5.jpeg'), name: 'Alice ' },
      { image: require('./img/user6.jpeg'), name: 'Bob ' },
      { image: require('./img/user7.jpeg'), name: 'Eva ' },
      { image: require('./img/user8.jpeg'), name: 'Chris ' },
      { image: require('./img/user9.jpeg'), name: 'Olivia ' },
      { image: require('./img/user10.jpeg'), name: 'Daniel ' },
      { image: require('./img/user11.jpeg'), name: 'Sophia ' },
      { image: require('./img/user12.jpeg'), name: 'Michael ' },
    ].map((item, index) => (
      <TouchableOpacity key={index} onPress={() => navigation.navigate('Update')}>
        {/* Replace FontAwesome5 with Image */}
        <View style={{ alignItems: 'center', marginRight: 30 }}>
          <Image
            source={item.image}
            style={storyStyle.userBoxImageMuted}
          />
          <Text style={ storyStyle.userBoxImageMutedNames }>{item.name}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </ScrollView>
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
