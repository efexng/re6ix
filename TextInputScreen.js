import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, TextDecorationLine } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import TextInputStyle from './TextInputStyle';

const TextInputScreen = () => {
  const navigation = useNavigation();
  const [textInputValue, setTextInputValue] = useState('');
  const [showLimitMessage, setShowLimitMessage] = useState(false);
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const fonts = ['font', 'bold', 'italic', 'underline', 'strikethrough', 'code','highlighter'];


  const colors = [
    '#FF5733', // Orange
    '#FFC300', // Yellow
    '#33FF57', // Green
    '#33C3FF', // Light Blue
    '#8347FF', // Purple
    '#FF338A', // Pink
    '#FF33B1', // Magenta
    '#FF335F', // Reddish Pink
    '#FF6333', // Coral
    '#FF338D', // Salmon
    '#33FFB1', // Turquoise
    '#FFD433', // Gold
    '#33FFDA', // Aqua
    '#FF8E33', // Peach
    '#FF3373', // Raspberry
    // Add more colors as needed
  ];




  const handleTextChange = (text) => {
    if (text.length <= 700) {
      setTextInputValue(text);
    } else {
      setShowLimitMessage(true);
      setTimeout(() => {
        setShowLimitMessage(false);
      }, 5000);
    }
  };

  const handleSendAction = () => {
    // Handle send action with the current textInputValue
  };


  const handleColorChange = () => {
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextColorIndex);
  };

  const handleFontChange = (index) => {
    setCurrentFontIndex(index);
  };

  const getFontStyle = () => {
    switch (fonts[currentFontIndex]) {
      case 'font':
        return { fontWeight: 'normal', fontStyle: 'normal', textDecorationLine: 'none' };
      case 'bold':
        return { fontWeight: 'bold', textDecorationLine: 'none' };
      case 'italic':
        return { fontStyle: 'italic', textDecorationLine: 'none' };
      case 'underline':
        return { textDecorationLine: 'underline' };
      case 'strikethrough':
        return { textDecorationLine: 'line-through' };
      case 'code':
        return { fontFamily: 'Courier New', textDecorationLine: 'none' };
      case 'highlighter':
        return { backgroundColor: 'yellow', textDecorationLine: 'none' };
    }
  };
  

  return (
    <View style={[TextInputStyle.container, { backgroundColor: colors[currentColorIndex] }]}>
      {/* Close (X) icon */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={TextInputStyle.closeButton}
      >
        <FontAwesome5 name="times" size={24} color="black" />
      </TouchableOpacity>

  {/* Color painting icon */}
  <TouchableOpacity
        onPress={() => {
          handleColorChange();
          // Additional logic for handling color change
        }}
        style={TextInputStyle.colorPaintIcon}
      >
        <FontAwesome5 name="paint-brush" size={24} color="black" />
      </TouchableOpacity>


  {/* Font type icon */}
      <TouchableOpacity onPress={() => handleFontChange((currentFontIndex + 1) % fonts.length)} style={TextInputStyle.fontTypeIcon}>
        <FontAwesome5 name={fonts[currentFontIndex]} size={24} color="black" />
      </TouchableOpacity>



      {/* Send icon */}
      <TouchableOpacity
        onPress={() => {
          // Handle send action
        }}
        style={TextInputStyle.sendButton}
      >
        <FontAwesome5 name="paper-plane" size={24} color="black" />
      </TouchableOpacity>

      {showLimitMessage && (
        <View style={TextInputStyle.limitMessageContainer}>
          <Text style={TextInputStyle.limitMessageText}>
            Your status update cannot exceed 700 characters or 10 lines.
          </Text>
        </View>
      )}

  {/* Text input covering the whole screen */}
  <TextInput
        style={[TextInputStyle.textInput, getFontStyle()]}
        multiline
        placeholder="Type an Update..."
        numberOfLines={10}
        value={textInputValue}
        onChangeText={handleTextChange}
        onSubmitEditing={handleSendAction}
      />
    </View>
  );
};

export default TextInputScreen;
