import { StyleSheet } from 'react-native';

const storyStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text1 : {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
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
  },
  bottomIconsContainer: {
    position: 'absolute',
    bottom: 0, // Adjust this value as needed
    flexDirection: 'row',
    backgroundColor: 'red', // Set background color to red
    height: 95,
    borderTopLeftRadius: 5, // Adjust the border radius as needed
    borderTopRightRadius: 5, // Adjust the border radius as needed
    paddingTop: 20, // Adjust the padding on top of the icons as needed
    width: '100%',
  },
  bottomIcon: {
    marginHorizontal: 30, // Adjust this value as needed for spacing between icons
  },
  bottomIconText: {
    marginTop: 5, // Adjust the margin as needed
    fontSize: 12, // Adjust the font size as needed
    marginLeft: 25, // Adjust the margin as needed for spacing between icons
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
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 13,
    color: 'gray',
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
    backgroundColor: 'red', // Set the background color to red
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
    backgroundColor: 'red', // Set the background color to red
    borderRadius: 16, // Add border radius for rounded corners
    width: 400,
    marginTop: 50,
  },
  mutedIcon: {
    marginRight: 8,
  },
  recentUpdates: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: -250,
    marginBottom: 8,
  },
  newBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 10, // Adjust horizontal padding
    paddingVertical: 10,   // Add vertical padding
    backgroundColor: 'red',
    borderRadius: 16,
    width: 400,
  },
  dateStarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    marginRight: 8,
  },  
});

export default storyStyle;
