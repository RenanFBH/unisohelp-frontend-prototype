//importando elementos essenciais
import { Platform } from 'react-native';
import StudentViewModel from './studentViewModel';
import StudentModel from '../model/studentModel';

//classe principal
class Authentication {

    //função de validar login
    Login =(ra: number, password: string, remember: string)=> {

        //instanciando objeto estudante
        const studentViewModel = new StudentViewModel();

        //lógica para verificar login
        for (const student in studentViewModel.getAll()) {
            const currentStudent = studentViewModel.getById(Number(student));

            if (currentStudent?.ra === ra && currentStudent?.password === password) {
                //armazenando dados de login no localStorage
                if (Platform.OS === "web") {
                    if(remember === "checked") {
                        localStorage.setItem("login", "isLoggedIn");
                    }
                    localStorage.setItem("id", currentStudent.id.toString());
                    localStorage.setItem("ra", ra.toString());
                    localStorage.setItem("password", password);
                    localStorage.setItem("name", currentStudent.name);
                    localStorage.setItem("photo", currentStudent.photo);
                    localStorage.setItem("email", currentStudent.email);
                }
                return true;
            } 
        }
        return false;
        
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