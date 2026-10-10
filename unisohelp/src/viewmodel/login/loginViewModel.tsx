import AlunoModel from '../../model/alunoModel';

const LoginViewModel =(data: AlunoModel)=> {

    if(data.ra !== 19112026 && data.password !== "senha") {
        return false;
    }
    if(data.remember === "checked") {
        localStorage.setItem("login", "isLoggedIn");
    }
    localStorage.setItem("ra", data.ra.toString())
    localStorage.setItem("password", data.password)
    return true;


}

export default LoginViewModel;