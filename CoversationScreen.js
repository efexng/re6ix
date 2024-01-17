import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, FlatList, Modal, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ConversationStyle from './ConversationStyle';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the appropriate icon library
import * as ImagePicker from 'expo-image-picker';
import { BlurView } from 'expo-blur';



const ConversationScreen = () => {
    const navigation = useNavigation();
    const [replyText, setReplyText] = useState('');
    const [messages, setMessages] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const inputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);


    const handleReplyTextChange = (text) => {
        setReplyText(text);
    };


    const handleEllipsisClick = () => {
        setModalVisible(true);
        // If the keyboard is open, delay focusing on the input to ensure the modal is visible
        if (isKeyboardVisible) {
            setTimeout(() => {
                inputRef.current && inputRef.current.focus();
            }, 100);
        }
    };


    const handleOptionPress = async (option) => {
        try {
            let result;
    
            if (option === 'camera') {
                result = await ImagePicker.launchCameraAsync({
                    // Camera options
                });
            } else if (option === 'library') {
                result = await ImagePicker.launchImageLibraryAsync({
                    // Image library options
                });
            }
    
            if (!result.canceled) {
                // Handle the image selected from the camera or library
                const newMessage = {
                    id: messages.length + 1,
                    text: '', // You can add text if needed
                    sender: 'user',
                    image: result.assets[0].uri,
                };
    
                setMessages([...messages, newMessage]);
            }
    
        } catch (error) {
            console.error("Error picking image:", error);
        } finally {
            // Close the modal after handling the option
            setModalVisible(false);
            setSelectedImage(null); // Clear the selected image to avoid duplicate entries
        }
    };
    

    const handleSendPress = () => {
        if (replyText.trim() === '' && !selectedImage) {
            // Do not send empty messages
            return;
        }
    
        const newMessage = {
            id: messages.length + 1,
            text: replyText,
            sender: 'user',
            image: selectedImage,
        };
    
        setMessages([...messages, newMessage]);
        setReplyText('');
        setSelectedImage(null);
    };
    

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >

                <View style={ConversationStyle.container}>
                    {/* Top Left: Back icon and unread messages count */}
                    <Text style={ConversationStyle.topLeftText}>Chats</Text>

                    {/* Top Center: User Circle and Name */}
                    <View style={ConversationStyle.topCenterContainer}>
                        <FontAwesome5 name="user-circle" size={40} color="#8B4513" style={ConversationStyle.userIcon} />
                        <Text style={ConversationStyle.userName}>John Doe</Text>
                    </View>

                    {/* Top Right: Video and Phone Icons */}
                    <View style={ConversationStyle.topRightContainer}>
                        <TouchableOpacity onPress={() => console.log('Video call pressed')}>
                            <FontAwesome5 name="video" size={24} color="#8B4513" style={ConversationStyle.topRightIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('Phone call pressed')}>
                            <FontAwesome5 name="phone" size={24} color="#8B4513" style={ConversationStyle.topRightIcon} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={ConversationStyle.backButton}
                        onPress={() => navigation.navigate('Chat')}
                    >
                        <FontAwesome5 name="arrow-left" size={24} color="black" style={ConversationStyle.leftArrow} />
                    </TouchableOpacity>

                   {/* Conversation Box */}
<View style={ConversationStyle.conversationBox}>
    <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View style={item.sender === 'user' ? ConversationStyle.userMessage : ConversationStyle.otherMessage}>
                <Text style={ConversationStyle.messageText}>{item.text}</Text>
                {item.image && <Image source={{ uri: item.image }} style={ConversationStyle.messageImage} />}
            </View>
        )}
    />
</View>


                    {/* Reply Box */}
                    <View style={ConversationStyle.replyBox}>
                        <TextInput
                            style={ConversationStyle.replyTextInput}
                            placeholder="Type your reply..."
                            value={replyText}
                            onChangeText={handleReplyTextChange}
                            multiline={true}
                        />
                        <TouchableOpacity onPress={handleSendPress} disabled={replyText.trim() === ''}>
                            <Icon name="send" size={25} color={replyText.trim() === '' ? 'gray' : 'blue'} style={ConversationStyle.sendIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={ConversationStyle.moreOptions} onPress={handleEllipsisClick}>
                            <FontAwesome5 name="ellipsis-h" size={24} color="black" />
                        </TouchableOpacity>



                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                setModalVisible(false);
                            }}
                        >
                            <View style={ConversationStyle.modalContainer}>
                                <View style={ConversationStyle.modalContent}>
                                <TouchableOpacity onPress={() => handleOptionPress('camera')}>
                                <Icon style={ConversationStyle.modalIcon} name="camera" size={16} color="white" />
                            <Text style={ConversationStyle.modalText}>
                                <Text style={ConversationStyle.modalText}>Camera</Text>
                            </Text>
                            </TouchableOpacity>

                                <View style={ConversationStyle.divider}></View>
                                <TouchableOpacity onPress={() => handleOptionPress('library')}>
                                <Icon style={ConversationStyle.modalIcon} name="image" size={16} color="white" />
                                <Text style={ConversationStyle.modalText}>
                                    Library
                                </Text>
                                </TouchableOpacity>

                                </View>
                                <View style={ConversationStyle.modalCancelContent}>
                                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                                        <Text style={ConversationStyle.modalCancel}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>

                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default ConversationScreen;
