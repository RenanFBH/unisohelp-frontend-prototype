//importando elementos essenciais
import { StyleSheet, Dimensions } from "react-native";

//importando tema
import theme from "./theme";

//variáveis das dimensões da tela
const { width, height } = Dimensions.get("window");

//função de css global
const index = StyleSheet.create({ 

  titleAndSubtitleView: {
    flex:1,
  },
  title: {
    color: theme.colors.secondary,
    fontSize: 20,
    fontWeight: 700,
  },
  subtitle: {
    color: theme.colors.secondary,
    fontSize: 18,
    fontWeight: 500,
  },
  photo: {
    width: 60,
    height: 60,
    padding: 0,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 360,
    borderColor: theme.colors.secondary,
  },
  //botões
  button: {
      minHeight:  height * 0.11,
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
  
});

//exportando função principal
export default index;