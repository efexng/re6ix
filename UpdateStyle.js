import { StyleSheet } from 'react-native';

const UpdateStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff', // Adjust background color as needed
  },
  postItem: {
    flex: 1,
    top: 105,
    borderRadius: 10,
    position: 'absolute',
    width: '100%',
    height: '80%',
  },
  postText: {
    top: 30,
    alignSelf: 'center',
    padding: 10,
    color: 'white',
    textAlign: 'center', // Add this property to center the text horizontally
    justifyContent: 'center', // Add this property to center the text vertically
  },
  replyBox: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 25 : 0, // Adjust the bottom position based on the platform
    height: 50,
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    width: '82%',
    marginLeft: '8%',
  },
  replyTextInput: {
    flex: 1,
    marginRight: 10,
  },
  sendIcon: {
    // Add any styles for the send icon if needed
  },
  swipeableContainer: {
    flexDirection: 'row',
  },
  likeIcon: {
    position: 'absolute',
    bottom: 35,
    right: 30,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  moreOptions: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
});

export default UpdateStyle;
