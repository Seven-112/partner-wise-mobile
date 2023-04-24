import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import 'expo-dev-client';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import React, { useEffect, useState } from 'react';

GoogleSignin.configure({
  webClientId: '493566788717-eq4dl2vbfotg2u3bav0gbe75p1t7u8id.apps.googleusercontent.com',
});

const LoginScreen = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onGoogleButtonPress = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };

  const onSignOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await auth().signOut();
    } catch (err) {}
  };

  if (initializing) return null;

  if (!user) {
    return (
      <View style={styles.container}>
        <GoogleSigninButton onPress={onGoogleButtonPress} />
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Text>Welcome!!!, {user?.displayName}</Text>
      <TouchableOpacity style={styles.button} onPress={onSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#387390',
    padding: 10,
  },
});

export default LoginScreen;
