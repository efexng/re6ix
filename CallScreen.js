import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import callStyle from './CallStyle';
import { useNavigation } from '@react-navigation/native';

const CallScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={callStyle.container}>
      <View style={callStyle.header}>
        <FontAwesome5 name="users" size={24} color="black" style={callStyle.icon} />
        <Text style={callStyle.title}>Call</Text>
        <FontAwesome5 name="search" size={24} color="black" style={callStyle.icon} />
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

      <Text style={callStyle.recentCalls}>Recents</Text>

  {/* New Box */}
  <View style={callStyle.newBox}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <FontAwesome5 name="user-circle" size={40} color="black" style={callStyle.userBoxIcon} />
              </TouchableOpacity>
              <View style={callStyle.userInfo}>
        <Text style={callStyle.userName}>John Doe</Text>
      </View>
        <View style={callStyle.newBoxInfo}>
        <View style={callStyle.userInfo}>
          <View style={callStyle.dateStarContainer}>
            <Text style={callStyle.date}>Today at 12:26pm</Text>
            <FontAwesome5 name="star" size={24} color="black" style={callStyle.starIcon} />
            <FontAwesome5 name="exclamation-circle" size={24} color="black" style={callStyle.bottomIcon} />
          </View>
        </View>
      </View>
      </View>
  {/* New Box */}
  <View style={callStyle.newBox}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <FontAwesome5 name="user-circle" size={40} color="black" style={callStyle.userBoxIcon} />
              </TouchableOpacity>
              <View style={callStyle.userInfo}>
        <Text style={callStyle.userName}>John Doe</Text>
      </View>
        <View style={callStyle.newBoxInfo}>
        <View style={callStyle.userInfo}>
          <View style={callStyle.dateStarContainer}>
            <Text style={callStyle.date}>Today at 12:26pm</Text>
            <FontAwesome5 name="star" size={24} color="black" style={callStyle.starIcon} />
            <FontAwesome5 name="exclamation-circle" size={24} color="black" style={callStyle.bottomIcon} />
          </View>
        </View>
      </View>
      </View>
  {/* New Box */}
  <View style={callStyle.newBox}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <FontAwesome5 name="user-circle" size={40} color="black" style={callStyle.userBoxIcon} />
              </TouchableOpacity>
              <View style={callStyle.userInfo}>
        <Text style={callStyle.userName}>John Doe</Text>
      </View>
        <View style={callStyle.newBoxInfo}>
        <View style={callStyle.userInfo}>
          <View style={callStyle.dateStarContainer}>
            <Text style={callStyle.date}>Today at 12:26pm</Text>
            <FontAwesome5 name="star" size={24} color="black" style={callStyle.starIcon} />
            <FontAwesome5 name="exclamation-circle" size={24} color="black" style={callStyle.bottomIcon} />
          </View>
        </View>
      </View>
      </View>
  {/* New Box */}
  <View style={callStyle.newBox}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <FontAwesome5 name="user-circle" size={40} color="black" style={callStyle.userBoxIcon} />
              </TouchableOpacity>
              <View style={callStyle.userInfo}>
        <Text style={callStyle.userName}>John Doe</Text>
      </View>
        <View style={callStyle.newBoxInfo}>
        <View style={callStyle.userInfo}>
          <View style={callStyle.dateStarContainer}>
            <Text style={callStyle.date}>Today at 12:26pm</Text>
            <FontAwesome5 name="star" size={24} color="black" style={callStyle.starIcon} />
            <FontAwesome5 name="exclamation-circle" size={24} color="black" style={callStyle.bottomIcon} />
          </View>
        </View>
      </View>
      </View>
  {/* New Box */}
  <View style={callStyle.newBox}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <FontAwesome5 name="user-circle" size={40} color="black" style={callStyle.userBoxIcon} />
              </TouchableOpacity>
              <View style={callStyle.userInfo}>
        <Text style={callStyle.userName}>John Doe</Text>
      </View>
        <View style={callStyle.newBoxInfo}>
        <View style={callStyle.userInfo}>
          <View style={callStyle.dateStarContainer}>
            <Text style={callStyle.date}>Today at 12:26pm</Text>
            <FontAwesome5 name="star" size={24} color="black" style={callStyle.starIcon} />
            <FontAwesome5 name="exclamation-circle" size={24} color="black" style={callStyle.bottomIcon} />
          </View>
        </View>
      </View>
      </View>
  {/* New Box */}
  <View style={callStyle.newBox}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <FontAwesome5 name="user-circle" size={40} color="black" style={callStyle.userBoxIcon} />
              </TouchableOpacity>
              <View style={callStyle.userInfo}>
        <Text style={callStyle.userName}>John Doe</Text>
      </View>
        <View style={callStyle.newBoxInfo}>
        <View style={callStyle.userInfo}>
          <View style={callStyle.dateStarContainer}>
            <Text style={callStyle.date}>Today at 12:26pm</Text>
            <FontAwesome5 name="star" size={24} color="black" style={callStyle.starIcon} />
            <FontAwesome5 name="exclamation-circle" size={24} color="black" style={callStyle.bottomIcon} />
          </View>
        </View>
      </View>
      </View>
  {/* New Box */}
  <View style={callStyle.newBox}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <FontAwesome5 name="user-circle" size={40} color="black" style={callStyle.userBoxIcon} />
              </TouchableOpacity>
              <View style={callStyle.userInfo}>
        <Text style={callStyle.userName}>John Doe</Text>
      </View>
        <View style={callStyle.newBoxInfo}>
        <View style={callStyle.userInfo}>
          <View style={callStyle.dateStarContainer}>
            <Text style={callStyle.date}>Today at 12:26pm</Text>
            <FontAwesome5 name="star" size={24} color="black" style={callStyle.starIcon} />
            <FontAwesome5 name="exclamation-circle" size={24} color="black" style={callStyle.bottomIcon} />
          </View>
        </View>
      </View>
      </View>



       {/* Bottom Icons */}
       <View style={callStyle.bottomIconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Story')}>
          <FontAwesome5 name="circle-notch" size={24} color="black" style={callStyle.bottomIcon} />
          <Text style={callStyle.bottomIconText}>Story</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Call')}>
          <FontAwesome5 name="phone-alt" size={24} color="black" style={callStyle.bottomIcon} />
          <Text style={callStyle.bottomIconText}>Calls</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <FontAwesome5 name="comments" size={24} color="black" style={callStyle.bottomIcon} />
          <Text style={callStyle.bottomIconText}>Chats</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <FontAwesome5 name="user" size={24} color="black" style={callStyle.bottomIcon} />
          <Text style={callStyle.bottomIconText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <FontAwesome5 name="cog" size={24} color="black" style={callStyle.bottomIcon} />
          <Text style={callStyle.bottomIconText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CallScreen;
