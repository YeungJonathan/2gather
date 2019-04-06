import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Profile from '../components/Profile';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const UserDetailsDrawer = ({ props }) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <Profile />
        </SafeAreaView>
    </ScrollView>
);

export default UserDetailsDrawer;