import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const TbcDone = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../../assets/Wechat426.jpg")}
          style={styles.image}
        ></Image>
        <Text style={styles.title}>Woo hoo!!</Text>
        <Text style={styles.subTitle}>
          Congrats! Daily symptoms have been successfully recorded!
        </Text>
      </View>
      <TouchableOpacity
        style={styles.submitBtn}
         onPress={() => {
           navigation.navigate("Continue Tests", { screen: "CAP Records Home" });
         }}
      >
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.linkBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.linkText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TbcDone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(39, 175, 233, 0.53)",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 28,
    paddingTop: 30,
  },
  card: {
    width: 304,
    height: 353,
    backgroundColor: "#fff",
    borderRadius: 47,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 33,
    paddingTop: 23,
  },
  image: {
    width: 216,
    height: 186,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    marginTop: 20,
  },
  subTitle: {
    fontSize: 15,
    color: "rgba(105, 98, 98, 0.64)",
    fontWeight: "700",
    marginTop: 31,
  },
  submitBtn: {
    marginTop: 115,
    width: 286,
    height: 45,
    borderRadius: 26,
    backgroundColor: "#15336D",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    lineHeight: 45,
    fontWeight: "600",
  },
  linkBtn: {
    marginTop: 20,
  },
  linkText: {
    color: "rgba(21, 51, 109, 0.93)",
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});
