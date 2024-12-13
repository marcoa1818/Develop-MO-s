import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation, route }) => {
  const [members, setMembers] = useState([
    {
      id: "1",
      name: "Mario Gutierrez",
      membership: "Premium Membership",
      status: "Active",
      startDate: "10/06/2024",
      endDate: "10/10/2024",
    },
    {
      id: "2",
      name: "Marco Antonio M",
      membership: "Basic Membership",
      status: "Active",
      startDate: "15/06/2024",
      endDate: "15/10/2024",
    },
  ]);

  const stats = [
    { id: "1", value: 100, label: "Total memberships", color: "#4ac1ff" },
    { id: "2", value: 135, label: "Total members", color: "#ff5f5f" },
    { id: "3", value: 77, label: "Active memberships", color: "#ff5f5f" },
    { id: "4", value: 95, label: "Active members", color: "#4ac1ff" },
  ];

  // Manejar nuevo miembro recibido desde CreateScreen
  useEffect(() => {
    if (route.params?.newMember) {
      setMembers((prevMembers) => [...prevMembers, route.params.newMember]);
    }
  }, [route.params?.newMember]);

  // Manejar actualizaciones desde UpdateScreen
  useEffect(() => {
    if (route.params?.updatedMember) {
      setMembers((prevMembers) =>
        prevMembers.map((member) =>
          member.id === route.params.updatedMember.id
            ? route.params.updatedMember
            : member
        )
      );
    }
  }, [route.params?.updatedMember]);

  // Manejar eliminaciones desde DeleteScreen
  useEffect(() => {
    if (route.params?.deletedMemberId) {
      setMembers((prevMembers) =>
        prevMembers.filter((member) => member.id !== route.params.deletedMemberId)
      );
    }
  }, [route.params?.deletedMemberId]);

  const renderMember = ({ item }) => (
    <TouchableOpacity
      style={styles.memberCard}
      onPress={() => navigation.navigate("MemberDetails", { member: item })}
      onLongPress={() =>
        navigation.navigate("Delete", { member: item })
      } // Ir a DeleteScreen al hacer long press
    >
      <Text style={styles.memberName}>{item.name}</Text>
      <Text style={styles.memberMembership}>{item.membership}</Text>
      <Text style={styles.memberStatus}>{item.status}</Text>
    </TouchableOpacity>
  );

  const renderStat = ({ item }) => (
    <View style={[styles.statCard, { backgroundColor: item.color }]}>
      <Text style={styles.statValue}>{item.value}</Text>
      <Text style={styles.statLabel}>{item.label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Logout")}>
          <MaterialIcons name="menu" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search members" />
        <MaterialIcons
          name="search"
          size={24}
          color="black"
          style={styles.searchIcon}
        />
      </View>

      {/* Member List */}
      <FlatList
        data={members}
        renderItem={renderMember}
        keyExtractor={(item) => item.id}
        style={styles.memberList}
      />

      {/* Statistics */}
      <FlatList
        data={stats}
        renderItem={renderStat}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={styles.statsContainer}
      />

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <MaterialIcons name="home" size={24} color="black" />
          <Text style={styles.footerLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("Create")}
        >
          <MaterialIcons name="add-circle" size={24} color="black" />
          <Text style={styles.footerLabel}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <MaterialIcons name="bar-chart" size={24} color="black" />
          <Text style={styles.footerLabel}>Statistics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  searchIcon: {
    marginLeft: 10,
  },
  memberList: {
    flexGrow: 0,
    marginBottom: 20,
  },
  memberCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  memberName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  memberMembership: {
    fontSize: 14,
    color: "#555",
  },
  memberStatus: {
    fontSize: 12,
    color: "#888",
  },
  statsContainer: {
    flexGrow: 0,
  },
  statCard: {
    flex: 1,
    padding: 20,
    margin: 5,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  statLabel: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  footerButton: {
    alignItems: "center",
  },
  footerLabel: {
    fontSize: 12,
    marginTop: 5,
  },
});
