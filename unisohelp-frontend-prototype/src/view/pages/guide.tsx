//importando elementos essenciais
import { View, ScrollView, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';

//importando estilo
import global from '../components/global';
import guide from '../components/guide-layout';

//definindo o tipo da navegação para a tela guide
type NavigationProp = StackNavigationProp<RootStackParamList, "guide">

//função principal
const GuideScreen =()=> {

    //tipando o hook useNavigation com o tipo NavigationProp
    const navigation = useNavigation<NavigationProp>();

    //visual da página guide
    return(
        <ScrollView style={global.background}>
            <View style={global.header}>
                <View style={global.titleAndSubtitleView}>
                    <View style={global.button}>
                        <Pressable onPress={() => {navigation.pop()}}>
                            <FontAwesomeIcon icon={faAngleLeft} size={30} style={{color: "#1e3aba",}}/>
                        </Pressable>
                    </View>
                    <Text style={global.title}>Guia do aluno</Text>
                </View>
            </View>
            <View style={global.content}>
                {/*------------------------- botões -------------------------*/}
                <View style={global.group}>
                    <Pressable style={guide.button}>
                        <Text style={global.text}>App da UNISO</Text>
                    </Pressable>
                </View>
                <View style={global.group}>
                    <Pressable style={guide.button}>
                        <Text style={global.text}>Moodle</Text>
                    </Pressable>
                </View>
                <View style={global.group}>
                    <Pressable style={guide.button}>
                        <Text style={global.text}>Wi-Fi do aluno</Text>
                    </Pressable>
                </View>
                <View style={global.group}>
                    <Pressable style={guide.button}>
                        <Text style={global.text}>Laboratórios de informática</Text>
                    </Pressable>
                </View>
                <View style={global.group}>
                    <Pressable style={guide.button}>
                        <Text style={global.text}>Biblioteca A</Text>
                    </Pressable>
                </View>
                <View style={global.group}>
                    <Pressable style={guide.button}>
                        <Text style={global.text}>Biblioteca Virtual</Text>
                    </Pressable>
                </View>
                <View style={global.group}>
                    <Pressable style={guide.button}>
                        <Text style={global.text}>Normalização de Trabalhos Acadêmicos</Text>
                    </Pressable>
                </View>
                <View style={global.group}>
                    <Pressable style={guide.button}>
                        <Text style={global.text}>Pacote Office Online</Text>
                    </Pressable>
                </View>
                <View style={global.group}>
                    <Pressable style={guide.button}>
                        <Text style={global.text}>Manual do Aluno</Text>
                    </Pressable>
                </View>
                <View style={global.group}>
                    <Pressable style={guide.button}>
                        <Text style={global.text}>Estágio</Text>
                    </Pressable>
                </View>
                <View style={global.group}>
                    <Pressable style={guide.button}>
                        <Text style={global.text}>Atividades complementares</Text>
                    </Pressable>
                </View>
                {/*------------------------- modais -------------------------*/}

            </View>
        </ScrollView>
    );
    
};

//exportando função principal
export default GuideScreen;