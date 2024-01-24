import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import UpdateStyle from './UpdateStyle';

const UpdateScreen = ({ route }) => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [replyText, setReplyText] = useState('');
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

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
    console.log('Send button pressed!');
    // Add your logic to send the reply
  };

  const getFontStyle = (post) => {
    const baseFontSize = 40;

    if (!post) {
      return { fontSize: baseFontSize };
    }

    const fontSize = post.fontSize || baseFontSize;

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

      // Sort posts based on timestamp in descending order
      const sortedPosts = loadedPosts.sort((a, b) => b.timestamp - a.timestamp);

      // Reverse the order before setting the state
      setPosts(sortedPosts.reverse());
    }
  } catch (error) {
    console.error('Error loading posts from AsyncStorage:', error);
  }
};

useEffect(() => {
  loadPosts();
}, []);

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
    try {
      const updatedPosts = [...posts];
      const removedPost = updatedPosts.splice(currentPostIndex, 1)[0];

      await AsyncStorage.setItem('posts', JSON.stringify(updatedPosts));

      setPosts(updatedPosts);

      console.log('Removed Post:', removedPost);
    } catch (error) {
      console.error('Error removing post from AsyncStorage:', error);
    }
  };

  const handlePostPress = (event) => {
    const screenWidth = Dimensions.get('window').width;
  
    // Calculate the middle point of the screen
    const middleX = screenWidth / 2;
  
    // Check if the tap occurred on the left or right side of the screen
    if (event.nativeEvent.locationX < middleX) {
      // Left tap: Go to the previous post
      setCurrentPostIndex((prevIndex) => {
        // If it's the first post, navigate back
        if (prevIndex === 0) {
          navigation.goBack();
        }
        // Otherwise, go to the previous post
        return (prevIndex - 1 + posts.length) % posts.length;
      });
    } else {
      // Right tap: Go to the next post
      setCurrentPostIndex((prevIndex) => {
        // If it's the last post, navigate back
        if (prevIndex === posts.length - 1) {
          navigation.goBack();
        }
        // Otherwise, go to the next post
        return (prevIndex + 1) % posts.length;
      });
    }
  };
  

  const handleLeftTap = () => {
    // Go back when left tap is detected
    navigation.goBack();
  };

  const handleRightTap = () => {
    // Go forward when right tap is detected
    setCurrentPostIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <View>
          <TouchableOpacity onPress={(event) => handlePostPress(event)} activeOpacity={1}>
            <View style={[UpdateStyle.postItem, { backgroundColor: posts[currentPostIndex]?.backgroundColor }]}>
              <Text style={[UpdateStyle.postText, getFontStyle(posts[currentPostIndex])]}>
                {posts[currentPostIndex]?.text}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Back Button */}
        <TouchableOpacity style={UpdateStyle.backButton} onPress={handleLeftTap}>
          <FontAwesome5 name="arrow-left" size={24} color="black" />
        </TouchableOpacity>

        {/* Ellipsis Icon */}
        <TouchableOpacity style={UpdateStyle.moreOptions} onPress={handleEllipsisClick}>
          <FontAwesome5 name="ellipsis-v" size={24} color="black" />
        </TouchableOpacity>

        {/* Reply Container */}
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
            <Icon
              name="send"
              size={25}
              color={replyText.trim() === '' ? 'gray' : 'blue'}
              style={UpdateStyle.sendIcon}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default UpdateScreen;
