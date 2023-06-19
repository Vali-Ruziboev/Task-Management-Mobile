import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import TaskCard from "./components/TaskCard";
import AddModal from "./components/AddModal";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./app/store";
import { actions, open } from "./features/modal/taskModalSlice";
import DeleteModal from "./components/DeleteModal";

function App() {
  const { values: data } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: 900,
          }}
        >
          To Do
        </Text>
      </View>
      <View style={styles.body}>
        <FlatList
          data={data}
          renderItem={({ item }) => <TaskCard task={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <StatusBar style="auto" />
      <Button
        onPress={() => dispatch(open({ type: actions.ADD }))}
        viewStyle={[styles.addButtonContainer]}
        pressableStyle={[styles.addButtonInnerContainer]}
        textStyle={[styles.addButtonText]}
      >
        +
      </Button>
      <AddModal />
      <DeleteModal />
    </View>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    paddingTop: 80,
    padding: 25,
    shadowColor: "gray",
    textAlign: "center",
    elevation: 5,
    zIndex: 1,
    borderColor: "white",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "white",
  },

  body: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },

  addButtonContainer: {
    position: "absolute",
    bottom: 50,
    right: 50,
    borderRadius: 100,
  },
  addButtonInnerContainer: {
    padding: 4,
    paddingHorizontal: 16,
    borderRadius: 100,
  },

  addButtonText: {
    fontSize: 30,
  },
});
