//importando elementos essenciais
import { View, ScrollView, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';
import Sectors from '../../viewmodel/sectorViewModel';

//importando estilo
import styleUnisoHelp from '../components/style';

//definindo o tipo da navegação para a tela service
type NavigationProp = StackNavigationProp<RootStackParamList, "service">

//função principal
const ServiceScreen =()=> {

    //tipando o hook useNavigation com o tipo NavigationProp
    const navigation = useNavigation<NavigationProp>();

    //criando o objeto setores
    const sectorsManager = new Sectors;

    //dicionário de setores importado do sectorsManager
    const sectors = sectorsManager.getAll();

    //lista de componentes 'pressable' de setores
    const listComponentSectors = [];

    //laço de repetição para adicionar cada setor a um componente 'pressable'
    for(let sectorName in sectors) {
        listComponentSectors.push(
            <Pressable style={styleUnisoHelp.dropdownService} key={sectorName} onPress={()=> { openDropdown() }}>
                <View>
                    <Text style={styleUnisoHelp.dropdownText}>{sectorName}</Text>
                    <FontAwesomeIcon icon={faChevronDown} size={20} style={styleUnisoHelp.arrowButtonSector}/>
                </View>
                <Text>{sectorName}</Text>
            </Pressable>
        )
    }

    //função para abrir dropdown dos setores
    const openDropdown =()=> {
       
        let sectorButton;


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
                    {listComponentSectors}
                </View>
            </View>
        </ScrollView>
    )
};

//exportando função principal
export default ServiceScreen;