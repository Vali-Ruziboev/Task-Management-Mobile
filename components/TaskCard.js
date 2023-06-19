import { StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { actions, open } from "../features/modal/taskModalSlice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.card}>
      <BouncyCheckbox
        style={styles.checkbox}
        size={25}
        fillColor="#35A7FF"
        unfillColor="#FFFFFF"
        text={task.title}
        iconStyle={{ borderColor: "#35A7FF" }}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(isChecked) => {
          console.log(isChecked);
        }}
      />
      <AntDesign
        onPress={() => dispatch(open({ type: actions.REMOVE, data: task }))}
        style={styles.icon}
        name="delete"
        size={20}
        color="black"
      />
      <AntDesign
        onPress={() => dispatch(open({ type: actions.EDIT, data: task }))}
        style={styles.icon}
        name="edit"
        size={20}
        color="black"
      />
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 4,
    shadowOpacity: 0.1,
    shadowColor: "gray",
    marginVertical: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    flex: 1,
  },

  icon: {
    marginHorizontal: 4,
  },
});
