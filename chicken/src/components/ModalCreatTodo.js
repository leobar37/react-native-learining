import CheckBox from "expo-checkbox";
import { useAtomValue } from "jotai";
import { useUpdateAtom } from "jotai/utils";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { creationModalState } from "../atoms";
import theme from "../theme";
import { useAddTodo } from "../controller/todo";
import { useState } from "react";
const textInputStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 3,
    borderColor: theme.colors.gray[200],
    width: "80%",
    borderRadius: 5,
  },
});

const FormControl = ({ label, children }) => {
  return (
    <View style={formControlStyles.control}>
      <Text style={formControlStyles.label}>{label}</Text>
      {children}
    </View>
  );
};

const formControlStyles = StyleSheet.create({
  label: {
    fontSize: theme.fonts.sizes.lg,
    marginRight: 10,
    fontWeight: "600",
  },
  control: {
    marginTop: 16,
    marginBottom: 6,
    flexDirection: "row",
    alignItems: "center",
  },
});

const CreateTodoModal = () => {
  const updateStateModal = useUpdateAtom(creationModalState);
  const addTodo = useAddTodo();
  const stateModal = useAtomValue(creationModalState);
  const [values, setValues] = useState({
    text: "",
    checked: false,
  });
  return (
    <Modal animationType="fade" visible={stateModal.isOpen} transparent>
      <View style={styles.modalContent}>
        <View>
          <Text style={styles.modalTextHeader}>Create a todo</Text>
        </View>
        <View>
          <FormControl label={"Text:"}>
            <TextInput
              nativeID="text"
              value={values.text}
              onChangeText={(text) => {
                setValues((prev) => ({
                  ...prev,
                  text: text,
                }));
              }}
              style={textInputStyles.input}
            />
          </FormControl>
          <FormControl label={"Checked:"}>
            <CheckBox
              value={values.checked}
              onValueChange={(val) => {
                setValues((prev) => ({
                  ...prev,
                  checked: val,
                }));
              }}
            />
          </FormControl>
        </View>
        <View style={styles.modalFooter}>
          <Button
            onPress={() => {
              updateStateModal({
                isOpen: false,
              });
            }}
            color={theme.colors.primary[700]}
            title="Cancelar"
          />
          <View
            style={{
              marginLeft: 4,
            }}
          >
            <Button
              title="Guardar"
              onPress={async () => {
                await addTodo.mutateAsync(values);
                setValues({
                  checked: false,
                  text: "",
                });
                updateStateModal({
                  isOpen: false,
                });
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CreateTodoModal;

const styles = StyleSheet.create({
  modalContent: {
    padding: 15,
    paddingTop: 45,
    width: 350,
    elevation: 1,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    backgroundColor: "white",
  },
  modalTextHeader: {
    fontSize: theme.fonts.sizes.xl,
    fontWeight: "500",
    textAlign: "center",
  },

  modalFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "center",
    alignContent: "flex-end",
    marginBottom: 5,
    marginTop: 25,
  },
});
