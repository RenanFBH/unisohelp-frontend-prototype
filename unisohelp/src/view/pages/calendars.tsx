//importando elementos essenciais
import { View, ScrollView, Text, Pressable, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';

//importando estilo
import styleUnisoHelp from '../components/style';

//definindo o tipo da navegação para a tela calendars
type NavigationProp = StackNavigationProp<RootStackParamList, "calendars">

//função para abrir links
const openURL =(url: string)=> {
    Linking.openURL(url);
}

//função principal
const CalendarsScreen =()=> {

    //tipando o hook useNavigation com o tipo NavigationProp
    const navigation = useNavigation<NavigationProp>();

    //visual da página calendars
    return(
        <ScrollView style={styleUnisoHelp.bg}>
            <View style={styleUnisoHelp.indexHeader}>
                <View style={styleUnisoHelp.titleAndSubtitleViewPages}>
                    <View style={styleUnisoHelp.backButton}>
                        <Pressable onPress={() => {navigation.pop()}}>
                            <FontAwesomeIcon icon={faAngleLeft} size={30} style={{color: "#1e3aba",}}/>
                        </Pressable>
                    </View>
                    <Text style={styleUnisoHelp.welcomeHeaderPages}>Calendários</Text>
                </View>
            </View>
            <View style={styleUnisoHelp.content}>
                <View style={styleUnisoHelp.buttonGroup}>
                    <Pressable style={styleUnisoHelp.buttonIndex} onPress={() => {openURL('https://sistema.uniso.br/barcode/calendario-academico-graduacao.pdf')}}>
                        <Text style={styleUnisoHelp.textButton}>Calendário Presencial</Text>
                    </Pressable>
                </View>
                <View style={styleUnisoHelp.buttonGroup}>
                    <Pressable style={styleUnisoHelp.buttonIndex} onPress={() => {openURL('https://sistema.uniso.br/barcode/calendario-academico-graduacao-ead.pdf')}}>
                        <Text style={styleUnisoHelp.textButton}>Calendário EAD</Text>
                    </Pressable>
                </View>
                <View style={styleUnisoHelp.buttonGroup}>
                    <Pressable style={styleUnisoHelp.buttonIndex} onPress={() => {openURL('https://sistema.uniso.br/barcode/calendario-academico-pos-graduacao-stricto-sensu-2026.pdf')}}>
                        <Text style={styleUnisoHelp.textButton}>Calendário Stricto Sensu</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
};

//exportando função principal
export default CalendarsScreen;