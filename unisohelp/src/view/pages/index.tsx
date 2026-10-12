//importando elementos essenciais
import { ScrollView,  View, Text, Image, Pressable, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightToBracket, faPhoneVolume, faUsers, faCalendar, faGear, faMap  } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';

//importando estilo
import styleUnisoHelp from '../components/style';

//definindo o tipo da navegação para a tela index
type NavigationProp = StackNavigationProp<RootStackParamList, "index">

//função principal
const IndexScreen = () => {

  //tipando o hook useNavigation com o tipo NavigationProp
  const navigation = useNavigation<NavigationProp>();

  //funções dos botões do index
  const btnGuide =()=> {
    navigation.navigate("guide");
  };
  const btnService =()=> {
    navigation.navigate("service");
  };
  const btnFaculty =()=> {
    navigation.navigate("employees");
  };
  const btnCalendars =()=> {
    navigation.navigate("calendars");
  };
  const btnMap =(url: string)=> {
    Linking.openURL(url);
  }
  const btnSettings =()=> {
    navigation.navigate("settings");
  };
  const btnProfile =()=> {
    navigation.navigate("profile");
  };

  //visual da página index
  return(
    <ScrollView style={styleUnisoHelp.bg}>
      <View style={styleUnisoHelp.indexHeader}>
        <Image style={styleUnisoHelp.icon} source={require('../../../assets/img/unisoIcon.png')} />
        <View style={styleUnisoHelp.titleAndSubtitleView}>
          <Text style={styleUnisoHelp.welcomeHeaderIndex}>Bem vindo(a) {localStorage.getItem("name")}!</Text>
          <Text style={styleUnisoHelp.raHeader}>RA {localStorage.getItem("ra")}</Text>
        </View>
        <Pressable onPress={() => {btnProfile()}}>
          <Image style={styleUnisoHelp.icon} source={require('../../../assets/img/profile/example.png')} />
        </Pressable>
      </View>
      <View style={styleUnisoHelp.content}>
        <View style={styleUnisoHelp.buttonGroup}>
          <Pressable style={styleUnisoHelp.buttonIndex} onPress={() => {btnGuide()}}>
            <FontAwesomeIcon icon={faRightToBracket} size={30} style={styleUnisoHelp.iconButton} />
            <Text style={styleUnisoHelp.textButton}>Guia do calouro</Text>
          </Pressable>
        </View>
        <View style={styleUnisoHelp.buttonGroup}>
          <Pressable style={styleUnisoHelp.buttonIndex} onPress={() => {btnService()}}>
            <FontAwesomeIcon icon={faPhoneVolume} size={30} style={styleUnisoHelp.iconButton} />
            <Text style={styleUnisoHelp.textButton}>Atendimento</Text>
          </Pressable>
        </View>
        <View style={styleUnisoHelp.buttonGroup}>
          <Pressable style={styleUnisoHelp.buttonIndex} onPress={() => {btnFaculty()}}>
            <FontAwesomeIcon icon={faUsers} size={30} style={styleUnisoHelp.iconButton} />
            <Text style={styleUnisoHelp.textButton}>Corpo Docente</Text>
          </Pressable>
        </View>
        <View style={styleUnisoHelp.buttonGroup}>
          <Pressable style={styleUnisoHelp.buttonIndex} onPress={() => {btnCalendars()}}>
            <FontAwesomeIcon icon={faCalendar} size={30} style={styleUnisoHelp.iconButton} />
            <Text style={styleUnisoHelp.textButton}>Calendários</Text>
          </Pressable>
        </View>
        <View style={styleUnisoHelp.buttonGroup}>
          <Pressable style={styleUnisoHelp.buttonIndex} onPress={() => {btnMap("https://unisomap.ntiuniso.com.br/index.html")}}>
            <FontAwesomeIcon icon={faMap} size={30} style={styleUnisoHelp.iconButton} />
            <Text style={styleUnisoHelp.textButton}>Mapa do câmpus</Text>
          </Pressable>
        </View>
        <View style={styleUnisoHelp.buttonGroup}>
          <Pressable style={styleUnisoHelp.buttonIndex} onPress={() => {btnSettings()}}>
            <FontAwesomeIcon icon={faGear} size={30} style={styleUnisoHelp.iconButton} />
            <Text style={styleUnisoHelp.textButton}>Configurações</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
};

//exportando função principal
export default IndexScreen;