// ProfileStyle.js
import { StyleSheet } from 'react-native';

const SettingStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Smokewhite color
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
  settingItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingItemText: {
    fontSize: 18,
    color: '#8B4513',
  },
  settingBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    padding: 16,
  },
  settingBoxTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#8B4513',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBox: {
    flex: 1,
    height: 40,
    color: '#8B4513',
  },
});

export default SettingStyle;
