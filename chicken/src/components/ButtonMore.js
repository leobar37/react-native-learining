import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import theme from "../theme";
import { useUpdateAtom } from "jotai/utils";
import { creationModalState } from "../atoms";
export const ButtonMore = () => {
  const updateStateModal = useUpdateAtom(creationModalState);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          updateStateModal({
            isOpen: true,
          });
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const buttonWidth = 90;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    botton: -10,
  },
  button: {
    backgroundColor: theme.colors.primary[400],
    borderRadius: 999,
    width: buttonWidth,
    height: buttonWidth,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: theme.fonts.sizes["4xl"],
  },
});

export default ButtonMore;
