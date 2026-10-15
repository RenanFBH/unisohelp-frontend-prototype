//importando elementos essenciais
import { View, ScrollView, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faAngleRight, faUser, faWheelchairAlt, faRightFromBracket  } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';
import Authentication from '../../viewmodel/authViewModel';

//importando estilo
import global from '../components/global';
import setting from '../components/setting-layout';

//definindo o tipo da navegação para a tela settings
type NavigationProp = StackNavigationProp<RootStackParamList, "setting">

//função principal
const SettingsScreen =()=> {

    //tipando o hook useNavigation com o tipo NavigationProp
    const navigation = useNavigation<NavigationProp>();

    //funções dos botões da página configurações
    const btnProfile =()=> {
        navigation.navigate('profile')
    };
    const btnAccessibility =()=> {
        navigation.navigate('accessibility')
    };
    const btnExit =()=> {
        const auth = new Authentication();
        auth.Logout();
        navigation.navigate('login');
    };

    //visual da página configurações
    return(
        <ScrollView style={global.background}>
            <View style={global.header}>
                <View style={global.titleAndSubtitleView}>
                    <View style={global.button}>
                        <Pressable onPress={() => {navigation.pop()}}>
                            <FontAwesomeIcon icon={faAngleLeft} size={30} style={{color: "#1e3aba",}}/>
                        </Pressable>
                    </View>
                    <Text style={global.title}>Configurações</Text>
                </View>
            </View>
            <View style={global.content}>
                <View style={global.group}>
                    <Pressable style={setting.button} onPress={() => {btnProfile()}}>
                        <FontAwesomeIcon icon={faUser} size={30} style={global.icon} />
                        <Text style={global.text}>Perfil</Text>
                        <FontAwesomeIcon icon={faAngleRight} size={30} style={setting.icon}/>
                    </Pressable>
                </View>
                <View style={global.group}>
                    <Pressable style={setting.button} onPress={() => {btnAccessibility()}}>
                        <FontAwesomeIcon icon={faWheelchairAlt} size={30} style={global.icon} />
                        <Text style={global.text}>Acessibilidade</Text>
                        <FontAwesomeIcon icon={faAngleRight} size={30} style={setting.icon}/>
                    </Pressable>
                </View>
                <View style={global.group}>
                    <Pressable style={setting.button} onPress={() => {btnExit()}}>
                        <FontAwesomeIcon icon={faRightFromBracket} size={30} style={global.icon} />
                        <Text style={global.text}>Sair</Text>
                        <FontAwesomeIcon icon={faAngleRight} size={30} style={setting.icon}/>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
};

//exportando função principal
export default SettingsScreen;