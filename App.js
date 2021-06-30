import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

//Import Component
import TodoInput from "./src/components/TodoInput";
import TodoItem from "./src/components/TodoItem";

export default function App() {
  // Init State
  const [todoItems, setTodoItems] = useState([
    {
      text: "Buy Milk",
      completed: true,
    },
    {
      text: "Home Work",
      completed: true,
    },
  ]);

  // Add Function
  function addItemTodo(_text) {
    setTodoItems([...todoItems, { text: _text, completed: false }]);
  }

  // Delete Function
  function deleteItemTodo(_index) {
    let tempArr = [...todoItems];
    tempArr.splice(_index, 1);
    setTodoItems(tempArr);
  }

  //Completed Function
  function completeItemTodo(_index) {
    let tempArr = [...todoItems];
    tempArr[_index].completed = true;
    setTodoItems(tempArr);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView
        style={{ padding: 16, justifyContent: "space-between", flex: 1 }}
      >
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            marginBottom: 25,
            marginTop: 50,
          }}
        >
          Todo APP
        </Text>

        <FlatList
          data={todoItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TodoItem
                item={item}
                deleteFunction={() => deleteItemTodo(index)}
                completeFunction={() => completeItemTodo(index)}
              />
            );
          }}
        />

        {/* {todoItems.map((todoItem, index) => (
          <TodoItem
            key={index}
            item={todoItem}
            deleteFunction={() => deleteItemTodo(index)}
            completeFunction={() => completeItemTodo(index)}
          />
        ))} */}

        <TodoInput onPress={addItemTodo} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
