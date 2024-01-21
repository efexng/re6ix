import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the appropriate icon library
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage from the correct package
import UpdateStyle from './UpdateStyle';

const UpdateScreen = ({ route }) => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [replyText, setReplyText] = useState('');


  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    if (route.params && route.params.post) {
      const newPost = route.params.post;
      addPost(newPost);
    }
  }, [route.params]);


  const handleSendPress = () => {
    // Implement the logic to send the reply
    console.log('Send button pressed!');
    // Add your logic to send the reply
  };
  

  
  const getFontStyle = (post) => {
    const baseFontSize = 40;
    const minFontSize = 20;
    const fontSize = post.fontSize || baseFontSize; // Use post's fontSize, or default to baseFontSize
  
    switch (post.font) {
      case 'font':
        return { fontWeight: 'normal', fontStyle: 'normal', textDecorationLine: 'none', fontSize };
      case 'bold':
        return { fontWeight: 'bold', textDecorationLine: 'none', fontSize };
      case 'italic':
        return { fontStyle: 'italic', textDecorationLine: 'none', fontSize };
      case 'underline':
        return { textDecorationLine: 'underline', fontSize };
      case 'strikethrough':
        return { textDecorationLine: 'line-through', fontSize };
      case 'code':
        return { fontFamily: 'Courier New', textDecorationLine: 'none', fontSize };
      case 'highlighter':
        return { backgroundColor: 'yellow', textDecorationLine: 'none', fontSize };
      default:
        return { fontSize };
    }
  };
  

  const loadPosts = async () => {
    try {
      const storedPosts = await AsyncStorage.getItem('posts');
      if (storedPosts) {
        const loadedPosts = JSON.parse(storedPosts);
  
        // Check if the loaded posts are different from the current state
        if (JSON.stringify(loadedPosts) !== JSON.stringify(posts)) {
          setPosts(loadedPosts);
        }
      }
    } catch (error) {
      console.error('Error loading posts from AsyncStorage:', error);
    }
  };
  
  const addPost = async (newPost) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts, { ...newPost, timestamp: Date.now() }];
  
      try {
        AsyncStorage.setItem('posts', JSON.stringify(updatedPosts));
      } catch (error) {
        console.error('Error saving posts to AsyncStorage:', error);
      }
  
      return updatedPosts;
    });
  };
  

  const handleReplyTextChange = (text) => {
    setReplyText(text);
  };

  const handleEllipsisClick = async () => {
    // Clear posts from AsyncStorage and reset state
    try {
      await AsyncStorage.removeItem('posts');
      setPosts([]);
    } catch (error) {
      console.error('Error clearing posts from AsyncStorage:', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={UpdateStyle.container}>
          <View style={{ flex: 1 }}>
            {posts.map((post, index) => (
              <TouchableOpacity
                key={index}
                onPress={Keyboard.dismiss} // Dismiss the keyboard when a post item is tapped
                activeOpacity={1} // Disable the opacity change on touch
                style={[UpdateStyle.postItem, { backgroundColor: post.backgroundColor }]}
              >
                <Text style={[UpdateStyle.postText, getFontStyle(post)]}>{post.text}</Text>
              </TouchableOpacity>
            ))}
            
            <TouchableOpacity
            style={UpdateStyle.backButton}
            onPress={() => navigation.navigate('Story')}
          >
            <FontAwesome5 name="arrow-left" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={UpdateStyle.moreOptions} onPress={handleEllipsisClick}>
            <FontAwesome5 name="ellipsis-v" size={24} color="black" />
          </TouchableOpacity>

          </View>

            {/* Reply Box */}
            <View style={UpdateStyle.replyContainer}>
            <TouchableOpacity style={UpdateStyle.likeIcon}>
                             <FontAwesome5 name="heart" size={24} color="red" />
                            </TouchableOpacity>
                        <View style={UpdateStyle.replyBox}>
                            <TextInput
                                style={UpdateStyle.replyTextInput}
                                placeholder="Type your reply..."
                                value={replyText}
                                onChangeText={handleReplyTextChange}
                                multiline={true}
                            />
                        </View>
                        <TouchableOpacity onPress={handleSendPress} disabled={replyText.trim() === ''}>
                            <Icon name="send" size={25} color={replyText.trim() === '' ? 'gray' : 'blue'} style={UpdateStyle.sendIcon} />
                        </TouchableOpacity>
         </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default UpdateScreen;