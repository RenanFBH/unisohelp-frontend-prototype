//importando elementos essenciais
import { StyleSheet, Dimensions } from "react-native";

//variáveis das dimensões da tela
const { width, height } = Dimensions.get("window");

//função de css global
const modal = StyleSheet.create({ 

  background: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: height * 1,
    width: width * 1,
  },

});

//exportando função principal
export default modal;