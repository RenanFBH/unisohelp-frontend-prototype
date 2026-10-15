//importando elementos essenciais
import { StyleSheet, Dimensions } from "react-native";

//variáveis das dimensões da tela
const { width, height } = Dimensions.get("window");

//função de css global
const login = StyleSheet.create({ 

  header: {
    height: height * 0.2,
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
  titleAndSubtitleView: {
    flex:1,
  },
  titleHeader: {
    color: "#1E3ABA",
    fontSize: 30,
    fontWeight: 700,
  },
  subtitleHeader: {
    color: "#1E3ABA",
    fontSize: 20,
    fontWeight: 400,
  },
  //formulário
  card: {
    width: width * 0.9,
    height: height * 0.43,
    backgroundColor: "#ffff",
    marginTop: height * 0.1,
    marginBottom: height * 0.25,
    borderRadius: 17, 
    padding: 20,
  },
  headerCard: {
    flex: 1,
  },
   titleCard: {
    color: "#1E3ABA",
    fontSize: 30,
    fontWeight: 700,
  },
  contentCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: height * 1,
  },
  inputCard: {
    width: width * 0.8,
    height: height * 0.06,
    fontSize: 20,
    borderWidth: 2,
    borderColor: "#1E3ABA",
    borderRadius: 15,
    margin: 10,
    padding: 10,
  },
  footerCard: {
    flex: 1,
  },
  optionsCard: {
    flex: 1,
    flexDirection: "row",
    padding: 1,

  },
  rememberCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textRememberCard: {
    color: "#1E3ABA",
    fontSize: 17,
  },
  textQuestionsCard: {
    color: "#1E3ABA",
    fontSize: 17,
  },
  questionsCard: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  buttonView: {
    flex: 1,
    alignItems: "center",
  },
  buttonCard: {
    width: width * 0.8,
    height: height * 0.06,
    backgroundColor: "#FFD000",
    borderWidth: 2,
    borderColor: "#1E3ABA",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonCard: {
    color: "#1E3ABA",
    fontSize: 20,
  },
  
});

//exportando função principal
export default login;