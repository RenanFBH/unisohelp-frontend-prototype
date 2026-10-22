//importando elementos essenciais
import { StyleSheet, Dimensions } from "react-native";

//importando tema
import theme from "./theme";

//variáveis das dimensões da tela
const { width, height } = Dimensions.get("window");

//função de css global
const contact = StyleSheet.create({ 

  sector: {
    marginTop: 15,
    marginStart: width * 0.05,
    marginEnd: width * 0.05,
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderWidth: 1,
    borderRadius: 18,
    borderColor: theme.colors.secondary,
    width: width * 0.9,
  },
  name: {
    color: theme.colors.secondary,
    fontSize: 17,
    fontWeight: 500,
    textAlign: "center",
  },
  phone: {
    color: theme.colors.secondary,
    fontSize: 18,
    textAlign: "center",
  },

});

//exportando função principal
export default contact;