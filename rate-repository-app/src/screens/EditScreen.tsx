import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Picker,
    Alert,
} from "react-native";

const UpdateScreen = ({ navigation, route }) => {
    const { member } = route.params;

    const [fullName, setFullName] = useState(member.name);
    const [membershipType, setMembershipType] = useState(member.membership);
    const [startDate, setStartDate] = useState(member.startDate);
    const [endDate, setEndDate] = useState(member.endDate);
    const [paymentStatus, setPaymentStatus] = useState(member.status);

    const handleUpdate = () => {
        if (!fullName || !membershipType || !startDate || !endDate || !paymentStatus) {
            Alert.alert("Error", "Please fill out all fields.");
            return;
        }

        const updatedMember = {
            ...member,
            name: fullName,
            membership: membershipType,
            startDate: startDate,
            endDate: endDate,
            status: paymentStatus,
        };

        // Volver a Home con el miembro actualizado
        navigation.navigate("Home", { updatedMember });
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Edit</Text>
                <Text style={styles.subtitle}>Member information</Text>

                <Text style={styles.label}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Value"
                    value={fullName}
                    onChangeText={setFullName}
                />

                <Text style={styles.label}>Membership Type</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={membershipType}
                        onValueChange={(itemValue) => setMembershipType(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Value" value="" />
                        <Picker.Item label="Premium" value="Premium Membership" />
                        <Picker.Item label="Basic" value="Basic Membership" />
                    </Picker>
                </View>

                <Text style={styles.label}>Start Date</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Value"
                    value={startDate}
                    onChangeText={setStartDate}
                />

                <Text style={styles.label}>End Date</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Value"
                    value={endDate}
                    onChangeText={setEndDate}
                />

                <Text style={styles.label}>Payment Status</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={paymentStatus}
                        onValueChange={(itemValue) => setPaymentStatus(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Value" value="" />
                        <Picker.Item label="Active" value="Active" />
                        <Picker.Item label="Inactive" value="Inactive" />
                    </Picker>
                </View>

                <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
                    <Text style={styles.updateButtonText}>Update Membership</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default UpdateScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    formContainer: {
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: "#555",
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: "#fff",
    },
    inputWithIcon: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: "#fff",
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        marginBottom: 15,
        backgroundColor: "#fff",
    },
    picker: {
        height: 50,
        width: "100%",
    },
    updateButton: {
        backgroundColor: "#000",
        borderRadius: 8,
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    updateButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
