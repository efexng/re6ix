import { StyleSheet } from 'react-native';

const TextInputStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 2,
  },
  sendButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 2,
  },
  textInput: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 40,
    flexWrap: 'wrap', // Enable text wrapping
    maxLength: 1000, // Set maximum characters
  },
  colorPaintIcon: {
    position: 'absolute',
    top: 60,
    right: 120,
    zIndex: 2,
  },
  fontTypeIcon: {
    position: 'absolute',
    top: 60,
    right: 80,
    zIndex: 2,
  },
  limitMessageContainer: {
    backgroundColor: 'grey',
    padding: 10,
    margin: 10,
    position: 'absolute',
    top: '50%',  // Set the container's top position to 50% of the screen height
    transform: [{ translateY: -20 }],  // Adjust translateY to center the container properly
    borderRadius: 20,
  },  
  limitMessageText: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'bold',
  },
});

export default TextInputStyle;
