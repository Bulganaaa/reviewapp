
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
//   const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Homescreen</Text>
      {/* <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
});