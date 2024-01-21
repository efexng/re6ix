import { StyleSheet } from 'react-native';

const ConversationStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topCenterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 40,
    paddingHorizontal: 16,
  },
  middleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Video: {
    marginRight: 10,
    // Add any other styles you need for the video icon
  },
  Phone: {
    // Add any styles you need for the phone icon
  },
  leftArrow: {
    fontSize: 24,
    color: '#333333',
  },
  backButton: {
    // Styles for your back button if needed
  },
  conversationBox: {
    flex: 1,
    marginTop: 50,
    backgroundColor: 'red'
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#7cc',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '70%',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '70%',
  },
  messageText: {
    fontSize: 16,
    color: '#333333',
  },
  messageImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginVertical: 5,
  },
  messageVideo: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginVertical: 5,
  },
  replyContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'blue',
    borderTopWidth: 1,
    paddingHorizontal: 10,
    paddingTop: 10,  // Remove padding from the top
    paddingBottom: 35,  // Keep padding at the bottom
  },  
  replyBox: {
    flex: 1,
    marginRight: 10,
    maxHeight: 100,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#ddd', // Set the background color to white or transparent
    borderColor: 'white', // Set the border color to match the background
    borderWidth: 1, // Set the border width to 1 to hide the border
  },
  replyTextInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,  // Adjust this value for top, right, bottom, and left padding
    fontSize: 16,
  },  
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 20
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modalIcon: {
    marginRight: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#333333',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  modalCancelContent: {
    alignItems: 'center',
    padding: 10,
  },
  modalCancel: {
    fontSize: 16,
    color: '#ff0000',
  },
  moreOptions: {
    marginRight: 10,
  },
  sendIcon: {
    fontSize: 25,
    color: 'black',
  },
});

export default ConversationStyle;
