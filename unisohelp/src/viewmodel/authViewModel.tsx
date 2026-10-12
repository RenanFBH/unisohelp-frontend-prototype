//importando elementos essenciais
import { Platform } from 'react-native';

//importando o modelo do aluno
import StudentModel from '../model/studentModel';

//classe principal
class Authentication {

    //função de validar login
    Login =(data: StudentModel)=> {

        //lógica para verificar login
        if(data.ra !== 19112026 && data.password !== "senha") {
            return false;
        }

        //armazenando dados de login no localStorage
        if (Platform.OS === "web") {
            if(data.remember === "checked") {
                localStorage.setItem("login", "isLoggedIn");
            }
            localStorage.setItem("ra", data.ra.toString())
            localStorage.setItem("password", data.password)
            localStorage.setItem("name", data.name)
        }

        return true;
        
    };

    //função de validar logout
    Logout =()=> {
        if (Platform.OS === "web") {
            localStorage.clear();
        }
    };

};

//exportando classe principal
export default Authentication;