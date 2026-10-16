//importando elementos essenciais
import { StyleSheet, Dimensions } from "react-native";

//variáveis das dimensões da tela
const { width, height } = Dimensions.get("window");

//função de css global
const employee = StyleSheet.create({

  filter: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center"
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#1E3ABA",
    padding: 10,
    fontSize: 17,
    width: width * 0.9,
    height: height * 0.06,

  },
  button: {
    position: "absolute",
    marginLeft: width * 0.8,
    height: height * 0.06,
    width: width * 0.1,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#1E3ABA",
    justifyContent: "center",
    alignItems: "center"

  },
  icon: {
    color: "#fff",

  },
  
})

//exportando função principal
export default employee;