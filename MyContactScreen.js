import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import MyContactStyle from './MyContactStyle';
import { FontAwesome5 } from '@expo/vector-icons';

const MyContactScreen = ({ route, navigation }) => {
    const { contacts } = route.params;
    const [selectedContacts, setSelectedContacts] = useState([]);


    const sortedContacts = contacts.slice().sort((a, b) => {
        const nameA = a.name ? a.name.toLowerCase() : '';
        const nameB = b.name ? b.name.toLowerCase() : '';
        return nameA.localeCompare(nameB);
    });

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



    const handleCancel = () => {
        navigation.goBack(); // Navigate back to UsersOptions
    };

    const handleSubmit = () => {
        navigation.goBack();
    };

    const renderContactItem = ({ item }) => (
        <TouchableOpacity
            style={MyContactStyle.contactItem}
            onPress={() => handleContactSelect(item)}
        >
            <View>
                <Text style={MyContactStyle.contactName}>{item.name}</Text>
                {Array.isArray(item.phoneNumbers) && item.phoneNumbers.length > 0 ? (
                    <View style={MyContactStyle.phoneNumberContainer}>
                        <Text style={MyContactStyle.phoneNumber}>
                            {item.phoneNumbers[0].number}
                        </Text>
                        <View style={MyContactStyle.radioContainer}>
                            {selectedContacts.includes(item) && (
                                <View style={MyContactStyle.radioChecked} />
                            )}
                        </View>
                    </View>
                ) : (
                    <Text style={MyContactStyle.phoneNumber}>
                        No phone number available
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={MyContactStyle.container}>
            <View style={MyContactStyle.header}>
                <TouchableOpacity onPress={handleCancel} style={MyContactStyle.cancelButton}>
                    <FontAwesome5 name="times" size={24} color="#007AFF" />
                </TouchableOpacity>
                <Text style={MyContactStyle.title}>Add To Favorite(s):</Text>
                {/* Add an empty view to maintain spacing on the right */}
                <View />
            </View>
            <FlatList
                data={sortedContacts} // Use the sortedContacts array
                keyExtractor={(item) => item.id}
                renderItem={renderContactItem}
            />
            <TouchableOpacity
                style={MyContactStyle.submitButton}
                onPress={handleSubmit}
            >
                <Text style={MyContactStyle.submitButtonText}>Submit</Text>
            </TouchableOpacity>

        </View>
    );
};

export default MyContactScreen;