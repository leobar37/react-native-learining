import 'react-native-get-random-values'
import { AntDesign } from "@expo/vector-icons";
import { registerRootComponent } from "expo";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ButtonMore from "./components/ButtonMore";
import ModalCreatTodo from "./components/ModalCreatTodo";
import TodoList from "./components/TodoList";
import { useloadFonts } from "./hooks";
import theme from "./theme";
import { useTodos } from "./controller/todo";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const generateTodos = () => {
  return Array.from({ length: 10 }).map((_, idx) => ({
    id: idx,
    text: "Todo " + (idx + 1),
    checked: idx % 2 == 0,
  }));
};

const TODOS = generateTodos();

function App() {
  const { data: todos = [], isLoading } = useTodos();
  const loaded = useloadFonts();
  if (!loaded || isLoading) {
    return (
      // TODO: handle with splash screen here
      <View>
        <Text>Cargando...</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} style="dark" hidden={false}  />
      <View style={styles.heading}>
        <Text style={styles.title}>Todo App 2 asa</Text>
        <View
          style={{
            paddingLeft: 10,
            alignItems: "center",
          }}
        >
          <AntDesign
            style={{
              paddingTop: 2,
              color: theme.colors.primary[400],
            }}
            name="checkcircle"
            size={theme.fonts.sizes["2xl"]}
          />
        </View>
      </View>
      <TodoList todos={todos} />
      <ButtonMore />
      <ModalCreatTodo />
    </SafeAreaView>
  );
}

const Main = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    paddingBottom: 36,
    paddingLeft: 14,
    marginLeft: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: theme.fonts.sizes["3xl"],
    fontWeight: "700",
  },
});

export default registerRootComponent(Main);
