//importando elementos essenciais
import { StyleSheet, Dimensions } from "react-native";

//importando tema
import theme from "./theme";

//variáveis das dimensões da tela
const { width, height } = Dimensions.get("window");

//função de css global
const guide = StyleSheet.create({

  button: {
    minHeight:  height * 0.08,
    minWidth: width * 0.9,
    backgroundColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 27,
    borderColor: theme.colors.secondary,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: theme.colors.secondary,
    fontSize: 18,
  },

});

//exportando função principal
export default guide;