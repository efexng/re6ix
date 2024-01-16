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
    color: '#8B4513',
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
    backgroundColor: 'rgba(139, 69, 19, 0.42)', // SaddleBrown color with 42% opacity
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
    backgroundColor: 'rgba(139, 69, 19, 0.42)', // SaddleBrown color with 42% opacity
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
    color: '#8B4513',
  },
  favoritesContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  favoritesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#8B4513',
  },
  savesContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  savesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#8B4513',
  },
  bigBox: {
    backgroundColor: 'rgba(139, 69, 19, 0.42)', // SaddleBrown color with 42% opacity
    height: 200, // Set the desired height for the big box
    borderRadius: 8,
  },
});

export default ProfileStyle;
