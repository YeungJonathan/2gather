import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Profile from '../components/Profile';
import users from '../constants/FakeUserData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const UserDetailsDrawer = () => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <Profile user={users[0]} />
        </SafeAreaView>
    </ScrollView>
);

export default UserDetailsDrawer;