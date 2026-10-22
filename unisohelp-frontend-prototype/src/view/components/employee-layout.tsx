//importando elementos essenciais
import { StyleSheet, Dimensions } from "react-native";

//importando tema
import theme from "./theme";

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
    color: theme.colors.secondary,
    backgroundColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: theme.colors.secondary,
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
    borderColor: theme.colors.secondary,
    backgroundColor: theme.colors.secondary,
    justifyContent: "center",
    alignItems: "center"

  },
  icon: {
    color: theme.colors.primary,
  },
  employee: {
    marginTop: 15,
    marginBottom: 15,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  photo: {
    height: 70,
    width: 70,
    borderWidth: 1,
    borderRadius: 360,
    borderColor: theme.colors.secondary,
    marginRight: 7,
  },
  data: {
    marginLeft: 7,
  },
  position: {
    color: theme.colors.secondary,
    fontSize: 15,
  },
  name: {
    color: theme.colors.secondary,
    fontSize: 18,
  },
  email: {
    color: theme.colors.secondary,
    fontSize: 15,
  },
  separator: {
    backgroundColor: theme.colors.secondary,
    height: height * 0.001,
    width: width * 0.6,
  }
  
});

//exportando função principal
export default employee;