import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 24,
    textDecorationLine: "underline",
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sup chump.</Text>
      <Link style={styles.smallText} href={"/nownow"}>
        Link to NowNow
      </Link>
    </View>
  );
}
