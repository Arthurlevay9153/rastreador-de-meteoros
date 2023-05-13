//telaInicial = tela de inicio

import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default class TelaInicial extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
        <ImageBackground
          source={require("../assets/bg.png")}
          style={styles.backgroundImage}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Localização da EEI</Text>
        </View>
        <Text> Rastreador de </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Meteoros");
          }}
        >
          <Text> Meteoros</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Satelite");
          }}
        >
          <Text> Satelite</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
