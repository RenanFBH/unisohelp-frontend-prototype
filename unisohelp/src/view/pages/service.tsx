//importando elementos essenciais
import { View, ScrollView, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';

//importando estilo
import styleUnisoHelp from '../components/style';

//definindo o tipo da navegação para a tela service
type NavigationProp = StackNavigationProp<RootStackParamList, "service">

//função principal
const ServiceScreen =()=> {

    //tipando o hook useNavigation com o tipo NavigationProp
    const navigation = useNavigation<NavigationProp>();

    //lista de componentes 'pressable' de setores
    const sectors = [];

    //laço de repetição para adicionar cada setor a um componente 'pressable'
    for(let x = 0; x < 1; x++) {
        sectors.push(
            <Pressable style={styleUnisoHelp.dropdownService}>
                <Text>Teste</Text>
            </Pressable>
        )
    }

    //visual da página service
    return(
        <ScrollView style={styleUnisoHelp.bg}>
            <View style={styleUnisoHelp.indexHeader}>
                <View style={styleUnisoHelp.titleAndSubtitleViewPages}>
                    <View style={styleUnisoHelp.backButton}>
                        <Pressable onPress={() => {navigation.pop()}}>
                            <FontAwesomeIcon icon={faAngleLeft} size={30} style={{color: "#1e3aba",}}/>
                        </Pressable>
                    </View>
                    <Text style={styleUnisoHelp.welcomeHeaderPages}>Atendimento</Text>
                </View>
            </View>
            <View style={styleUnisoHelp.content}>
                <View style={styleUnisoHelp.dropdownGroupService}>    
                    {sectors}
                </View>
            </View>
        </ScrollView>
    )
};

//exportando função principal
export default ServiceScreen;