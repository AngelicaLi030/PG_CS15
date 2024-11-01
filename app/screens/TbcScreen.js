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
import styles from '../styles/TbcStyle'
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
        <Text style={styles.title}>Symptom Summary</Text>
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
