import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Picker,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const CreateScreen = () => {
    const [membershipType, setMembershipType] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    // Mostrar el DatePicker
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    // Ocultar el DatePicker
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    // Manejar la selección de fecha
    const handleConfirm = (date) => {
        const formattedDate = date.toISOString().split('T')[0]; // Formato: YYYY-MM-DD
        setSelectedDate(formattedDate);
        hideDatePicker();
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <MaterialIcons name="arrow-back" size={28} color="black" />
                <MaterialIcons name="account-circle" size={28} color="black" />
            </View>

            {/* Form */}
            <View style={styles.formContainer}>
                <Text style={styles.title}>Create</Text>
                <Text style={styles.subtitle}>Member information</Text>

                {/* Full Name */}
                <Text style={styles.label}>Full Name</Text>
                <TextInput style={styles.input} placeholder="Value" />

                {/* Membership Type */}
                <Text style={styles.label}>Membership Type</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={membershipType}
                        onValueChange={(itemValue) => setMembershipType(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Value" value="" />
                        <Picker.Item label="Premium" value="premium" />
                        <Picker.Item label="Basic" value="basic" />
                    </Picker>
                </View>

                {/* Start Date */}
                <Text style={styles.label}>Start Date</Text>
                <View style={styles.container}>
                    <Text style={styles.label}>Start Date</Text>
                    <TouchableOpacity onPress={showDatePicker} style={styles.inputWithIcon}>
                        <TextInput
                            style={styles.input}
                            placeholder="Value"
                            value={selectedDate}
                            editable={false} // Evitar que el usuario escriba directamente
                        />
                        <MaterialIcons name="calendar-today" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Modal de selección de fecha */}
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>

                {/* End Date */}
                <Text style={styles.label}>End Date</Text>
                <View style={styles.container}>
                    <Text style={styles.label}>End Date</Text>
                    <TouchableOpacity onPress={showDatePicker} style={styles.inputWithIcon}>
                        <TextInput
                            style={styles.input}
                            placeholder="Value"
                            value={selectedDate}
                            editable={false} // Evitar que el usuario escriba directamente
                        />
                        <MaterialIcons name="calendar-today" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Modal de selección de fecha */}
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>

                {/* Payment Status */}
                <Text style={styles.label}>Payment Status</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={paymentStatus}
                        onValueChange={(itemValue) => setPaymentStatus(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Value" value="" />
                        <Picker.Item label="Paid" value="paid" />
                        <Picker.Item label="Unpaid" value="unpaid" />
                    </Picker>
                </View>

                {/* Add Membership Button */}
                <TouchableOpacity style={styles.addButton}>
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
