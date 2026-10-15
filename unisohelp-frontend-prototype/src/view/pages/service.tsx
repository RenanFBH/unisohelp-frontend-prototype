//importando elementos essenciais
import { View, ScrollView, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';
import Sectors from '../../viewmodel/sectorViewModel';

//importando estilo
import global from '../components/global';
import service from '../components/service-layout';

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
    for(let sector in sectors) {
        const currentSector = sectors[sector];
        listComponentSectors.push(
            <View style={service.sector}>
                <Text style={service.name}>{currentSector.name}</Text>
                <View style={service.separator}></View>  
                <Text style={service.phone}>Telefone: {currentSector.phone}</Text>
                
            </View>     
        );
    };

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
                    {listComponentSectors}
                </View>
            </View>
        </ScrollView>
    )
};

//exportando função principal
export default ServiceScreen;