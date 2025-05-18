import { StyleSheet  , View , Text} from "react-native";

 export const renderKeyword = ({ item }) => (
    <View style={{ marginRight: 10 }}>
      <Text style={styles.keyword}>{item.keywords[0]}</Text>
    </View>
  );

  const styles = StyleSheet.create({
    keyword: {
      borderWidth: 2,
      borderRadius: 20,
      paddingVertical: 7,
      paddingHorizontal: 16,
      textTransform: "capitalize",
      fontSize: 15,
      borderColor: "#EDEDED",
    },
  });
  