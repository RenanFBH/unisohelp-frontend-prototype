//importando elementos essenciais
import { StyleSheet, Dimensions } from "react-native";

//variáveis das dimensões da tela
const { width, height } = Dimensions.get("window");

//função de css global
const index = StyleSheet.create({ 

  titleAndSubtitleView: {
    flex:1,
  },
  title: {
    color: "#1E3ABA",
    fontSize: 20,
    fontWeight: 700,
  },
  subtitle: {
    color: "#1E3ABA",
    fontSize: 20,
    fontWeight: 400,
  },
  photo: {
    width: 60,
    height: 60,
    padding: 0,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 360,
    borderColor: "#1E3ABA",
  },
  //botões
  button: {
      minHeight:  height * 0.11,
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
export default index;