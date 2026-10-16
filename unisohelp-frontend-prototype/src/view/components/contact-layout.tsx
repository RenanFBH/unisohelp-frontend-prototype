//importando elementos essenciais
import { StyleSheet, Dimensions } from "react-native";

//variáveis das dimensões da tela
const { width, height } = Dimensions.get("window");

//função de css global
const contact = StyleSheet.create({ 

  sector: {
    marginTop: 15,
    marginStart: width * 0.05,
    marginEnd: width * 0.05,
    backgroundColor: "#fff",
    padding: 15,
    borderWidth: 1,
    borderRadius: 18,
    borderColor: "rgba(30, 58, 186, 0.3)",
    width: width * 0.9,
  },
  name: {
    color: "#1E3ABA",
    fontSize: 17,
    fontWeight: 500,
    textAlign: "center",
  },
  phone: {
    color: "#1E3ABA",
    fontSize: 18,
    textAlign: "center",
  },
  


});

//exportando função principal
export default contact;