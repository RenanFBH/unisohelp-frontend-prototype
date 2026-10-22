//importando elementos essenciais
import { View, ScrollView, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';
import Functions from '../../services/functions';

//importando modais
import {AppDoAluno, UNISOVirtual, WifiDoAluno, LabInformatica, BibliotecaA, Microsoft, AtividadesComplementares, Error} from "./modal";

//importando estilo
import global from '../components/global';
import guide from '../components/guide-layout';

//definindo o tipo da navegação para a tela guide
type NavigationProp = StackNavigationProp<RootStackParamList, "guide">

//função principal
const GuideScreen =()=> {

    //tipando o hook useNavigation com o tipo NavigationProp
    const navigation = useNavigation<NavigationProp>();

    //instanciando functions
    const functions = new Functions();

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
                <Error/>
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
                    <Pressable style={guide.button} onPress={() => {functions.openURL("https://plataforma.bvirtual.com.br/Account/Login")}}>
                        <Text style={global.text}>Biblioteca Virtual</Text>
                    </Pressable>
                </View>
                <View style={global.group}>
                    <Pressable style={guide.button} onPress={() => {functions.openURL("https://editora.uniso.br/editora/catalog/view/54/42/178")}}>
                        <Text style={global.text}>Normalização de Trabalhos Acadêmicos</Text>
                    </Pressable>
                </View>
                <View style={global.group}>
                    <Pressable style={guide.button}>
                        <Text style={global.text}>Microsoft 365</Text>
                    </Pressable>
                </View>
                <View style={global.group}>
                    <Pressable style={guide.button} onPress={() => {functions.openURL("https://uniso.br/arquivos/pdf/manual-do-aluno.pdf")}}>
                        <Text style={global.text}>Manual do Aluno</Text>
                    </Pressable>
                </View>
                <View style={global.group}>
                    <Pressable style={guide.button} onPress={() => {functions.openURL("https://uniso.br/estagio/")}}>
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