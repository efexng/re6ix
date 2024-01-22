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
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  phoneNumber: {
    fontSize: 14,
    color: '#555',
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
});

export default SelectContactStyle;
