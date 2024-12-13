import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";

const DeleteScreen = ({ navigation, route }) => {
  const { member } = route.params;

  const handleDelete = () => {
    Alert.alert(
      "Confirm Delete",
      `Are you sure you want to delete ${member.name}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            navigation.navigate("Home", { deletedMemberId: member.id });
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete</Text>
      <Text style={styles.subtitle}>Sure to delete membership?</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={member.name}
          editable={false} // Campo no editable
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Membership Type</Text>
        <TextInput
          style={styles.input}
          value={member.membership}
          editable={false} // Campo no editable
        />
      </View>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Delete Membership</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeleteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
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
    backgroundColor: "#f9f9f9",
    color: "#000",
  },
  deleteButton: {
    marginTop: 20,
    height: 50,
    backgroundColor: "#d9534f", // Color rojo para denotar acción destructiva
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
