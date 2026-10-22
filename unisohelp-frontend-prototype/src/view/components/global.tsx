//importando elementos essenciais
import { StyleSheet, Dimensions } from "react-native";

//importando tema
import theme from "./theme";

//variáveis das dimensões da tela
const { width, height } = Dimensions.get("window");

//função de css global
const global = StyleSheet.create({
  
  background: {
    width: width * 1,
    height: height * 1,
    backgroundColor: theme.colors.tertiary,
  },  
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",   
    marginBottom: 20,
  },
  //cabeçalho
  header: {
    height: height * 0.18,
    backgroundColor: theme.colors.primary,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    paddingTop: height * 0.07,
    paddingLeft: width * 0.06,
    paddingRight: width * 0.04,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  iconHeader: {
    width: 60,
    height:60,
    padding: 0,
    marginRight: 10,
  },
  titleAndSubtitleView: {
    flex:1,
    alignItems: "center",
  },
  title: {
    color: theme.colors.secondary,
    fontSize: 20,
    fontWeight: 700,
  },
  button: {
    position: "absolute",
    marginEnd: width * 0.7,
  },
  //botões
  group: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
  },
  icon: {  
    color: theme.colors.secondary,
    marginRight: width * 0.65,
    position: "absolute",
  },
  text: {
    color: theme.colors.secondary,
    fontSize: 20,
  },
  iconTheme: {
    color: theme.colors.secondary,
  },
  iconTheme2: {
    color: theme.colors.primary,
  },

})

//exportando função principal
export default global;