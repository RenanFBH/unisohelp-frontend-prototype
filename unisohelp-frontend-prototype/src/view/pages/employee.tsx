//importando elementos essenciais
import { View, ScrollView, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';
import { TextInput } from 'react-native-gesture-handler';
import EmployeeViewModel from '../../viewmodel/employeeViewModel';
import { useState } from 'react';

//importando estilo
import global from '../components/global';
import employee from '../components/employee-layout';

//definindo o tipo da navegação para a tela employees
type NavigationProp = StackNavigationProp<RootStackParamList, "employee">

//criando o objeto setores
const employeeManager = new EmployeeViewModel();

//função principal
const EmployeeScreen =()=> {

    //tipando o hook useNavigation com o tipo NavigationProp
    const navigation = useNavigation<NavigationProp>();

    //variável de pesquisa
    const [search, setSearch] = useState("");
    const [listComponentEmployees, setListComponentEmployees] = useState(() => { return searchEmployees(null) });
    
    //função para pesquisar funcionários
    const searchEmployees =(name: string | null)=> {

        //dicionário de funcionários importado do employeesManager
        const employees = employeeManager.getAll();

        //lista de componentes 'view' de funcionários
        const temporaryList = [];

        if (name == null) {
            for(let employee in employees) {
                const currentEmployee = employees[employee];

                temporaryList.push(
                    <View>
                        <Text>{currentEmployee.name}</Text>
                    </View>
                )
            }
        } else {
            for(let employee in employees) {
                const currentEmployee = employees[employee];

                temporaryList.push(
                    <View>
                        <Text>{currentEmployee.name}</Text>
                    </View>
                )
            }
        }
        setListComponentEmployees(temporaryList);
        return temporaryList;

    };

    //visual da página employees
    return(
        <ScrollView style={global.background}>
            <View style={global.header}>
                <View style={global.titleAndSubtitleView}>
                    <View style={global.button}>
                        <Pressable onPress={() => {navigation.pop()}}>
                            <FontAwesomeIcon icon={faAngleLeft} size={30} style={{color: "#1e3aba",}}/>
                        </Pressable>
                    </View>
                    <Text style={global.title}>Corpo Docente</Text>
                </View>
            </View>
            <View style={global.content}>
                <View style={employee.filter}>
                    <TextInput style={employee.input} placeholder="Pesquisar" onChangeText={(text) => {setSearch(text)}}/>
                    <Pressable style={employee.button} onPress={() => {searchEmployees(search)}}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size={20} style={{color: "#1e3aba",}}/>
                    </Pressable>
                </View>
                <View style={global.group}>
                    {listComponentEmployees}
                </View>
            </View>
        </ScrollView>
    );

};

//exportando função principal
export default EmployeeScreen;