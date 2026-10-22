//importando elementos essenciais
import { View, ScrollView, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';
import Functions from '../../services/functions';
import { useEffect } from 'react';

//importando modais
import {AppDoAluno, UNISOVirtual, WifiDoAluno, LabInformatica, BibliotecaA, Microsoft, AtividadesComplementares} from "./modal";

//importando estilo
import global from '../components/global';
import guide from '../components/guide-layout';
import { useState } from 'react';

//definindo o tipo da navegação para a tela guide
type NavigationProp = StackNavigationProp<RootStackParamList, "guide">

const GuideScreen = () => {

    //tipando o hook useNavigation com o tipo NavigationProp
    const navigation = useNavigation<NavigationProp>();

    //
    const functions = new Functions();

    //
    const [activeModal, setActiveModal] = useState<number>(0);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={global.background}>
                <View style={global.header}>
                    <View style={global.titleAndSubtitleView}>
                        <View style={global.button}>
                            <Pressable onPress={() => { navigation.pop() }}>
                                <FontAwesomeIcon icon={faAngleLeft} size={30} style={global.iconTheme} />
                            </Pressable>
                        </View>
                        <Text style={global.title}>Guia do aluno</Text>
                    </View>
                </View>
                <View style={global.content}>
                    <View style={global.group}>
                        <Pressable style={guide.button} onPress={() => setActiveModal(1)}>
                            <Text style={guide.text}>App da UNISO</Text>
                        </Pressable>
                    </View>
                    <View style={global.group}>
                        <Pressable style={guide.button} onPress={() => setActiveModal(2)}>
                            <Text style={guide.text}>UNISO Virtual (Moodle)</Text>
                        </Pressable>
                    </View>
                    <View style={global.group}>
                        <Pressable style={guide.button} onPress={() => setActiveModal(3)}>
                            <Text style={guide.text}>Wi-Fi do aluno</Text>
                        </Pressable>
                    </View>
                    <View style={global.group}>
                        <Pressable style={guide.button} onPress={() => setActiveModal(4)}>
                            <Text style={guide.text}>Laboratórios de informática</Text>
                        </Pressable>
                    </View>
                    <View style={global.group}>
                        <Pressable style={guide.button} onPress={() => setActiveModal(5)}>
                            <Text style={guide.text}>Biblioteca A</Text>
                        </Pressable>
                    </View>
                    <View style={global.group}>
                        <Pressable style={guide.button} onPress={() => functions.openURL("https://plataforma.bvirtual.com.br/Account/Login")}>
                            <Text style={guide.text}>Biblioteca Virtual</Text>
                        </Pressable>
                    </View>
                    <View style={global.group}>
                        <Pressable style={guide.button} onPress={() => functions.openURL("https://editora.uniso.br/editora/catalog/view/54/42/178")}>
                            <Text style={guide.text}>Normalização de Trabalhos Acadêmicos</Text>
                        </Pressable>
                    </View>
                    <View style={global.group}>
                        <Pressable style={guide.button} onPress={() => setActiveModal(6)}>
                            <Text style={guide.text}>Microsoft 365</Text>
                        </Pressable>
                    </View>
                    <View style={global.group}>
                        <Pressable style={guide.button} onPress={() => functions.openURL("https://uniso.br/arquivos/pdf/manual-do-aluno.pdf")}>
                            <Text style={guide.text}>Manual do Aluno</Text>
                        </Pressable>
                    </View>
                    <View style={global.group}>
                        <Pressable style={guide.button} onPress={() => functions.openURL("https://uniso.br/estagio/")}>
                            <Text style={guide.text}>Estágio</Text>
                        </Pressable>
                    </View>
                    <View style={global.group}>
                        <Pressable style={guide.button} onPress={() => setActiveModal(7)}>
                            <Text style={guide.text}>Atividades complementares</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
            {activeModal !== 0 && (
                <View style={{position: 'absolute',  zIndex: 999}}>
                    {activeModal === 1 && (
                        <AppDoAluno onClose={() => setActiveModal(0)} />
                    )}
                    {activeModal === 2 && (
                        <UNISOVirtual onClose={() => setActiveModal(0)} />
                    )}
                    {activeModal === 3 && (
                        <WifiDoAluno onClose={() => setActiveModal(0)} />
                    )}
                    {activeModal === 4 && (
                        <LabInformatica onClose={() => setActiveModal(0)} />
                    )}
                    {activeModal === 5 && (
                        <BibliotecaA onClose={() => setActiveModal(0)} />
                    )}
                    {activeModal === 6 && (
                        <Microsoft onClose={() => setActiveModal(0)} />
                    )}
                    {activeModal === 7 && (
                        <AtividadesComplementares onClose={() => setActiveModal(0)} />
                    )}
                </View>
            )}
        </View>
    );
};

//exportando função principal
export default GuideScreen;
