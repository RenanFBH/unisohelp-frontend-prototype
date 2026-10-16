//importando elementos essenciais
import { StyleSheet, Dimensions } from "react-native";

//variáveis das dimensões da tela
const { width, height } = Dimensions.get("window");

//função de css global
const profile = StyleSheet.create({ 

  photo: {
    backgroundColor: "#fff",
    height: 300,
    width: 300,
    borderWidth: 1,
    borderRadius: 360,
    borderColor: "#1E3ABA",
    marginTop: 30,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#fff",
    height: height * 0.05,
    width: width * 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#1E3ABA",
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
    color: "#1E3ABA",
    fontSize: 20
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
export default profile;

