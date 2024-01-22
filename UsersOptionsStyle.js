import { StyleSheet } from 'react-native';

const UsersOptionsStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 60,
      marginBottom: 40,
    },
    header1: {
      fontSize: 13,
      position: 'absolute',
      fontWeight: 'bold',
      top: 10,
      left: 10,
    },
    cancelButton: {
      position: 'absolute',
      fontSize: 18,
      left: 30,
      fontWeight: 'bold',
      marginTop: 60,
      height: 30,
      width: 30,
    },
    bottomIconsContainer: {
      position: 'absolute',
      flexDirection: 'row',
      backgroundColor: 'rgba(245, 245, 245, 1.0)', // Smokewhite color with 30% opacity
      alignItems: 'center',
      justifyContent: 'space-around',
      bottom: 0,
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
    optionButton: {
      flexDirection: 'row',
      justifyContent: 'space-between', // Align text and check mark at the ends
      alignItems: 'center',
      textAlign:'center',
      padding: 10,
      marginVertical: 5,
      borderRadius: 8,
      backgroundColor: '#8B4513',
    },
   optionButtonText: {
      color: '#000',
      fontSize: 16,
    },
    checkMark: {
      marginLeft: 10, // Push the check mark to the right end
    },
    topBox: {
      backgroundColor: 'rgba(139, 69, 19, 0.42)',
      marginTop: 30,
      paddingHorizontal: 90,
      paddingVertical: 30,
      borderRadius: 16,
    },
  });
  
  export default UsersOptionsStyle;