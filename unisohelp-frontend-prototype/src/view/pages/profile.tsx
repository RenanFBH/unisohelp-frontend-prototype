//importando elementos essenciais
import { View, ScrollView, Text, Pressable, TextInput, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';

//importando estilo
import global from '../components/global';
import StudentViewModel from '../../viewmodel/studentViewModel';
import profile from '../components/profile-layout';


//definindo o tipo da navegação para a tela calendars
type NavigationProp = StackNavigationProp<RootStackParamList, "profile">

//função principal
const ProfileScreen =()=> {

    //tipando o hook useNavigation com o tipo NavigationProp
    const navigation = useNavigation<NavigationProp>();

    const studentViewModel = new StudentViewModel;

    const data = studentViewModel.getById(Number(localStorage.getItem("id")));

    //visual da página calendars
    return(
        <ScrollView style={global.background}>
            <View style={global.header}>
                <View style={global.titleAndSubtitleView}>
                    <View style={global.button}>
                        <Pressable onPress={() => {navigation.pop()}}>
                            <FontAwesomeIcon icon={faAngleLeft} size={30} style={global.iconTheme}/>
                        </Pressable>
                    </View>
                    <Text style={global.title}>Perfil</Text>
                </View>
            </View>
            <View style={global.content}>
                <View>
                    <Image style={profile.photo} source={require("../../../assets/img/profile/default.png")} />
                </View>
                <Pressable style={profile.button}>
                    <View style={profile.icon}>
                        <FontAwesomeIcon icon={faPenToSquare} size={30} style={global.iconTheme}/>
                    </View>
                    <Text style={profile.text}>Editar</Text>
                </Pressable>
                <View style={profile.data}>
                    <Text style={global.text}>Nome: {data?.name}</Text>
                    <View style={profile.separator}></View>
                    <Text style={global.text}>RA: {data?.ra}</Text>
                    <View style={profile.separator}></View>
                    <Text style={global.text}>E-mail: {data?.email}</Text>
                </View>
            </View>
        </ScrollView>
    );
    
};

//exportando função principal
export default ProfileScreen;