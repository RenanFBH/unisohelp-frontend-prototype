//importando elementos essenciais
import { View, ScrollView, Text, Pressable, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';
import { useState, useEffect } from 'react';
import { Switch } from 'react-native-paper';

//importando tema
import theme from '../components/theme';

//importando estilos
import global from '../components/global';
import accessibility from '../components/accessibility-layout';

//definindo o tipo da navegação para a tela accessibility
type NavigationProp = StackNavigationProp<RootStackParamList, "accessibility">;



//função principal
const AccessibilityScreen = () => {

    //estados das opções de acessibilidade
    const [btnHighContrast, btnHighContrastSet] = useState(() => {
        return localStorage.getItem("theme") === "contrast";
    });
    const [btnDarkMode, btnDarkModeSet] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    //função para alterar tema
    useEffect(() => {
        const changeTheme =()=> {
            if (!btnHighContrast && !btnDarkMode) {
                localStorage.setItem("theme", "main");
            } else if(!btnHighContrast && btnDarkMode) {
                localStorage.setItem("theme", "dark");
            } else if(btnHighContrast && !btnDarkMode) {
                localStorage.setItem("theme", "contrast");
            }
        };
        changeTheme();
    }, [btnHighContrast, btnDarkMode]);

    //tipando o hook useNavigation com o tipo NavigationProp
    const navigation = useNavigation<NavigationProp>();

    //visual da página accessibility
    return (
        <ScrollView style={global.background}>
            <View style={global.header}>
                <View style={global.button}>
                    <Pressable style={{}} onPress={() => { navigation.pop() }}>
                        <FontAwesomeIcon icon={faAngleLeft} size={30} style={global.iconTheme} />
                    </Pressable>
                </View>
                <Text style={global.title}>Acessibilidade</Text>
            </View>
            <View style={global.content}>
                <View style={global.group}>
                    <View style={accessibility.button}>
                        <Switch value={btnHighContrast} style={accessibility.switch}  color={theme.colors.quinary}  onValueChange={() => (btnHighContrastSet(!btnHighContrast), window.location.reload())}/>
                        <Text style={global.text}>Alto contraste</Text>
                    </View>
                </View>
                <View style={global.group}>
                    <View style={accessibility.button}>
                        <Switch value={btnDarkMode} style={accessibility.switch} color={theme.colors.quinary} onValueChange={() => (btnDarkModeSet(!btnDarkMode), window.location.reload())}/>
                        <Text style={global.text}>Tema escuro</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

//exportando função principal
export default AccessibilityScreen;
