import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import ChatStyle from './ChatStyle';
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={ChatStyle.container}>
      <View style={ChatStyle.header}>
        <FontAwesome5 name="trash-alt" size={24} color="black" style={ChatStyle.icon} />
        <Text style={ChatStyle.title}>Chat</Text>
        <FontAwesome5 name="camera" size={24} color="black" style={ChatStyle.icon} />
        
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


  {/* New Box */}
  <View style={ChatStyle.newBox}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <FontAwesome5 name="user-circle" size={40} color="black" style={ChatStyle.userBoxIcon} />
              </TouchableOpacity>
              <View style={ChatStyle.userInfo}>
        <Text style={ChatStyle.userName}>John Doe</Text>
      </View>
        <View style={ChatStyle.newBoxInfo}>
        <View style={ChatStyle.userInfo}>
          <View style={ChatStyle.dateStarContainer}>
            <Text style={ChatStyle.date}>Today at 12:26pm</Text>
            <FontAwesome5 name="star" size={24} color="black" style={ChatStyle.starIcon} />
          </View>
        </View>
      </View>
      </View>
  {/* New Box */}
  <View style={ChatStyle.newBox}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <FontAwesome5 name="user-circle" size={40} color="black" style={ChatStyle.userBoxIcon} />
              </TouchableOpacity>
              <View style={ChatStyle.userInfo}>
        <Text style={ChatStyle.userName}>John Doe</Text>
      </View>
        <View style={ChatStyle.newBoxInfo}>
        <View style={ChatStyle.userInfo}>
          <View style={ChatStyle.dateStarContainer}>
            <Text style={ChatStyle.date}>Today at 12:26pm</Text>
            <FontAwesome5 name="star" size={24} color="black" style={ChatStyle.starIcon} />
          </View>
        </View>
      </View>
      </View>
  {/* New Box */}
  <View style={ChatStyle.newBox}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <FontAwesome5 name="user-circle" size={40} color="black" style={ChatStyle.userBoxIcon} />
              </TouchableOpacity>
              <View style={ChatStyle.userInfo}>
        <Text style={ChatStyle.userName}>John Doe</Text>
      </View>
        <View style={ChatStyle.newBoxInfo}>
        <View style={ChatStyle.userInfo}>
          <View style={ChatStyle.dateStarContainer}>
            <Text style={ChatStyle.date}>Today at 12:26pm</Text>
            <FontAwesome5 name="star" size={24} color="black" style={ChatStyle.starIcon} />
          </View>
        </View>
      </View>
      </View>
  {/* New Box */}
  <View style={ChatStyle.newBox}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <FontAwesome5 name="user-circle" size={40} color="black" style={ChatStyle.userBoxIcon} />
              </TouchableOpacity>
              <View style={ChatStyle.userInfo}>
        <Text style={ChatStyle.userName}>John Doe</Text>
      </View>
        <View style={ChatStyle.newBoxInfo}>
        <View style={ChatStyle.userInfo}>
          <View style={ChatStyle.dateStarContainer}>
            <Text style={ChatStyle.date}>Today at 12:26pm</Text>
            <FontAwesome5 name="star" size={24} color="black" style={ChatStyle.starIcon} />
          </View>
        </View>
      </View>
      </View>
  {/* New Box */}
  <View style={ChatStyle.newBox}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <FontAwesome5 name="user-circle" size={40} color="black" style={ChatStyle.userBoxIcon} />
              </TouchableOpacity>
              <View style={ChatStyle.userInfo}>
        <Text style={ChatStyle.userName}>John Doe</Text>
      </View>
        <View style={ChatStyle.newBoxInfo}>
        <View style={ChatStyle.userInfo}>
          <View style={ChatStyle.dateStarContainer}>
            <Text style={ChatStyle.date}>Today at 12:26pm</Text>
            <FontAwesome5 name="star" size={24} color="black" style={ChatStyle.starIcon} />
          </View>
        </View>
      </View>
      </View>
  {/* New Box */}
  <View style={ChatStyle.newBox}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <FontAwesome5 name="user-circle" size={40} color="black" style={ChatStyle.userBoxIcon} />
              </TouchableOpacity>
              <View style={ChatStyle.userInfo}>
        <Text style={ChatStyle.userName}>John Doe</Text>
      </View>
        <View style={ChatStyle.newBoxInfo}>
        <View style={ChatStyle.userInfo}>
          <View style={ChatStyle.dateStarContainer}>
            <Text style={ChatStyle.date}>Today at 12:26pm</Text>
            <FontAwesome5 name="star" size={24} color="black" style={ChatStyle.starIcon} />
          </View>
        </View>
      </View>
      </View>
  {/* New Box */}
  <View style={ChatStyle.newBox}>
              <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <FontAwesome5 name="user-circle" size={40} color="black" style={ChatStyle.userBoxIcon} />
              </TouchableOpacity>
              <View style={ChatStyle.userInfo}>
        <Text style={ChatStyle.userName}>John Doe</Text>
      </View>
        <View style={ChatStyle.newBoxInfo}>
        <View style={ChatStyle.userInfo}>
          <View style={ChatStyle.dateStarContainer}>
            <Text style={ChatStyle.date}>Today at 12:26pm</Text>
            <FontAwesome5 name="star" size={24} color="black" style={ChatStyle.starIcon} />
          </View>
        </View>
      </View>
      </View>



         {/* Bottom Icons */}
         <View style={ChatStyle.bottomIconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Story')}>
          <FontAwesome5 name="circle-notch" size={24} color="black" style={ChatStyle.bottomIcon} />
          <Text style={ChatStyle.bottomIconText}>Story</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Call')}>
          <FontAwesome5 name="phone-alt" size={24} color="black" style={ChatStyle.bottomIcon} />
          <Text style={ChatStyle.bottomIconText}>Calls</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <FontAwesome5 name="comments" size={24} color="black" style={ChatStyle.bottomIcon} />
          <Text style={ChatStyle.bottomIconText}>Chats</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <FontAwesome5 name="user" size={24} color="black" style={ChatStyle.bottomIcon} />
          <Text style={ChatStyle.bottomIconText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <FontAwesome5 name="cog" size={24} color="black" style={ChatStyle.bottomIcon} />
          <Text style={ChatStyle.bottomIconText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
