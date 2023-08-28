import { ActivityIndicator, Text } from "react-native-paper";
import { View } from "react-native";
import styles from "../utils/styles";

export default function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate("TabsNavigation");
  }, 300);

  return (
    <View style={styles.container}>
      <ActivityIndicator color="#F28705" />
      <Text style={styles.text}>
        <h3>Aguarde um instante</h3>
      </Text>
    </View>
  );
}