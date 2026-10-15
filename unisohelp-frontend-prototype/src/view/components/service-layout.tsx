//importando elementos essenciais
import { StyleSheet, Dimensions } from "react-native";

//variáveis das dimensões da tela
const { width, height } = Dimensions.get("window");

//função de css global
const service = StyleSheet.create({ 

  sector: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderWidth: 1,
    borderRadius: 18,
    borderColor: "rgba(30, 58, 186, 0.5)",
  },
  name: {
    color: "#1E3ABA",
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
  },
  phone: {
    color: "#1E3ABA",
    fontSize: 18,
  },
  separator: {
    backgroundColor: "#1E3ABA",
    opacity: 0.3,
    minHeight: 1,
    minWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  }


});

//exportando função principal
export default service;