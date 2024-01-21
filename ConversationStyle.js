import { StyleSheet } from 'react-native';

const ConversationStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  iconContainer: {
    marginRight: 8, // Adjust spacing if needed
  },
  leftArrow: {
    position: 'absolute',
    top: 52,
    marginLeft: 10,
    marginTop: 16,
  },
 topLeftText: {
    position: 'absolute',
    top: 52,
    left: 0,
    marginLeft: 50,
    marginTop: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },
  topCenterContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    marginTop: 50,
  },
  userIcon: {
    fontSize: 40,
    color: '#8B4513',
  },
  userName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  topRightContainer: {
    position: 'absolute',
    flexDirection: 'row',
    top: 52,
    right: 0,
    marginRight: 16,
    marginTop: 16,
  },
  topRightIcon: {
    marginRight: 16,
  },
  replyBox: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 25 : 0,
    height: 50,
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    width: '90%', // Adjust the width to match the conversation box
    marginLeft: '5%', // Adjust the marginLeft as needed
  },
  replyTextInput: {
    flex: 1,
    marginRight: 10,
    fontSize: 16,
  },
  sendIcon: {
    marginRight: 5,
  },
  conversationBox: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: '90%', // Adjust the percentage based on your preference
    height: '70%',
    alignSelf: 'center',
    marginTop: '30%', // Adjust the margin-top based on your preference
  },  
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#ADD8E6', // Light blue for user messages
    borderRadius: 8,
    padding: 8,
    margin: 8,
    maxWidth: '70%',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E0E0E0', // Light gray for other messages
    borderRadius: 8,
    padding: 8,
    margin: 8,
    maxWidth: '70%',
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 150,
    left: 0,
    right: 0,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },  
  modalContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    width: '90%', // Adjust the percentage based on your preference
    marginBottom: 30,
  },
  modalText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 40, // Adjust the marginRight for space between icon and text
  },
  modalIcon: {
    fontSize: 20,
    position: 'absolute',
    marginRight: 60, // Adjust the marginRight for space between icon and text
  },
  modalCancel: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  modalCancelContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: '90%', // Adjust the percentage based on your preference
    height: '30%',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
   divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'white', // Choose the color of the border
    marginVertical: 15, // Add vertical margin to create space between the text and the line
},
messageImage: {
  width: 200, // Adjust the width as needed
  height: 200, // Adjust the height as needed
  borderRadius: 8, // Optional: Add border radius for a rounded look
},
messageVideo: {
  width: 200, // Adjust the width as needed
  height: 200, // Adjust the height as needed
},

});

export default ConversationStyle;
