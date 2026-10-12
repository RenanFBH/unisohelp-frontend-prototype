//importando o modelo do aluno
import AlunoModel from '../../model/alunoModel';

//função principal
const LoginViewModel =(data: AlunoModel)=> {

    //lógica para verificar login
    if(data.ra !== 19112026 && data.password !== "senha") {
        return false;
    }

    //armazenando dados de login no localStorage
    if(data.remember === "checked") {
        localStorage.setItem("login", "isLoggedIn");
    }
    localStorage.setItem("ra", data.ra.toString())
    localStorage.setItem("password", data.password)
    localStorage.setItem("name", data.name)

    return true;
    
}

//exportando função principal
export default LoginViewModel;