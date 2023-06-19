import { Pressable, StyleSheet, Text, View } from "react-native";

const Button = ({
  viewStyle = [],
  pressableStyle = [],
  textStyle = [],
  onPress,
  children,
}) => {
  return (
    <View style={[styles.buttonOuterContainer, ...viewStyle]}>
      <Pressable
        style={[styles.buttonInnerContrainer, ...pressableStyle]}
        onPress={onPress}
        android_ripple={{ color: "gray" }}
      >
        <Text style={[styles.buttonText, ...textStyle]}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    overflow: "hidden",
  },
  buttonInnerContrainer: {
    elevation: 2,
    padding: 2,
    backgroundColor: "#35A7FF",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  checking: {
    backgroundColor: "red",
  },
});
