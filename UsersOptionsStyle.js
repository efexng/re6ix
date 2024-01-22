import { StyleSheet } from 'react-native';

const UsersOptionsStyle = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    optionButton: {
      backgroundColor: '#8B4513',
      padding: 10,
      marginVertical: 10,
      borderRadius: 8,
    },
    optionButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
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
    optionButton: {
      flexDirection: 'row',
      justifyContent: 'space-between', // Align text and check mark at the ends
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderRadius: 8,
      backgroundColor: '#3498db',
    },
  
    optionButtonText: {
      color: '#fff',
      fontSize: 16,
    },
  
    checkMark: {
      // Add your custom check mark styles here
      marginLeft: 10, // Push the check mark to the right end
    },
    sharingText: {
      marginTop: 10,
      color: '#333',
      fontSize: 14,
    },
  });
  
  export default UsersOptionsStyle;