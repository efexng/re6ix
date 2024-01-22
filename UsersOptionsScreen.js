import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, handleScroll } from 'react-native';
import * as Contacts from 'expo-contacts';
import UsersOptionsStyle from './UsersOptionsStyle';
import { FontAwesome5 } from '@expo/vector-icons';


const UsersOptionsScreen = ({ navigation }) => {
    const [selectedContact, setSelectedContact] = useState(null);
    const [showCheckMark, setShowCheckMark] = useState(false);

    useEffect(() => {
        setShowCheckMark(true);
    }, []);

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
        setShowCheckMark(true); // Show the check mark when View All Contacts is clicked
    };


    const handleCancel = () => {
        navigation.goBack(); // Navigate back to UsersOptions
    };

    return (
        <View style={UsersOptionsStyle.container}>
            {/* Top Box for Options */}
            <TouchableOpacity onPress={handleCancel} style={UsersOptionsStyle.cancelButton}>
                <FontAwesome5 name="times" size={24} />
            </TouchableOpacity>
            <Text style={UsersOptionsStyle.header}>Updates Privacy</Text>
            <ScrollView
                onScroll={handleScroll}
                scrollEventThrottle={200} // Adjust this value based on your requirements
            >
                <Text style={UsersOptionsStyle.header1}>WHO CAN SEE YOUR UPDATES:</Text>
                <View style={UsersOptionsStyle.topBox}>
                    <Text style={UsersOptionsStyle.title}>Choose an option:</Text>
                    <TouchableOpacity style={UsersOptionsStyle.optionButton} onPress={handleAddToFavorites}>
                        <Text style={UsersOptionsStyle.optionButtonText}>Add to Favorites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[UsersOptionsStyle.optionButton, showCheckMark && UsersOptionsStyle.selectedOption]}
                        onPress={handleAllContacts}
                    >
                        <Text style={UsersOptionsStyle.optionButtonText}>
                            View All Contacts
                        </Text>
                        {showCheckMark && (
                            <FontAwesome5
                                name="check"
                                size={20}
                                style={UsersOptionsStyle.checkMark}
                            />
                        )}
                    </TouchableOpacity>
                </View>
            </ScrollView>


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
