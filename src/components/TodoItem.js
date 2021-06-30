import React from "react";
import { Text, TouchableOpacity } from "react-native";

function TodoItem(props) {
  let style = props.item.completed
    ? {
        textDecorationLine: "line-through",
      }
    : {
        textDecorationLine: "none",
      };

  return (
    <TouchableOpacity
      style={{
        paddingVertical: 8,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      onPress={() => props.completeFunction()}
    >
      <Text style={[{ fontSize: 18, color: "#e67e22" }, style]}>
        {props.item.text}
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#e74c3c",
          padding: 8,
          alignItems: "center",
          borderRadius: 10,
          width: 40,
          justifyContent: "center",
        }}
        onPress={() => props.deleteFunction()}
      >
        <Text style={{ color: "#FFF" }}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default TodoItem;
