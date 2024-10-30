import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Button,
  ActivityIndicator,
} from "react-native";
import React, { useState,useEffect} from "react";
// import DatePicker from "react-native-date-picker";
import { storeData } from './TempStorage';

const TbcItem = ({ title, tags }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemTilte}>{title}</Text>
      <View style={styles.itemContent}>
        {tags.map((tag, index) => (
          <View style={styles.itemTag} key={index}>
            <Text style={styles.itemTagTitle}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const TbcScreen = ({ navigation, route }) => {

  const [loading, setLoading] = useState(false);

  const data = route.params ?? {};

  const [currentDate, setCurrentDate] = useState('');

   useEffect(() => {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const formattedDate = `${day < 10 ? `0${day}` : day} / ${month < 10 ? `0${month}` : month} / ${year}`;

      setCurrentDate(formattedDate);
      storeData("patient", data);
      console.log(formattedDate)
      console.log(data)
     }, [data]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TBC</Text>
      </View>
      <View style={styles.card}>
        <View
          style={{
            width: 376,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 17,
            gap: 13,
            marginBottom: 10,
          }}
        >
          <TextInput
            value="Name"
            paddingHorizontal={7}
            backgroundColor="#fff"
            width={198}
          />
          <TouchableOpacity onPress={() => {}}>
            <TextInput
              value={currentDate}
              paddingHorizontal={7}
              backgroundColor="#fff"
              width={123}
              editable={false}
            />
          </TouchableOpacity>
        </View>
        {/* {data.map((d) => (
          <TbcItem key={d.title} title={d.title} tags={d.tags} />
        ))} */}
        {Object.keys(data).map((key) => (
          <TbcItem key={key} title={key} tags={data[key]} />
        ))}
      </View>
      <TouchableOpacity
        style={styles.submitBtn}
        onPress={() => {
          // setLoading(true);
          // navigator.navigate();
          navigation.navigate("Continue Tests", { screen: "TBC Done" });
        }}
      >
        {!loading && <Text style={styles.buttonText}>Submit</Text>}
        {loading && <ActivityIndicator size="small" />}
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

export default TbcScreen;

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(39, 175, 233, 0.53)",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    // marginTop: 12,
    width: "100%",
    display: "flex",
    width: 376,
    justifyContent: "flex-start",
  },
  title: {
    color: "#15336D",
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "700",
  },
  card: {
    width: 376,
    // height: 473,
    borderRadius: 20,
    backgroundColor: "#E2EEF7",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 18,
    paddingVertical: 13,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },
  item: {
    width: "100%",
    height: 97,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#A7A7A7",
    padding: 8,
  },

  itemTilte: {
    fontSize: 15,
    lineHeight: 18,
    color: "rgb(21, 51, 109)",
    fontWeight: "700",
  },

  itemContent: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 9,
    flexWrap: "wrap",
  },

  itemTag: {
    minWidth: 71,
    // height: 14,
    borderRadius: 16,
    shadowColor: "rgba(0, 0, 0, 1)",
    elevation: 2,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  itemTagTitle: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: "700",
  },

  submitBtn: {
    marginTop: 28,
    width: 286,
    height: 45,
    borderRadius: 26,
    backgroundColor: "#15336D",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
