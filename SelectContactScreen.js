import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import SelectContactStyle from './SelectContactStyle';
import { FontAwesome5 } from '@expo/vector-icons';

const SelectContactScreen = ({ route, navigation }) => {
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
            style={SelectContactStyle.contactItem}
            onPress={() => handleContactSelect(item)}
        >
            <View>
                <Text style={SelectContactStyle.contactName}>{item.name}</Text>
                {Array.isArray(item.phoneNumbers) && item.phoneNumbers.length > 0 ? (
                    <View style={SelectContactStyle.phoneNumberContainer}>
                        <Text style={SelectContactStyle.phoneNumber}>
                            {item.phoneNumbers[0].number}
                        </Text>
                        <View style={SelectContactStyle.radioContainer}>
                            {selectedContacts.includes(item) && (
                                <View style={SelectContactStyle.radioChecked} />
                            )}
                        </View>
                    </View>
                ) : (
                    <Text style={SelectContactStyle.phoneNumber}>
                        No phone number available
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={SelectContactStyle.container}>
            <View style={SelectContactStyle.header}>
                <TouchableOpacity onPress={handleCancel} style={SelectContactStyle.cancelButton}>
                    <FontAwesome5 name="times" size={24} color="#007AFF" />
                </TouchableOpacity>
                <Text style={SelectContactStyle.title}>Add To Favorite(s):</Text>
                {/* Add an empty view to maintain spacing on the right */}
                <View />
            </View>
            <FlatList
                data={sortedContacts} // Use the sortedContacts array
                keyExtractor={(item) => item.id}
                renderItem={renderContactItem}
            />
            <TouchableOpacity
                style={SelectContactStyle.submitButton}
                onPress={handleSubmit}
            >
                <Text style={SelectContactStyle.submitButtonText}>Submit</Text>
            </TouchableOpacity>

        </View>
    );
};

export default SelectContactScreen;