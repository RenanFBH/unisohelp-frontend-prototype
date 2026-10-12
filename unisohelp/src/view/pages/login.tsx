//importando elementos essenciais
import * as React from 'react';
import { View, Text, Image, TextInput, Pressable, KeyboardAvoidingView, Alert, Platform, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';
import LoginViewModel, {Login} from '../../viewmodel/login/loginViewModel';

//importando estilo
import styleUnisoHelp from '../components/style';

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
  let name = "Renan";
  
  //função para logar
  const handleSignIn =()=> {
    const data = {
      ra: Number(ra),
      password,
      remember,
      name
    }
    let response = Login(data);
    if (!response) {
      Alert.alert(
        "Erro!",
        "RA ou senha inválidos!"
      );
      return false;
    } 
    navigation.navigate("index");
  };

  //visual da página login
  return (
    <KeyboardAvoidingView contentContainerStyle={styleUnisoHelp.bg} behavior="position" enabled>
        <View style={styleUnisoHelp.loginHeader}>
          <Image style={styleUnisoHelp.icon} source={require('../../../assets/img/unisoIcon.png')} />
          <View style={styleUnisoHelp.titleAndSubtitleView}>
            <Text style={styleUnisoHelp.titleHeader}>UNISO Help</Text>
            <Text style={styleUnisoHelp.subtitleHeader}>Universidade de Sorocaba</Text>
          </View>
        </View>
        <View style={styleUnisoHelp.content}>
          <View style={styleUnisoHelp.loginContent}>
            <View style={styleUnisoHelp.headerCard}>
              <Text style={styleUnisoHelp.titleCard}>Login</Text>
            </View>
            <View style={styleUnisoHelp.contentCard}>
              <TextInput style={styleUnisoHelp.input} placeholder="RA" onChangeText={(text) => {setRa(text)}}/>
              <TextInput style={styleUnisoHelp.input} placeholder="Senha" secureTextEntry={true} onChangeText={(text) => {setPassword(text)}}/>
            </View>
            <View style={styleUnisoHelp.footerCard}>
              <View style={styleUnisoHelp.options}>
                <View style={styleUnisoHelp.remember}>
                  <RadioButton 
                    value="unchecked"
                    status={ remember === "checked" ? "checked" : "unchecked" } 
                    onPress={ remember === "checked" ? () => {setRemember("unchecked")} : () => {setRemember("checked")} }
                    color="#1E3ABA"
                    uncheckedColor="#ccc"
                  />
                  <Text style={styleUnisoHelp.textRemember}>Lembrar-me</Text>
                </View>
                <View style={styleUnisoHelp.questions}>
                  <Pressable>
                  <Text style={styleUnisoHelp.textQuestions}>Dúvidas?</Text>
                </Pressable>
                </View>
              </View>
              <View style={styleUnisoHelp.button}>
                <Pressable 
                  style={styleUnisoHelp.buttonCard} 
                  onPress={() => {handleSignIn()}}         
                >
                  <Text style={styleUnisoHelp.textButtonCard}>Entrar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
    </KeyboardAvoidingView>
  );
}

//exportando função principal
export default LoginScreen;

