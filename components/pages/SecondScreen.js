import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function SecondScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>toinen sivu</Text>

      <Pressable
            onPress={() => navigation.navigate("Home")}
          >
            <Text>Home</Text>
          </Pressable>

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
});