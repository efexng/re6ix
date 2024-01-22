import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import SelectContactStyle from './SelectContactStyle';
import { FontAwesome5 } from '@expo/vector-icons';

const SelectContactScreen = ({ route, navigation }) => {
  const { contacts, selectedContacts: parentSelectedContacts, onSelectContacts } = route.params;
  const [selectedContacts, setSelectedContacts] = useState(parentSelectedContacts || []);
  const [searchQuery, setSearchQuery] = useState('');
  const sortedContacts = contacts
    ? contacts.slice().sort((a, b) => {
        const nameA = a.name ? a.name.toLowerCase() : '';
        const nameB = b.name ? b.name.toLowerCase() : '';
        return nameA.localeCompare(nameB);
      })
    : [];

  useEffect(() => {
    setSelectedContacts(parentSelectedContacts || []);
  }, [parentSelectedContacts]);

  useFocusEffect(
    useCallback(() => {
      // Load selected contacts from AsyncStorage on screen focus
      loadSelectedContacts();
    }, [])
  );

  const loadSelectedContacts = async () => {
    try {
      const storedSelectedContacts = await AsyncStorage.getItem('selectedContacts');
      if (storedSelectedContacts) {
        setSelectedContacts(JSON.parse(storedSelectedContacts));
      }
    } catch (error) {
      console.error('Error loading selected contacts:', error);
    }
  };

  const saveSelectedContacts = async () => {
    try {
      // Save selected contacts to AsyncStorage
      await AsyncStorage.setItem('selectedContacts', JSON.stringify(selectedContacts));
    } catch (error) {
      console.error('Error saving selected contacts:', error);
    }
  };

  const filteredContacts = sortedContacts.filter((contact) => {
    const contactName = contact.name || '';
    const contactNumber =
      Array.isArray(contact.phoneNumbers) && contact.phoneNumbers.length > 0
        ? contact.phoneNumbers[0].number
        : '';

    return (
      contactName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contactNumber.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleRemoveContact = (contactToRemove) => {
    setSelectedContacts((prevSelectedContacts) =>
      prevSelectedContacts.filter((contact) => contact.id !== contactToRemove.id)
    );
  };

  const handleSubmit = () => {
    if (onSelectContacts) {
      onSelectContacts(selectedContacts);
    }
    saveSelectedContacts(); // Save selected contacts before navigating back
    navigation.goBack();
  };


  const handleCancel = () => {
    navigation.goBack(); // Navigate back to UsersOptions
};

  const handleContactSelect = (selectedContact) => {
    setSelectedContacts((prevSelectedContacts) => {
      const isSelected = prevSelectedContacts.includes(selectedContact);
      if (isSelected) {
        return prevSelectedContacts.filter((contact) => contact !== selectedContact);
      } else {
        return [...prevSelectedContacts, selectedContact];
      }
    });
  };

  const renderContactItem = ({ item }) => (
    <TouchableOpacity
      style={SelectContactStyle.contactItem}
      onPress={() => handleContactSelect(item)}
    >
      <View>
        <Text style={SelectContactStyle.contactName}>{item.name}</Text>
        {Array.isArray(item.phoneNumbers) && item.phoneNumbers.length > 0 ? (
          <View style={SelectContactStyle.phoneNumberContainer}>
            <Text style={SelectContactStyle.phoneNumber}>{item.phoneNumbers[0].number}</Text>
            <View style={SelectContactStyle.radioContainer}>
              {selectedContacts.includes(item) && (
                <View style={SelectContactStyle.radioChecked} />
              )}
            </View>
          </View>
        ) : (
          <Text style={SelectContactStyle.phoneNumber}>No phone number available</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  const renderSelectedContacts = () => {
    if (selectedContacts.length > 0) {
      return (
        <View style={SelectContactStyle.selectedContactsContainer}>
          <ScrollView
            horizontal
            contentContainerStyle={SelectContactStyle.selectedContactsScrollView}
          >
            {selectedContacts.map((contact, index) => (
              <View key={`${contact.id}-${index}`} style={SelectContactStyle.selectedContactItem}>
                <View style={SelectContactStyle.selectedContactWrapper}>
                  <FontAwesome5
                    name="user-circle"
                    size={60}
                    color="#007AFF"
                    style={SelectContactStyle.selectedContactIcon}
                  />
                  <TouchableOpacity
                    onPress={() => handleRemoveContact(contact)}
                    style={SelectContactStyle.removeIcon}
                  >
                    <FontAwesome5 name="times" size={16} color="#FFF" />
                  </TouchableOpacity>
                </View>
                <Text style={SelectContactStyle.selectedContactName}>
                  {truncateString(contact.name || contact.phoneNumbers[0].number, 7)}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      );
    } else {
      return null;
    }
  };
  

  // Helper function to truncate strings
  const truncateString = (str, maxLength) => {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  };

  return (
    <View style={SelectContactStyle.container}>
      <View style={SelectContactStyle.header}>
        <TouchableOpacity onPress={() => handleCancel()} style={SelectContactStyle.cancelButton}>
          <FontAwesome5 name="times" size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={SelectContactStyle.title}>Add To Favorite(s):</Text>
        <View />
      </View>

      <View style={SelectContactStyle.searchContainer}>
        <FontAwesome5 name="search" size={20} color="#888" style={SelectContactStyle.searchIcon} />
        <TextInput
          style={SelectContactStyle.searchInput}
          placeholder="Search contacts..."
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
      </View>

      {renderSelectedContacts()}

      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={renderContactItem}
      />

      <TouchableOpacity
        style={SelectContactStyle.submitButton}
        onPress={() => handleSubmit()}
      >
        <Text style={SelectContactStyle.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectContactScreen;
