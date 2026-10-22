//importando elementos essenciais
import { StyleSheet, Dimensions } from "react-native";

//variáveis das dimensões da tela
const { width, height } = Dimensions.get("window");

//função de css global
const modal = StyleSheet.create({ 

  background: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: height,
    width: width,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1000,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  scroll: {
    padding: 30,
    borderRadius: 20,
    height: height * 0.4,
    width: width * 0.95,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center"
    
  },
  title: {
    color: "#1E3ABA",
    fontSize: 20,
    fontWeight: 700,
  },
  close: {
    position: "absolute",
    marginLeft: width * 0.7,
  },
  content: {
    marginTop: 20,
  },
  subtitle: {
    color: "#1E3ABA",
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    color: "#1E3ABA",
    fontSize: 18,
    fontWeight: 500,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#FFF4BF",
    borderRadius: 50,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  textButtonAndLink: {
    color: "#1E3ABA",
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center",
  },
  textError: {
    color: "#c00",
    fontSize: 15,
    textAlign: "center"
  },

});

//exportando função principal
export default modal;