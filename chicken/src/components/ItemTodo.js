import { StyleSheet, Text, View, Dimensions } from "react-native";
import theme from "../theme";
import Checkbox from "expo-checkbox";
import { useState } from "react";

const ItemTodo = ({ text }) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={checked}
          onValueChange={(value) => {
            setChecked(value);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    marginTop: 5,
    paddingBottom: 20,
    // This is defined as the width of a thin line on the plataform.
    // It can be used as the thicknes or a border or division between
    // two elements
    // @see https://reactnative.dev/docs/stylesheet#hairlinewidth
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    minWidth: Dimensions.get("window").width - 185,
    borderBottomColor: theme.colors.gray[200],
  },
  text: {
    fontSize: theme.fonts.sizes.lg,
  },
  checkboxContainer: {
    width: "20%",
    alignItems: "flex-end",
  },
});

export default ItemTodo;
