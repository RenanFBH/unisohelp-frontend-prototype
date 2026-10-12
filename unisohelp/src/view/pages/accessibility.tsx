//importando elementos essenciais
import { View, ScrollView, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';
import { useState } from 'react';
import { Switch } from 'react-native-paper';

//importando estilo
import styleUnisoHelp from '../components/style';

//definindo o tipo da navegação para a tela accessibility
type NavigationProp = StackNavigationProp<RootStackParamList, "accessibility">;

//função principal
const AccessibilityScreen =()=> {

    //tipando o hook useNavigation com o tipo NavigationProp
    const navigation = useNavigation<NavigationProp>();

    //estados das opções de acessibilidade
    const [btnHighContrast, btnHighContrastSet] = useState(false);
    const [btnDarkMode, btnDarkModeSet] = useState(false);

    //visual da página accessibility
    return(
        <ScrollView style={styleUnisoHelp.bg}>
            <View style={styleUnisoHelp.indexHeader}>
                <View style={styleUnisoHelp.backButton}>
                    <Pressable style={{}} onPress={() => {navigation.pop()}}>
                        <FontAwesomeIcon icon={faAngleLeft} size={30} style={{color: "#1e3aba",}}/>
                    </Pressable>
                </View>
                <Text style={styleUnisoHelp.welcomeHeaderPages}>Acessibilidade</Text>
            </View>
            <View style={styleUnisoHelp.content}>
                <View style={styleUnisoHelp.buttonGroup}>
                    <View style={styleUnisoHelp.buttonSettingsAndAccessibility}>
                        <Switch value={btnHighContrast} style={styleUnisoHelp.switchAccessibility} color={"#1E3ABA"} onValueChange={() => {btnHighContrast ? btnHighContrastSet(false) : btnHighContrastSet(true)}}/>
                        <Text style={styleUnisoHelp.textButton}>Alto contraste</Text>
                    </View>
                </View>
                <View style={styleUnisoHelp.buttonGroup}>
                    <View style={styleUnisoHelp.buttonSettingsAndAccessibility}>
                        <Switch value={btnDarkMode} style={styleUnisoHelp.switchAccessibility} color={"#1E3ABA"} onValueChange={() => {btnDarkMode ? btnDarkModeSet(false) : btnDarkModeSet(true)}}/>
                        <Text style={styleUnisoHelp.textButton}>Tema escuro</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

//exportando função principal
export default AccessibilityScreen;