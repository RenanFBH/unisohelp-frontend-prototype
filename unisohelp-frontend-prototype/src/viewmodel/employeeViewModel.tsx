//importando elementos essenciais
import employeeRepository from "../data/repository/employeeRepository";
import positionRepository from "../data/repository/positionRepository";
import courseRepository from "../data/repository/courseRepository";
import PositionModel from "../model/positionModel";
import CourseModel from "../model/courseModel";
import PositionViewModel from "./positionViewModel";

//classe principal
class EmployeeModelView {

    //função que retorna todos os funcionários
    getAll() {
        return employeeRepository
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
        const listEmployee = [];
        for (const course in employeeRepository) {
            if (employeeRepository[course].name === name) {
                listEmployee.push(course);
            }
        }
        return listEmployee;
    };

    //função que retorna o funcionário por cargo
    getByPosition(positionId: number) {
        const listEmployee = [];

        for (const employee in employeeRepository) {
            const currentEmployee = employeeRepository[employee];
            const positionRepository = new PositionViewModel();
            console.log(currentEmployee.position)
            
            for (const position in currentEmployee.position) {
                
                console.log(position);
                    
                
            }
        }
        return null;
    };

    //função que retorna o funcionário por curso
    getByCourses(courseId: number) {
        /*const courseRepository = courseRepository;
        for (const employee in EmployeeRepository) {
            EmployeeRepository[employee].course;
            console.log(EmployeeRepository[employee].course);
        }
        console.log(courseRepository);
        return null;*/
    };

};

//exportando classe principal
export default EmployeeModelView;