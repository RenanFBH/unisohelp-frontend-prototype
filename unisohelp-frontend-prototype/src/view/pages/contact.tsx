//importando elementos essenciais
import { View, ScrollView, Text, Pressable, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';
import ContactViewModel from '../../viewmodel/contactViewModel';
import Functions from '../../services/functions';

//importando estilo
import global from '../components/global';
import contact from '../components/contact-layout';

//definindo o tipo da navegação para a tela service
type NavigationProp = StackNavigationProp<RootStackParamList, "contact">

//função principal
const ContactScreen =()=> {

    //tipando o hook useNavigation com o tipo NavigationProp
    const navigation = useNavigation<NavigationProp>();

    //criando o objeto setores
    const contactManager = new ContactViewModel();

    //criando o objeto functions
    const functions = new Functions();

    //dicionário de setores importado do sectorsManager
    const contacts = contactManager.getAll();

    //lista de componentes 'pressable' de setores
    const listComponentContacts = [];
  
    //laço de repetição para adicionar cada setor a um componente 'pressable'
    for(let c in contacts) {
        const currentContact = contacts[c];

        listComponentContacts.push(
            <Pressable style={contact.sector} onPress={() => {openURL("localhost/")}}>
                <Text style={contact.name}>{currentContact.name}</Text>
                <Text style={contact.phone}>Telefone: {functions.formatPhone(currentContact.phone)}</Text>              
            </Pressable>     
        );
    };

    const openURL =(url: string)=> {
        Linking.openURL(url);
    }

    //visual da página service
    return(
        <ScrollView style={global.background}>
            <View style={global.header}>
                <View style={global.titleAndSubtitleView}>
                    <View style={global.button}>
                        <Pressable onPress={() => {navigation.pop()}}>
                            <FontAwesomeIcon icon={faAngleLeft} size={30} style={{color: "#1e3aba",}}/>
                        </Pressable>
                    </View>
                    <Text style={global.title}>Atendimento</Text>
                </View>
            </View>
            <View style={global.content}>
                <View style={{}}>    
                    {listComponentContacts}
                </View>
            </View>
        </ScrollView>
    )
};

//exportando função principal
export default ContactScreen;