// ProfileStyle.js
import { StyleSheet } from 'react-native';

const ProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    textAlign: 'center',  // Center the text
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
  centeredProfile: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },  
  aboutBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  aboutBoxText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
    color: 'white', // Set text color to white
  },
  aboutBox: {
    backgroundColor: 'blue', // Set background color to blue
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 8,
    marginLeft: 30, // Adjust the marginLeft as needed
  },
  phoneBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneBoxText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
    color: 'white', // Set text color to white
  },
  phoneBox: {
    backgroundColor: 'red', // Set background color to blue
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 8,
    marginLeft: 10, // Adjust the marginLeft as needed
  },
  userName : {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
  },
  favoritesContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  favoritesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bigBox: {
    backgroundColor: 'blue',
    height: 200, // Set the desired height for the big box
    borderRadius: 8,
  },
  savesContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  savesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bigBox: {
    backgroundColor: 'blue',
    height: 200, // Set the desired height for the big box
    borderRadius: 8,
  },
});

export default ProfileStyle;
