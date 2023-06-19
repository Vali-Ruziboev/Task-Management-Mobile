import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update, add as addTask } from "../features/task/taskSlice";
import { close } from "../features/modal/taskModalSlice";

const AddModal = () => {
  const { add, edit } = useSelector((state) => state.taskModal);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const submit = () => {
    if (add) {
      dispatch(addTask({ title: value }));
    } else if (edit) {
      dispatch(update({ id: edit.id, title: value }));
    }
    dispatch(close());

    setValue("");
  };

  const onClose = () => {
    dispatch(close());
    setValue("");
  };

  useEffect(() => {
    if (edit !== null) {
      setValue(edit.title);
    }
  }, [edit]);

  return (
    <Modal
      visible={add || edit !== null}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.addModal}>
        <View style={styles.addModalContent}>
          <View>
            <Text>Title</Text>
            <TextInput
              autoFocus={true}
              value={value}
              onChangeText={(value) => setValue(value)}
              style={styles.input}
              placeholder="Title"
              onSubmitEditing={submit}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <Button
              onPress={onClose}
              pressableStyle={[styles.buttons, styles.cancelBtn]}
              textStyle={[{ color: "black" }]}
            >
              Cancel
            </Button>
            <Button onPress={submit} pressableStyle={[styles.buttons]}>
              {add ? "Add" : "Edit"}
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddModal;

const styles = StyleSheet.create({
  addModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },

  addModalContent: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 20,
    padding: 20,
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },

  buttons: {
    padding: 6,
    borderRadius: 6,
    width: 80,
  },

  cancelBtn: {
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 0.5,
  },

  input: {
    padding: 4,
    borderBottomWidth: 0.5,
    borderColor: "gray",
  },
});
