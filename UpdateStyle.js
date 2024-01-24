import { StyleSheet } from 'react-native';

const UpdateStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Adjust background color as needed
  },
  postItem: {
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center', // Center vertically
    height: 900, // Set a fixed height (adjust the value as needed)
  },  
  postText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center', // Center text horizontally
  },
  replyContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#ddd', // Set the background color to white or transparent
    paddingHorizontal: 15,
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
  sendIcon: {
    fontSize: 25,
    color: 'black',
  },
  likeIcon: {
    fontSize: 25,
    color: 'black',
    marginRight: 10,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    height: 40,
    width: 40,
  },
  moreOptions: {
    position: 'absolute',
    top: 50,
    right: 0,
    height: 40,
    width: 40,
  },
});

export default UpdateStyle;


