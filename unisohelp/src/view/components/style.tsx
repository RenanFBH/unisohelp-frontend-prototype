import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const styleUnisoHelp = StyleSheet.create({
  //estilos de blocos
  //geral
  bg: {
    width: width * 1,
    height: height * 1,
    backgroundColor:"#EEE",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",   
  },
  
  //splashScreen
  bgSplash: {
    width: width * 1,
    height: height * 1,
    backgroundColor:"#e6f6ff",
  },
  splashContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  //login
  loginHeader: {
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
  loginContent: {
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
  contentCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: height * 1,
  },
  footerCard: {
    flex: 1,
  },
  options: {
    flex: 1,
    flexDirection: "row",
    padding: 1,

  },
  remember: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  questions: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  modal: {
    width: width * 0.1,
    height: height * 0.1,
    backgroundColor: "#000",
  },

  //guide
  titleAndSubtitleViewPages: {
    flex:1,
    alignItems: "center",
  },

  //index
  indexHeader: {
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
  buttonGroup: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  //settings



  //estilos de objetos
  //geral

  //splashScreen
  logo: {
    width: 400,
    height: 400,
  },

  //login
  icon: {
    width: 60,
    height:60,
    padding: 0,
    marginRight: 10,
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
  input: {
    width: width * 0.8,
    height: height * 0.06,
    fontSize: 20,
    borderWidth: 2,
    borderColor: "#1E3ABA",
    borderRadius: 15,
    margin: 10,
    padding: 10,
  },
  titleCard: {
    color: "#1E3ABA",
    fontSize: 30,
    fontWeight: 700,
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
  textRemember: {
    color: "#1E3ABA",
    fontSize: 17,
  },
  textQuestions: {
    color: "#1E3ABA",
    fontSize: 17,
  },

  //index
  welcomeHeaderIndex: {
    color: "#1E3ABA",
    fontSize: 20,
    fontWeight: 700,
  },
  raHeader: {
    color: "#1E3ABA",
    fontSize: 20,
    fontWeight: 400,
  },
  buttonIndex: {
      minHeight:  height * 0.11,
      minWidth: width * 0.9,
      backgroundColor: "#fff",
      borderWidth: 1,
      borderRadius: 27,
      borderColor: "#1E3ABA",
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
  },
  textButton: {
    color: "#1E3ABA",
    fontSize: 20,
  },
  iconButton: {  
    color: "#1E3ABA",
    marginRight: width * 0.5,
    position: "absolute",
  },

  //Guide
  welcomeHeaderPages: {
    color: "#1E3ABA",
    fontSize: 20,
    fontWeight: 700,
  },
  backButton: {
    position: "absolute",
    marginEnd: width * 0.7,
  },

  //settings
  buttonSettingsAndAccessibility: {
    minHeight:  height * 0.08,
    minWidth: width * 0.9,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 27,
    borderColor: "#1E3ABA",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowButton: {
    color: "#1E3ABA",
    position: 'absolute',
    marginLeft: width * 0.5,
  },

  //accessibility
  switchAccessibility: {
    marginRight: width * 0.5,
    position: "absolute",
  },

});

export default styleUnisoHelp;