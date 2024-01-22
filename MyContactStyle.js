import { StyleSheet } from 'react-native';

const MyContactStyle = StyleSheet.create({
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
  });
  
  export default MyContactStyle;