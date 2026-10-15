//importando elementos essenciais
import { View, ScrollView, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';
import EmployeeModelView from '../../viewmodel/employeeViewModel';

//importando estilo
import global from '../components/global';

//definindo o tipo da navegação para a tela employees
type NavigationProp = StackNavigationProp<RootStackParamList, "employee">

//função principal
const EmployeesScreen =()=> {

    //tipando o hook useNavigation com o tipo NavigationProp
    const navigation = useNavigation<NavigationProp>();

    const employeeModelView = new EmployeeModelView();
    const teste =()=> {
        console.log(employeeModelView.getByPosition(1));
        
    };

    //visual da página employees
    return(
        <ScrollView style={global.background}>
            <View style={global.header}>
                <View style={global.titleAndSubtitleView}>
                    <View style={global.button}>
                        <Pressable onPress={() => {teste()}}>
                            <FontAwesomeIcon icon={faAngleLeft} size={30} style={{color: "#1e3aba",}}/>
                        </Pressable>
                    </View>
                    <Text style={global.title}>Corpo Docente</Text>
                </View>
            </View>
        </ScrollView>
    );

};

//exportando função principal
export default EmployeesScreen;