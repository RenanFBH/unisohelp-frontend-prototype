//importando elementos essenciais
import { View, ScrollView, Text, Pressable, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';

//importando estilo
import global from '../components/global';
import calendar from '../components/calendar-layout';

//definindo o tipo da navegação para a tela calendars
type NavigationProp = StackNavigationProp<RootStackParamList, "calendar">

//função para abrir links
const openURL =(url: string)=> {
    Linking.openURL(url);
}

//função principal
const CalendarScreen =()=> {

    //tipando o hook useNavigation com o tipo NavigationProp
    const navigation = useNavigation<NavigationProp>();

    //visual da página calendars
    return(
        <ScrollView style={global.background}>
            <View style={global.header}>
                <View style={global.titleAndSubtitleView}>
                    <View style={global.button}>
                        <Pressable onPress={() => {navigation.pop()}}>
                            <FontAwesomeIcon icon={faAngleLeft} size={30} style={{color: "#1e3aba",}}/>
                        </Pressable>
                    </View>
                    <Text style={global.title}>Calendários</Text>
                </View>
            </View>
            <View style={global.content}>
                <View style={global.group}>
                    <Pressable style={calendar.button} onPress={() => {openURL('https://sistema.uniso.br/barcode/calendario-academico-graduacao.pdf')}}>
                        <Text style={global.text}>Calendário Presencial</Text>
                    </Pressable>
                </View>
                <View style={global.group}>
                    <Pressable style={calendar.button} onPress={() => {openURL('https://sistema.uniso.br/barcode/calendario-academico-graduacao-ead.pdf')}}>
                        <Text style={global.text}>Calendário EAD</Text>
                    </Pressable>
                </View>
                <View style={global.group}>
                    <Pressable style={calendar.button} onPress={() => {openURL('https://sistema.uniso.br/barcode/calendario-academico-pos-graduacao-stricto-sensu-2026.pdf')}}>
                        <Text style={global.text}>Calendário Stricto Sensu</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
    
};

//exportando função principal
export default CalendarScreen;