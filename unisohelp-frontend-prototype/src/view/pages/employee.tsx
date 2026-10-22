//importando elementos essenciais
import { useState } from 'react';
import { View, ScrollView, Text, Pressable, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';
import { TextInput } from 'react-native-gesture-handler';
import EmployeeViewModel from '../../viewmodel/employeeViewModel';
import PositionViewModel from '../../viewmodel/positionViewModel';
import Functions from '../../services/functions';
import { useEffect } from 'react';

//importando tema
import theme from '../components/theme';

//importando estilo
import global from '../components/global';
import employee from '../components/employee-layout';
import EmployeeModel from '../../model/employeeModel';

//definindo o tipo da navegação para a tela employees
type NavigationProp = StackNavigationProp<RootStackParamList, "employee">

//função principal
const EmployeeScreen =()=> {

    //tipando o hook useNavigation com o tipo NavigationProp
    const navigation = useNavigation<NavigationProp>();

    //criando o objeto funcionários e objeto cargos
    const employeeManager = new EmployeeViewModel();
    const positionManager = new PositionViewModel();

    //variável de funcionários
    const [employeesList, setEmployeesList] = useState<Record<number, EmployeeModel>>({});

    //criando componente para tornar a lista de funcionários dinâmica 
    useEffect(() => { 
        setEmployeesList(employeeManager.getAll()); 
    }, []);

    //função para adicionar cada funcionário a um componente 'view'
    const renderEmployees =(employees: Record<number, EmployeeModel>)=> {
        const listComponentEmployee = [];

        for (let e in employees) {
            const currentEmployee = employees[e];

            let positions = "";
            for (let positionId = 0; positionId < currentEmployee.position.length; positionId++) {
                positions += positionManager.getById(currentEmployee.position[positionId]?.id)?.description + " ";
            }

            const functions = new Functions();
            positions = functions.formatPositions(positions);

            listComponentEmployee.push(
                <View style={employee.employee} key={e}>
                    <Image style={employee.photo} source={require("../../../assets/img/profile/default.png")}/>
                    <View style={employee.data}>
                        <Text style={employee.position}>{positions}</Text>
                        <Text style={employee.name}>{currentEmployee.name}</Text>
                        <Text style={employee.email}>{currentEmployee.email}</Text>    
                        <View style={employee.separator}></View> 
                    </View>
                </View>     
            );
        }
        return listComponentEmployee;
    };

    //variáveis do formulário de pesquisa
    const [search, setSearch] = useState("");

    //função para pesquisar funcionários
    const employeesFound = (search: string) => {
        if (search.trim() === "") {
            setEmployeesList(employeeManager.getAll());
            return;
        } 
        setEmployeesList(employeeManager.getByName(search));
        return;
    };

    //visual da página employees
    return(
        <ScrollView style={global.background}>
            <View style={global.header}>
                <View style={global.titleAndSubtitleView}>
                    <View style={global.button}>
                        <Pressable onPress={() => {navigation.pop()}}>
                            <FontAwesomeIcon icon={faAngleLeft} size={30} style={global.iconTheme}/>
                        </Pressable>
                    </View>
                    <Text style={global.title}>Corpo Docente</Text>
                </View>
            </View>
            <View style={global.content}>
                <View style={employee.filter}>
                    <TextInput style={employee.input} placeholder="Pesquisar por nome completo" placeholderTextColor={theme.colors.secondary} onChangeText={(text) => {setSearch(text)}}/>
                    <Pressable style={employee.button} onPress={() => {employeesFound(search)}}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size={20} style={global.iconTheme2}/>
                    </Pressable>
                </View>
                <View style={global.group}>
                    {renderEmployees(employeesList)}
                </View>
            </View>
        </ScrollView>
    );

};

//exportando função principal
export default EmployeeScreen;