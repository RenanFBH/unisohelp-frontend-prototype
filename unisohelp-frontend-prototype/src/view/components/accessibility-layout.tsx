//importando elementos essenciais
import { StyleSheet, Dimensions } from "react-native";

//variáveis das dimensões da tela
const { width, height } = Dimensions.get("window");

//função de css global
const accessibility = StyleSheet.create({ 

  button: {
    minHeight:  height * 0.08,
    minWidth: width * 0.9,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 27,
    borderColor: "#1E3ABA",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  switch: {
    marginRight: width * 0.5,
    position: "absolute",
  },
  
});

//exportando função principal
export default accessibility;