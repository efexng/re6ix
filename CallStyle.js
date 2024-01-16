import { StyleSheet } from 'react-native';

const callStyle = StyleSheet.create({
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
  recentCalls : {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: -300,
    marginBottom: 8,
  },
  boxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    borderRadius: 8, // Add border radius for rounded corners
    backgroundColor: 'red',
    width: 250,
  },
  boxItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
    // Add other text styles as needed
  },
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: 'black', // Change the color as needed
    marginHorizontal: 16,
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderColor: 'gray', // Change the color as needed
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 13,
    color: 'gray',
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
    marginTop: 20,
  },
  dateStarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    marginRight: 8,
  },  
});

export default callStyle;
