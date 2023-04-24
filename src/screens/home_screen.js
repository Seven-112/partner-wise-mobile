import React, { useEffect } from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={()=>navigation.navigate('Login')} title="Login" />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text style={styles.container}>Welcome To Partner Wise App!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 18,
    color: "#389376",
    alignItems: "center",
    justifyContent: "center",
  }
})

export default HomeScreen;
