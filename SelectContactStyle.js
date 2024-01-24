import { StyleSheet } from 'react-native';

const SelectContactStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align items and justify content to move items to the left and right
    marginTop: 50,
    marginBottom: 16,
  },
  cancelButton: {
    padding: 8,
  },
  cancelButtonIcon: {
    fontSize: 24,
    color: '#007AFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  contactItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 50, // Add some left margin to the contact name
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  phoneNumber: {
    fontSize: 14,
    color: '#555',
    marginLeft: 50, // Add some left margin to the contact name
  },
  radioContainer: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phonecontacticon : {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#007AFF',
    position: 'absolute',
  },
  radioChecked: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#007AFF',
  },
  submitButton: {
    marginTop: 16,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedContactsContainer: {
    padding: 10,
    backgroundColor: '#EFEFEF', // Background color
    borderBottomColor: '#CCC', // Border color
    borderRadius: 10,
    marginTop: 10, // Add margin at the top for spacing
  },
  selectedContactsScrollView: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  selectedContactItem: {
    flexDirection: 'column', // Changed to column
    alignItems: 'center',
    marginHorizontal: 5,
  },
  selectedContactWrapper: {
    flexDirection: 'row',
    alignItems: 'center', // Align items at the center vertically
  },
  removeIcon: {
    backgroundColor: '#FF5757',
    borderRadius: 20,
    position: 'absolute',
    top: -5,
    left: 35,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 5, // Adjust the margin to move the icon to the right
    zIndex: 2,
  },
  selectedContactName: {
    marginTop: 5, // Added marginTop to separate the icon and name
    fontSize: 14,
    marginRight: 20, // Adjust the margin as needed
  },
  selectedContactIcon: {
    marginRight: 20, // Adjust the margin as needed
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#007AFF',
    width: 60,
    height: 60,
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#EFEFEF',
    marginBottom: 10, // Add margin at the bottom for spacing
    borderRadius: 10,
  },
  searchIcon: {
    position: 'absolute',
    top: 20,
    left: 10,
  },  
  searchInput: {
    marginLeft: 20,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  selectedCountText: {
    position: 'absolute',
    top: '210%',  // Adjust based on your preference
    left: '50%', // Adjust based on your preference
    transform: [{ translateX: -50 }, { translateY: -50 }],
    textAlign: 'center',
    fontSize: 15,
    color: '#007AFF',
  },  
});

export default SelectContactStyle;
