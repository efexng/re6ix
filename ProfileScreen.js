import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import ProfileStyle from './ProfileStyle';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={ProfileStyle.container}>
    <View style={ProfileStyle.header}></View>
    <Text style={ProfileStyle.title}>Profile</Text>

   {/* Centered profile */}
   <View style={ProfileStyle.centeredProfile}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome5 name="user-circle" size={100} color="black" />
          <View style={ProfileStyle.aboutBox}>
            <View style={ProfileStyle.aboutBoxContainer}>
              <Text style={ProfileStyle.aboutBoxText}>about</Text>
            </View>
        </View>
        <View style={ProfileStyle.phoneBox}>
            <View style={ProfileStyle.phoneBoxContainer}>
              <Text style={ProfileStyle.phoneBoxText}>phone no</Text>
            </View>
          </View>
        </View>
      </View>
      
    <Text style={ProfileStyle.userName}>Efe Apoki</Text>


      {/* Favorites */}
      <View style={ProfileStyle.favoritesContainer}>
        <Text style={ProfileStyle.favoritesTitle}>Favorites</Text>
        {/* Add your big box or any other content here */}
        <View style={ProfileStyle.bigBox}></View>
      </View>

      {/* Favorites */}
      <View style={ProfileStyle.savesContainer}>
        <Text style={ProfileStyle.savesTitle}>Saves</Text>
        {/* Add your big box or any other content here */}
        <View style={ProfileStyle.bigBox}></View>
      </View>

   



   {/* Bottom Icons */}
   <View style={ProfileStyle.bottomIconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Story')}>
          <FontAwesome5 name="circle-notch" size={24} color="black" style={ProfileStyle.bottomIcon} />
          <Text style={ProfileStyle.bottomIconText}>Story</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Call')}>
          <FontAwesome5 name="phone-alt" size={24} color="black" style={ProfileStyle.bottomIcon} />
          <Text style={ProfileStyle.bottomIconText}>Calls</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <FontAwesome5 name="comments" size={24} color="black" style={ProfileStyle.bottomIcon} />
          <Text style={ProfileStyle.bottomIconText}>Chats</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <FontAwesome5 name="user" size={24} color="black" style={ProfileStyle.bottomIcon} />
          <Text style={ProfileStyle.bottomIconText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <FontAwesome5 name="cog" size={24} color="black" style={ProfileStyle.bottomIcon} />
          <Text style={ProfileStyle.bottomIconText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
