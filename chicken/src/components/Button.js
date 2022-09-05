import {
  Text,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

export const Button = ({ onPress, children }) => {
  
  /**
   * @see https://docs.expo.dev/guides/color-schemes/
   */
  const scheme = useColorScheme();
  if(scheme == "dark"){
    // do something when scheme is dark
  }else{
    // do something when scheme is light
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text
        style={{
          fontSize: 20,
          color: "#fff",
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};
