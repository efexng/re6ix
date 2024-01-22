import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Contacts from 'expo-contacts';
import UsersOptionsStyle from './UsersOptionsStyle';
import { FontAwesome5 } from '@expo/vector-icons';


const UsersOptionsScreen = ({ navigation }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [showCheckMark, setShowCheckMark] = useState(false);


  const handleAddToFavorites = async () => {
    try {
      const { status } = await Contacts.requestPermissionsAsync();
  
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Name],
        });
  
        if (data.length > 0) {
          // Display a list of all contacts and allow the user to select one
          navigation.navigate('SelectContact', { contacts: data });
        } else {
          console.log('No contacts available.');
        }
      } else {
        console.log('Permission denied for accessing contacts.');
      }
    } catch (error) {
      console.error('Error accessing contacts:', error);
    }
  };
  const handleAllContacts = () => {
    setShowCheckMark(!showCheckMark);
  };

  return (
    <View style={UsersOptionsStyle.container}>
      <Text style={UsersOptionsStyle.title}>Choose an option:</Text>
      <TouchableOpacity style={UsersOptionsStyle.optionButton} onPress={handleAddToFavorites}>
        <Text style={UsersOptionsStyle.optionButtonText}>Add to Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[UsersOptionsStyle.optionButton, showCheckMark && UsersOptionsStyle.selectedOption]}
        onPress={handleAllContacts}
      >
        <Text style={UsersOptionsStyle.optionButtonText}>View All Contacts</Text>
        <Text style={UsersOptionsStyle.sharingText}>
          Sharing with all contacts
        </Text>
        {showCheckMark && (
          <FontAwesome5
            name="check"
            size={20}
            color="green"
            style={UsersOptionsStyle.checkMark} // Add your custom check mark style here
          />
        )}
      </TouchableOpacity>



      {/* Display selected contact information */}
      {selectedContact && (
        <View style={UsersOptionsStyle.contactContainer}>
          <Text style={UsersOptionsStyle.contactText}>Selected Contact:</Text>
          <Text style={UsersOptionsStyle.contactText}>{`Name: ${selectedContact.name}`}</Text>
          <Text style={UsersOptionsStyle.contactText}>{`Phone: ${selectedContact.phoneNumbers[0].number}`}</Text>
        </View>
      )}

        {/* Bottom Icons */}
        <View style={UsersOptionsStyle.bottomIconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Story')}>
          <FontAwesome5 name="circle-notch" size={24} color="#8B4513" style={UsersOptionsStyle.bottomIcon} />
          <Text style={UsersOptionsStyle.bottomIconText}>Story</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Call')}>
          <FontAwesome5 name="phone-alt" size={24} color="#8B4513" style={UsersOptionsStyle.bottomIcon} />
          <Text style={UsersOptionsStyle.bottomIconText}>Calls</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <FontAwesome5 name="comments" size={24} color="#8B4513" style={UsersOptionsStyle.bottomIcon} />
          <Text style={UsersOptionsStyle.bottomIconText}>Chats</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <FontAwesome5 name="user" size={24} color="#8B4513" style={UsersOptionsStyle.bottomIcon} />
          <Text style={UsersOptionsStyle.bottomIconText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <FontAwesome5 name="cog" size={24} color="#8B4513" style={UsersOptionsStyle.bottomIcon} />
          <Text style={UsersOptionsStyle.bottomIconText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UsersOptionsScreen;
