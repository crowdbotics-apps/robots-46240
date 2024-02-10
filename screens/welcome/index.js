import React, { useState } from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

const WelcomeScreen = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  React.useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Image style={styles.logo} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.text}>
            Let's build something amazing together!
          </Text>
        </View>
        <TouchableOpacity onPress={toggle}>
          <Text style={styles.timer}>{seconds}s</Text>
        </TouchableOpacity>
        <Text style={styles.footer}>Made with ❤️ by Crowdbotics</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 180,
    width: 180,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#828AB0",
    fontWeight: "700"
  },
  timer: {
    textAlign: "center",
    fontSize: 48,
    color: "#828AB0",
    fontWeight: "700"
  },
  footer: {
    textAlign: "center",
    fontSize: 18,
    color: "#828AB0",
    fontWeight: "700",
    marginBottom: 20
  }
});
export default WelcomeScreen;