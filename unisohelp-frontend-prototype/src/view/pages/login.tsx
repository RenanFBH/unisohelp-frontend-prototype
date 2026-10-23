//importando elementos essenciais
import * as React from 'react';
import { View, Text, Image, TextInput, Pressable, KeyboardAvoidingView, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';
import Authentication from '../../viewmodel/authViewModel';
import { Error } from './modal';

//importando tema
import theme from '../components/theme';

//importando estilo
import global from '../components/global';
import login from '../components/login-layout';

//definindo o tipo da navegação para a tela login
type NavigationProp = StackNavigationProp<RootStackParamList, 'login'>;

//função principal
const LoginScreen =()=> {

  //tipando o hook useNavigation com o tipo NavigationProp
  const navigation = useNavigation<NavigationProp>();

  //variáveis do formulário de login
  const [remember, setRemember] = React.useState("unchecked");
  const [btnPress, setBtn] = React.useState("unpressed");
  const [ra, setRa] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorModal, setErrorModal] = React.useState(false);
  let name = "Renan";
  
  //função para logar
  const handleSignIn =()=> {
    const auth = new Authentication();
    let response = auth.Login(Number(ra), password, remember);
    if (!response) {
      setErrorModal(true);
      return false;
    } 
    navigation.navigate("index");
  };
  
  //visual da página login
  return (
    <View style={global.background}>
        <View style={login.header}>
          <Image style={global.iconHeader} source={require('../../../assets/img/unisoIcon.png')} />
          <View style={login.titleAndSubtitleView}>
            <Text style={login.titleHeader}>UNISO Help</Text>
            <Text style={login.subtitleHeader}>Universidade de Sorocaba</Text>
          </View>
        </View>
        <View style={global.content}>
          <View style={login.card}>
            <View style={login.headerCard}>
              <Text style={login.titleCard}>Login</Text>
            </View>
            <View style={login.contentCard}>
              <TextInput style={login.inputCard} placeholder="RA" placeholderTextColor={theme.colors.secondary} onChangeText={(text) => {setRa(text)}}/>
              <TextInput style={login.inputCard} placeholder="Senha" placeholderTextColor={theme.colors.secondary} secureTextEntry={true} onChangeText={(text) => {setPassword(text)}}/>
            </View>
            <View style={login.footerCard}>
              <View style={login.optionsCard}>
                <View style={login.rememberCard}>
                  <RadioButton 
                    value="unchecked"
                    status={ remember === "checked" ? "checked" : "unchecked" } 
                    onPress={ remember === "checked" ? () => {setRemember("unchecked")} : () => {setRemember("checked")} }
                    color={theme.colors.secondary}
                    uncheckedColor={theme.colors.secondary}
                  />
                  <Text style={login.textRememberCard}>Lembrar-me</Text>
                </View>
                <View style={login.questionsCard}>
                  <Pressable>
                  <Text style={login.textQuestionsCard}>Dúvidas?</Text>
                </Pressable>
                </View>
              </View>
              <View style={login.buttonView}>
                <Pressable 
                  style={login.buttonCard} 
                  onPress={() => {handleSignIn()}}         
                >
                  <Text style={login.textButtonCard}>Entrar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        {errorModal === true && (
          <View style={{position: 'absolute',  zIndex: 999}}>
            <Error onClose={() => setErrorModal(false)}/>
          </View>
        )};
    </View>
  );
}

//exportando função principal
export default LoginScreen;

