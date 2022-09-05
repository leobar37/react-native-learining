import { FlatList, StyleSheet } from "react-native";
import ItemTodo from "./ItemTodo";

const TodoList = ({ todos }) => {
  const renderItem = ({ item }) => {
    return <ItemTodo text={item.text} checked={item.checked} />;
  };
  return (
    <FlatList
      style={styles.list}
      renderItem={renderItem}
      data={todos}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    maxWidth: "90%",
    marginTop: 15,
  },
});

export default TodoList;
