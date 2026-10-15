//importando elementos essenciais
import { View, ScrollView, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';
import { useState } from 'react';
import { Switch } from 'react-native-paper';

//importando estilos
import global from '../components/global';
import accessibility from '../components/accessibility-layout';

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
        <ScrollView style={global.background}>
            <View style={global.header}>
                <View style={global.button}>
                    <Pressable style={{}} onPress={() => {navigation.pop()}}>
                        <FontAwesomeIcon icon={faAngleLeft} size={30} style={{color: "#1e3aba",}}/>
                    </Pressable>
                </View>
                <Text style={global.title}>Acessibilidade</Text>
            </View>
            <View style={global.content}>
                <View style={global.group}>
                    <View style={accessibility.button}>
                        <Switch value={btnHighContrast} style={accessibility.switch} color={"#1E3ABA"} onValueChange={() => {btnHighContrast ? btnHighContrastSet(false) : btnHighContrastSet(true)}}/>
                        <Text style={global.text}>Alto contraste</Text>
                    </View>
                </View>
                <View style={global.group}>
                    <View style={accessibility.button}>
                        <Switch value={btnDarkMode} style={accessibility.switch} color={"#1E3ABA"} onValueChange={() => {btnDarkMode ? btnDarkModeSet(false) : btnDarkModeSet(true)}}/>
                        <Text style={global.text}>Tema escuro</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );

};

//exportando função principal
export default AccessibilityScreen;