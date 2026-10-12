//importando elementos essenciais
import EmployeeRepository from "../data/repository/employeeRepository";
import PositionRepository from "../data/repository/positionRepository";
import CourseRepository from "../data/repository/courseRepository";
import PositionModel from "../model/positionModel";
import CourseModel from "../model/courseModel";

//classe principal
class EmployeeModelView {

    //função que retorna todos os funcionários
    getAll() {
        return EmployeeRepository
    };

    //função que retorna o funcionário por id
    getById(id: number) {
        for (const employee in EmployeeRepository) {
            if (EmployeeRepository[employee].id === id) {
                return EmployeeRepository[employee];
            };
        };
        return null;
    };

    //função que retorna o funcionário por nome
    getByName(name: string) {
        const listEmployee = [];
        for (const course in EmployeeRepository) {
            if (EmployeeRepository[course].name === name) {
                listEmployee.push(course);
            };
        };
        return listEmployee;
    };

    //função que retorna o funcionário por cargo
    getByPosition(positionId: number) {
        for (const p in PositionRepository) {
            if (PositionRepository[p].id === positionId) {
                return PositionRepository[p];
            }
        }
        return null;
    };

    //função que retorna o funcionário por curso
    getByCourses(courseId: number) {
        const courseRepository = CourseRepository;
        for (const employee in EmployeeRepository) {

            EmployeeRepository[employee].course;
            console.log(EmployeeRepository[employee].course);

    
            
        }
        console.log(courseRepository);
        return null;
    };

};

//exportando classe principal
export default EmployeeModelView;