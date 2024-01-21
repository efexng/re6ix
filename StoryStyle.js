import { StyleSheet } from 'react-native';

const storyStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text1 : {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B4513',
    textAlign: 'center',
    marginTop: 30,
  },
  text2 : {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B4513',
    marginTop: 30,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 60, // Add a top margin to push the header down
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#8B4513',
  },
  touchable: {
    marginRight: 10, // Adjust spacing as needed
  },
  searchBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center items vertically
    paddingHorizontal: 20, // Add padding to the left and right
    borderRadius: 15,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#8B4513',
    borderRadius: 15,
    padding: 8,
    marginVertical: 10,
    flex: 1, 
    backgroundColor: 'rgba(245, 245, 245, 1.0)', // Smokewhite color with 30% opacity
    bottom: 10, // Optional: Add a bottom margin to push the search box down
  },
  cancelButton: {
    padding: 10,
    bottom: 10, // Optional: Add a bottom margin to push the search box down
  },
  searchicon: {
    padding: 10,
    bottom: 10, // Optional: Add a bottom margin to push the search box down
  },
  cancelButtonText: {
    color: '#8B4513',
    fontWeight: 'bold',
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(245, 245, 245, 1.0)', // Smokewhite color with 30% opacity
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 16,
    paddingBottom: 30,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  bottomIcon: {
    marginHorizontal: 30, // Adjust this value as needed for spacing between icons
  },
  bottomIconText: {
    marginTop: 5, // Adjust the margin as needed
    fontSize: 12, // Adjust the font size as needed
    marginLeft: 25, // Adjust the margin as needed for spacing between icons
    color: '#8B4513', // Change the color as needed
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 80, // Add a top margin to push the header down
  },
  userIcon: {
    marginRight: 8,
  },
  userBoxImage: {
    width: 50, // Set the desired width
    height: 50, // Set the desired height
    borderRadius: 50, // Optional: Add borderRadius for a circular image
    marginRight: 5,
  },
  userBoxImageRecent: {
    width: 50, // Set the desired width
    height: 50, // Set the desired height
    borderRadius: 50, // Optional: Add borderRadius for a circular image
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  userBoxImageRecentNames: {
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    marginTop: 5,
    textAlign: 'center',
    color: '#8B4513', // Change the color as needed
  },
  userBoxImageMuted: {
    width: 50, // Set the desired width
    height: 50, // Set the desired height
    borderRadius: 50, // Optional: Add borderRadius for a circular image
    opacity: 0.3,
  },
  userBoxImageMutedNames: {
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    marginTop: 5,
    textAlign: 'center',
    color: '#8B4513', // Change the color as needed
    opacity: 0.3,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B4513', // Change the color as needed
  },
  date: {
    fontSize: 13,
    color: '#8B4513', // Change the color as needed
  },
  actions: {
    flexDirection: 'row',
  },
  actionIcon: {
    marginLeft: 8,
  },
  userBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 15,
    backgroundColor: 'rgba(139, 69, 19, 0.42)',
    borderRadius: 16, // Add border radius for rounded corners
    width: 400,
  },
  userBoxIcon: {
    marginRight: 8,
  },
  muted: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 15,
    backgroundColor: 'rgba(139, 69, 19, 0.42)',
    borderRadius: 16, // Add border radius for rounded corners
    width: 400,
    marginTop: 10,
  },
  mutedIcon: {
    marginRight: 8,
  },
  recentUpdates: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#8B4513',
    marginTop: 10,
    marginLeft: 20,
  },
  newBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'rgba(139, 69, 19, 0.42)',
    borderRadius: 16,
    flex: 1, // Use flex to allow dynamic width
    marginTop: 20,
  },  
  dateStarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    marginRight: 8,
    color: '#8B4513', // Change the color as needed
  },  
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalOption: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default storyStyle;
