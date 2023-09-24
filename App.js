import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Main = () => {
  const [states, setStates] = useState({
    main: false,
    flight: false,
    counter: false,
    back: false,
  });

  const toggleState = (stateName) => {
    setStates((prevState) => ({
      ...prevState,
      [stateName]: !prevState[stateName],
    }));
  };

  return (
    <View style={styles.heads}>
      <View style={styles.head}>
        <Button title="F-LIGHT" disabled={states.main} onPress={() => toggleState("flight")} />
        <Button title="COUNTER" disabled={states.main} onPress={() => toggleState("counter")} />
      </View>
      <View style={styles.body}>
        {states.flight && <Flight toggleState={toggleState} />}
        {states.counter && <Counter />}
      </View>
      <View style={styles.btn}>
        {states.back && <Button title="BACK" onPress={() => toggleState("main")} />}
      </View>
    </View>
  );
};

const Flight = ({ toggleState }) => {
  const [image, setImage] = useState(false);
  const [text, setText] = useState("ON");

  const toImage = () => {
    setImage((prevState) => !prevState);
    setText(text === "ON" ? "OFF" : "ON");
  };

  return (
    <View>
      {image ? (
        <Image source={{ uri: 'https://cdn2.iconfinder.com/data/icons/blocked-out/29/torch_off-512.png' }} />
      ) : (
        <Image source={{ uri: "https://play-lh.googleusercontent.com/Y6eESpz4KRj3DxT4hfee3YKneKh-O9MgvrgkgtXKCLX8_l40YbS_1MZFtN5_u-zuoAw.com/on.png" }} style={styles.image} />
      )}
      <Button title={text} onPress={toImage} />
    </View>
  );
};

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.main}>
      <Text style={styles.number}>{number}</Text>
      <View style={styles.btnmain}>
        <Button title="-1" onPress={() => setNumber(number - 1)} />
        <Button title="+1" onPress={() => setNumber(number + 1)} />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    paddingVertical: 20,
  },
  heads: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    fontSize: 100,
  },
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
  },
  btnmain: {
    flexDirection: "row",
    gap: 20,
  },
  btn: {
    width: 100,
    paddingVertical: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "stretch",
    marginVertical: 20,
  },
});
