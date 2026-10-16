//importando elementos essenciais
import { ScrollView,  View, Text, Image, Pressable, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightToBracket, faPhoneVolume, faUsers, faCalendar, faGear, faMap  } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';
import { Platform } from 'react-native';

//importando estilo
import global from '../components/global';
import index from '../components/index-layout';

//definindo o tipo da navegação para a tela index
type NavigationProp = StackNavigationProp<RootStackParamList, "index">

//função principal
const IndexScreen = () => {

  //tipando o hook useNavigation com o tipo NavigationProp
  const navigation = useNavigation<NavigationProp>();

  //Criando userName e userRa e verificando se o dispositivo for web atribui os valores do localStorage, se for outros, userName é definido como Teste e userRa como 100001
  let userName: string = "Teste";
  let userRa: number = 100001;
  if (Platform.OS === "web") {

    const storedName = localStorage.getItem("name");
    const storedRa = localStorage.getItem("ra") ;

    if (storedName !== null && storedRa !== null) {
      userName = storedName;
      userRa = Number(storedRa);
    }

  } 

  //funções dos botões do index
  const btnGuide =()=> {
    navigation.navigate("guide");
  };
  const btnContact =()=> {
    navigation.navigate("contact");
  };
  const btnFaculty =()=> {
    navigation.navigate("employee");
  };
  const btnCalendars =()=> {
    navigation.navigate("calendar");
  };
  const btnMap =(url: string)=> {
    Linking.openURL(url);
  }
  const btnSettings =()=> {
    navigation.navigate("setting");
  };
  const btnProfile =()=> {
    navigation.navigate("profile");
  };

  //visual da página index
  return(
    <ScrollView style={global.background}>
      <View style={global.header}>
        <Image style={global.iconHeader} source={require('../../../assets/img/unisoIcon.png')} />
        <View style={index.titleAndSubtitleView}>
          <Text style={index.title}>Bem vindo(a) {userName}!</Text>
          <Text style={index.subtitle}>RA {userRa}</Text>
        </View>
        <Pressable onPress={() => {btnProfile()}}>
          <Image style={index.photo} source={require('../../../assets/img/profile/default.png')} />
        </Pressable>
      </View>
      <View style={global.content}>
        <View style={global.group}>
          <Pressable style={index.button} onPress={() => {btnGuide()}}>
            <FontAwesomeIcon icon={faRightToBracket} size={30} style={global.icon} />
            <Text style={global.text}>Guia do calouro</Text>
          </Pressable>
        </View>
        <View style={global.group}>
          <Pressable style={index.button} onPress={() => {btnContact()}}>
            <FontAwesomeIcon icon={faPhoneVolume} size={30} style={global.icon} />
            <Text style={global.text}>Contatos</Text>
          </Pressable>
        </View>
        <View style={global.group}>
          <Pressable style={index.button} onPress={() => {btnFaculty()}}>
            <FontAwesomeIcon icon={faUsers} size={30} style={global.icon} />
            <Text style={global.text}>Corpo Docente</Text>
          </Pressable>
        </View>
        <View style={global.group}>
          <Pressable style={index.button} onPress={() => {btnCalendars()}}>
            <FontAwesomeIcon icon={faCalendar} size={30} style={global.icon} />
            <Text style={global.text}>Calendários</Text>
          </Pressable>
        </View>
        <View style={global.group}>
          <Pressable style={index.button} onPress={() => {btnMap("https://unisomap.ntiuniso.com.br/index.html")}}>
            <FontAwesomeIcon icon={faMap} size={30} style={global.icon} />
            <Text style={global.text}>Mapa do câmpus</Text>
          </Pressable>
        </View>
        <View style={global.group}>
          <Pressable style={index.button} onPress={() => {btnSettings()}}>
            <FontAwesomeIcon icon={faGear} size={30} style={global.icon} />
            <Text style={global.text}>Configurações</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
  
};

//exportando função principal
export default IndexScreen;