import "react-native-gesture-handler";
import Stack from "./components/navigation/Stack.js";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {

  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}