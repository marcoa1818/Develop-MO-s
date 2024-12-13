import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Picker,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CreateScreen = ({ navigation, route }) => {
  const [fullName, setFullName] = useState('');
  const [membershipType, setMembershipType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  const handleAddMembership = () => {
    if (!fullName || !membershipType || !startDate || !endDate || !paymentStatus) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    const newMember = {
      id: Date.now().toString(),
      name: fullName,
      membership: membershipType,
      status: paymentStatus,
      startDate,
      endDate,
    };

    // Navigate back to HomeScreen and pass new member
    navigation.navigate('Home', { newMember });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create</Text>
        <Text style={styles.subtitle}>Member information</Text>

        {/* Full Name */}
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter full name"
          value={fullName}
          onChangeText={setFullName}
        />

        {/* Membership Type */}
        <Text style={styles.label}>Membership Type</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={membershipType}
            onValueChange={(itemValue) => setMembershipType(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Select membership type" value="" />
            <Picker.Item label="Premium" value="Premium Membership" />
            <Picker.Item label="Basic" value="Basic Membership" />
          </Picker>
        </View>

        {/* Start Date */}
        <Text style={styles.label}>Start Date</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter start date (e.g., 01/01/2023)"
          value={startDate}
          onChangeText={setStartDate}
        />

        {/* End Date */}
        <Text style={styles.label}>End Date</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter end date (e.g., 30/12/2023)"
          value={endDate}
          onChangeText={setEndDate}
        />

        {/* Payment Status */}
        <Text style={styles.label}>Payment Status</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={paymentStatus}
            onValueChange={(itemValue) => setPaymentStatus(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Select payment status" value="" />
            <Picker.Item label="Paid" value="Paid" />
            <Picker.Item label="Unpaid" value="Unpaid" />
          </Picker>
        </View>

        {/* Add Membership Button */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddMembership}>
          <Text style={styles.addButtonText}>Add Membership</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  addButton: {
    backgroundColor: '#000',
    borderRadius: 8,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
