import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, FlatList, Modal, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ConversationStyle from './ConversationStyle';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the appropriate icon library
import * as ImagePicker from 'expo-image-picker';
import { BlurView } from 'expo-blur';
import { Video } from 'expo-av';



const ConversationScreen = () => {
    const navigation = useNavigation();
    const [replyText, setReplyText] = useState('');
    const [messages, setMessages] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const inputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const flatListRef = useRef(null);



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
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                });
            } else if (option === 'library') {
                result = await ImagePicker.launchImageLibraryAsync({
                    // Image library options
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                });
            }

            if (!result.canceled) {
                // Handle the image or video selected from the camera or library
                const newMessage = {
                    id: messages.length + 1,
                    text: '', // You can add text if needed
                    sender: 'user',
                    type: result.type, // 'image' or 'video'
                    media: result.uri,
                };

                setMessages([...messages, newMessage]);
                setModalVisible(false); // Close the modal only if the operation is successful
            }
        } catch (error) {
            console.error("Error picking image or video:", error);
        } finally {
            // Additional cleanup or actions if needed
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

                    {/* Top Center: User Circle and Name */}
                    <View style={ConversationStyle.topCenterContainer}>
                        <TouchableOpacity
                            style={ConversationStyle.backButton}
                            onPress={() => navigation.navigate('Chat')}
                        >
                            <FontAwesome5 name="arrow-left" size={24} color="black" style={ConversationStyle.leftArrow} />
                        </TouchableOpacity>
                        <View style={ConversationStyle.middleContainer}>
                            <FontAwesome5 name="user-circle" size={40} color="#8B4513" style={ConversationStyle.userIcon} />
                            <Text style={ConversationStyle.userName}>John Doe</Text>
                        </View>
                        <View style={ConversationStyle.rightContainer}>
                            <TouchableOpacity onPress={() => console.log('Video call pressed')}>
                                <FontAwesome5 name="video" size={24} color="#8B4513" style={ConversationStyle.Video} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => console.log('Phone call pressed')}>
                                <FontAwesome5 name="phone" size={24} color="#8B4513" style={ConversationStyle.Phone} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Conversation Box */}
                    <View style={ConversationStyle.conversationBox}>
                        <FlatList
                            ref={flatListRef}
                            data={messages}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <View style={item.sender === 'user' ? ConversationStyle.userMessage : ConversationStyle.otherMessage}>
                                    <Text style={ConversationStyle.messageText}>{item.text}</Text>
                                    {item.type === 'image' && <Image source={{ uri: item.media }} style={ConversationStyle.messageImage} />}
                                    {item.type === 'video' && (
                                        <Video
                                            source={{ uri: item.media }}
                                            style={ConversationStyle.messageVideo}
                                            resizeMode="cover"
                                            shouldPlay
                                            isLooping
                                            useNativeControls
                                        />
                                    )}
                                </View>
                            )}
                            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
                        />

                    </View>


                    {/* Reply Box */}
                    <View style={ConversationStyle.replyContainer}>
                        <TouchableOpacity style={ConversationStyle.moreOptions} onPress={handleEllipsisClick}>
                            <FontAwesome5 name="ellipsis-h" size={24} color="black" />
                        </TouchableOpacity>
                        <View style={ConversationStyle.replyBox}>
                            <TextInput
                                style={ConversationStyle.replyTextInput}
                                placeholder="Type your reply..."
                                value={replyText}
                                onChangeText={handleReplyTextChange}
                                multiline={true}
                            />
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
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
                                    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                                        <View style={ConversationStyle.modalCancelContent}>
                                            <Text style={ConversationStyle.modalCancel}>Cancel</Text>
                                        </View>
                                    </TouchableWithoutFeedback>

                                </View>
                            </Modal>

                        </View>
                        <TouchableOpacity onPress={handleSendPress} disabled={replyText.trim() === ''}>
                            <Icon name="send" size={25} color={replyText.trim() === '' ? 'gray' : 'blue'} style={ConversationStyle.sendIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default ConversationScreen;