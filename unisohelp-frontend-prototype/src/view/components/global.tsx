//importando elementos essenciais
import { StyleSheet, Dimensions } from "react-native";

//variáveis das dimensões da tela
const { width, height } = Dimensions.get("window");

//função de css global
const global = StyleSheet.create({

  background: {
    width: width * 1,
    height: height * 1,
    backgroundColor:"#EEE",
  },  
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",   
    marginBottom: 20,
  },
  //cabeçalho
  header: {
    height: height * 0.19,
    backgroundColor: "#fff",
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    paddingTop: height * 0.08,
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
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
    color: "#1E3ABA",
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
    paddingTop: 20,
  },
  icon: {  
    color: "#1E3ABA",
    marginRight: width * 0.65,
    position: "absolute",
  },
  text: {
    color: "#1E3ABA",
    fontSize: 20,
  },

})

//exportando função principal
export default global;