//importando elementos essenciais
import { StyleSheet, Dimensions } from "react-native";

//variáveis das dimensões da tela
const { width, height } = Dimensions.get("window");

//função de css global
const guide = StyleSheet.create({

  button: {
    minHeight:  height * 0.09,
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

});

//exportando função principal
export default guide;