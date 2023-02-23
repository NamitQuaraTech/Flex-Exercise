import { Text, View, StyleSheet, Button, Image } from "react-native";

const App = () => {
  return (
    <View>
      <View style={{ padding: 50, flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: "#ff0000",
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: "#0000ff",
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: "#00ff00",
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>3</Text>
        </View>
      </View>
      <View style={{ paddingLeft: 50 }}>
        <View
          style={{
            backgroundColor: "#ff0000",
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: "#0000ff",
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: "#00ff00",
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>3</Text>
        </View>
      </View>
      <View
        style={{
          paddingLeft: 50,
          paddingTop: 50,
          flexDirection: "row",
          width: "80%",
          height: 300,
          justifyContent: "space-around",
          alignItems: "stretch",
        }}
      >
        <View
          style={{
            flex:1,
            backgroundColor: "#ff0000",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            flex:2,
            backgroundColor: "#0000ff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            flex:3,
            backgroundColor: "#00ff00",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>3</Text>
        </View>
      </View>
      <View style={{ padding: 50, flexDirection: "row-reverse",justifyContent:"space-evenly" }}>
        <View
          style={{
            backgroundColor: "#ff0000",
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: "#0000ff",
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: "#00ff00",
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>3</Text>
        </View>
      </View>
      <View style={{ padding: 50, flexDirection: "row-reverse",justifyContent:"space-between" }}>
        <View
          style={{
            backgroundColor: "#ff0000",
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: "#0000ff",
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: "#00ff00",
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>3</Text>
        </View>
      </View>
    </View>
  );
};

export default App;
