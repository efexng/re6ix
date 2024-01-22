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
    color: '#8B4513',
  },
  recentCalls : {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 8,
    color: '#8B4513',
  },
  boxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    borderRadius: 8, // Add border radius for rounded corners
    backgroundColor: 'rgba(139, 69, 19, 0.42)', // SaddleBrown color with 42% opacity
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
    backgroundColor: '#8B4513', // SaddleBrown color with 42% opacity
    marginHorizontal: 16,
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
  newBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'rgba(139, 69, 19, 0.42)',
    borderRadius: 16,
    marginTop: 20,
  },  
  dateStarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 8, // Adjust the margin to bring the date closer to the star
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25, // Adjust the margin to bring the date closer to the star
  },
  date: {
    marginRight: 18,
  },  
  starIcon: {
    marginRight: 4, // Adjust the margin to bring the star closer to the exclamation
  },
});

export default callStyle;
