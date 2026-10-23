//importando elementos essenciais
import { StyleSheet, Dimensions } from "react-native";

//importando tema
import theme from "./theme";

//variáveis das dimensões da tela
const { width, height } = Dimensions.get("window");

//função de css da página de modais
const modal = StyleSheet.create({ 

  background: {
    backgroundColor: theme.colors.backgroundOpacity,
    height: height,
    width: width,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1000,
  },
  card: {
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    justifyContent: "center",
  },
  cardError: {
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    justifyContent: "center",
  },
  scroll: {
    padding: 30,
    borderRadius: 20,
    height: height * 0.4,
    width: width * 0.95,
  },
  scrollError: {
    padding: 30,
    borderRadius: 20,
    height: height * 0.15,
    width: width * 0.95,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center"
  },
  title: {
    color: theme.colors.secondary,
    fontSize: 20,
    fontWeight: 700,
  },
  titleError: {
    color: theme.colors.errorColor,
    fontSize: 20,
    fontWeight: 700,
  },
  close: {
    position: "absolute",
    marginLeft: width * 0.7,
  },
  icon: {  
    color: theme.colors.errorColor,
    marginRight: width * 0.65,
    position: "absolute",
  },
  content: {
    marginTop: 20,
  },
  subtitle: {
    color: theme.colors.secondary,
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    color: theme.colors.secondary,
    fontSize: 18,
    fontWeight: 500,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 50,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  textButton: {
    color: theme.colors.buttonGuideModal,
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center",
  },
  textLink: {
    color: theme.colors.linkGuideModal,
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