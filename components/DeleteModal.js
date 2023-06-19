import { Text } from "react-native";
import { View } from "react-native";
import { Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { remove as removeTask } from "../features/task/taskSlice";
import { StyleSheet } from "react-native";
import Button from "./Button";
import { close } from "../features/modal/taskModalSlice";

const DeleteModal = () => {
  const { remove } = useSelector((state) => state.taskModal);
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(removeTask(remove));
    dispatch(close());
  };

  const onClose = () => {
    dispatch(close());
  };

  return (
    <Modal
      visible={remove !== null}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.addModal}>
        <View style={styles.addModalContent}>
          <View>
            <Text>
              Are you sure you wanna delete{" "}
              <Text style={{ color: "red" }}>{remove?.title}</Text>
            </Text>
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
              Delete
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;

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
});
