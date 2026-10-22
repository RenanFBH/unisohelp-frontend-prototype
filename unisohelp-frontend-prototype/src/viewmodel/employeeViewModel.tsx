//importando elementos essenciais
import employeeRepository from "../data/repository/employeeRepository";
import EmployeeModel from "../model/employeeModel";
import Functions from "../services/functions";

//classe principal
class EmployeeViewModel {

    //função que retorna todos os funcionários
    getAll() {
        return employeeRepository;
    };

    //função que retorna o funcionário por id
    getById(id: number) {
        for (const employee in employeeRepository) {
            if (employeeRepository[employee].id === id) {
                return employeeRepository[employee];
            }
        }
        return null;
    };

    //função que retorna o funcionário por nome
    getByName(name: string) {
        const listEmployee: Record<number, EmployeeModel> = {};
        const functions = new Functions();
        for (const employee in employeeRepository) {
            if (functions.formatEmployeeName(employeeRepository[employee].name) == name.toLowerCase()) {
                listEmployee[employee] = employeeRepository[employee];
            }
        }
        return listEmployee;
    };

};

//exportando classe principal
export default EmployeeViewModel;