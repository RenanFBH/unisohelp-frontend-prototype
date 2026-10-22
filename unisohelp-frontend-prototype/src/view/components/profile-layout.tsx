//importando elementos essenciais
import { StyleSheet, Dimensions } from "react-native";

//importando tema
import theme from "./theme";

//variáveis das dimensões da tela
const { width, height } = Dimensions.get("window");

//função de css global
const profile = StyleSheet.create({ 

  photo: {
    backgroundColor: theme.colors.primary,
    height: 300,
    width: 300,
    borderWidth: 1,
    borderRadius: 360,
    borderColor: theme.colors.secondary,
    marginTop: 30,
    marginBottom: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    height: height * 0.05,
    width: width * 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: theme.colors.secondary,
    marginBottom: 70,
   
  },
  icon: {
    position: "absolute",
    marginRight: width  * 0.35,

  },
  data: {
    width: width * 0.8,
  },
  text: {
    color: theme.colors.secondary,
    fontSize: 20
  },
  separator: {
    backgroundColor: theme.colors.secondary,
    opacity: 0.3,
    minHeight: 1,
    minWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  }

});

//exportando função principal
export default profile;

