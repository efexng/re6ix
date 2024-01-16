// ProfileStyle.js
import { StyleSheet } from 'react-native';

const SettingStyle = StyleSheet.create({
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
  settingItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingItemText: {
    fontSize: 18,
  },
  settingBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginVertical: 10,
    padding: 16,
  },
  settingBoxTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollContentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 120, // Adjust this value based on your bottomIconsContainer height
    // Set a max height for your content, change it as needed
    maxHeight: 700, // Set a value based on your design
  },
});

export default SettingStyle;
