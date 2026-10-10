import { View, ScrollView, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faAngleRight, faUser, faWheelchairAlt, faRightFromBracket  } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';
import styleUnisoHelp from '../components/style';

type NavigationProp = StackNavigationProp<RootStackParamList, "settings">

const SettingsScreen =()=> {

    const navigation = useNavigation<NavigationProp>();

    const btnProfile =()=> {
        navigation.navigate('profile')
    };
    const btnAccessibility =()=> {
        navigation.navigate('accessibility')
    };
    const btnExit =()=> {
        navigation.navigate('login');
    };

    return(
        <ScrollView style={styleUnisoHelp.bg}>
            <View style={styleUnisoHelp.indexHeader}>
                <View style={styleUnisoHelp.titleAndSubtitleViewPages}>
                    <View style={styleUnisoHelp.backButton}>
                        <Pressable onPress={() => {navigation.pop()}}>
                            <FontAwesomeIcon icon={faAngleLeft} size={30} style={{color: "#1e3aba",}}/>
                        </Pressable>
                    </View>
                    <Text style={styleUnisoHelp.welcomeHeaderPages}>Configurações</Text>
                </View>
            </View>
            <View style={styleUnisoHelp.content}>
                <View style={styleUnisoHelp.buttonGroup}>
                    <Pressable style={styleUnisoHelp.buttonSettingsAndAccessibility} onPress={() => {btnProfile()}}>
                        <FontAwesomeIcon icon={faUser} size={30} style={styleUnisoHelp.iconButton} />
                        <Text style={styleUnisoHelp.textButton}>Perfil</Text>
                        <FontAwesomeIcon icon={faAngleRight} size={30} style={styleUnisoHelp.arrowButton}/>
                    </Pressable>
                </View>
                <View style={styleUnisoHelp.buttonGroup}>
                    <Pressable style={styleUnisoHelp.buttonSettingsAndAccessibility} onPress={() => {btnAccessibility()}}>
                        <FontAwesomeIcon icon={faWheelchairAlt} size={30} style={styleUnisoHelp.iconButton} />
                        <Text style={styleUnisoHelp.textButton}>Acessibilidade</Text>
                        <FontAwesomeIcon icon={faAngleRight} size={30} style={styleUnisoHelp.arrowButton}/>
                    </Pressable>
                </View>
                <View style={styleUnisoHelp.buttonGroup}>
                    <Pressable style={styleUnisoHelp.buttonSettingsAndAccessibility} onPress={() => {btnExit()}}>
                        <FontAwesomeIcon icon={faRightFromBracket} size={30} style={styleUnisoHelp.iconButton} />
                        <Text style={styleUnisoHelp.textButton}>Sair</Text>
                        <FontAwesomeIcon icon={faAngleRight} size={30} style={styleUnisoHelp.arrowButton}/>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
};

export default SettingsScreen;