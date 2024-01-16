import { StyleSheet } from 'react-native';

const ChatStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 60,
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
  recentCalls: {
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
    borderRadius: 8,
    backgroundColor: 'rgba(139, 69, 19, 0.42)',
    width: 350,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  boxItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  boxText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: 'black',
    marginHorizontal: 3,
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(245, 245, 245, 1.0)',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 16,
    paddingBottom: 30,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  bottomIcon: {
    marginHorizontal: 30,
  },
  bottomIconText: {
    marginTop: 5,
    fontSize: 12,
    marginLeft: 25,
  },
  userBoxIcon: {
    position: 'absolute',
    left: -25, // Adjust the left position as needed
    top: -25, // Adjust the top position as needed
    borderColor: '#8B4513', // Border color
  },

  userName: {
    marginLeft: -82, // Adjust the left margin as needed
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  userMessage: {
    marginLeft: -80, // Adjust the left margin as needed
    fontSize: 14,
  },
  
  newBox: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically at the center
    justifyContent: 'space-between', // Align items horizontally with space between
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: 'rgba(139, 69, 19, 0.42)',
    borderRadius: 16,
    width: 350, // Set the width to 350
    marginTop: 20,
    position: 'relative', // Add position relative to the container
  },

  dateStarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', // Align items horizontally at the end
    marginRight: -25, // Adjust the right margin as needed
  },

  dateText: {
    marginRight: 15, // Adjust the margin as needed
    fontSize: 15,
    color: 'gray',
  },
});

export default ChatStyle;
