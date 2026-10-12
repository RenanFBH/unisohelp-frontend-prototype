//importando elementos essenciais
import EmployeeModel from "../../model/employeeModel";
import PositionViewModel from "../../viewmodel/positionViewModel";
import CourseViewModel from "../../viewmodel/courseViewModel";

//instanciando objeto cargo e objeto curso
const positionViewModel = new PositionViewModel;
const courseViewModel = new CourseViewModel;

//dicionário para simular funcionários carregados do banco de dados
const EmployeeRepository: Record<number, EmployeeModel> = {
    1: {
        id: 1, 
        name: "Beatriz Souza", 
        position: [
            positionViewModel.getById(1)!, 
            positionViewModel.getById(2)!
        ], 
        course:[
            courseViewModel.getById(1)!, 
            courseViewModel.getById(2)!, 
            courseViewModel.getById(3)!
        ]
    },
    2: {
        id: 2, 
        name: "Larissa Antunes", 
        position: [
            positionViewModel.getById(1)!, 
        ], 
        course:[
            courseViewModel.getById(4)!,
        ]
    },
    3: {
        id: 3, 
        name: "Rodrigo Costa", 
        position: [
            positionViewModel.getById(1)!, 
        ], 
        course:[
            courseViewModel.getById(2)!,
        ]
    },
    4: {
        id: 4, 
        name: "Thiago Mendonça", 
        position: [
            positionViewModel.getById(1)!, 
        ], 
        course:[
            courseViewModel.getById(1)!,
        ]
    },
    5: {
        id: 5, 
        name: "Camila Oliveira", 
        position: [
            positionViewModel.getById(3)!, 
        ], 
        course:[]
    },
};

//exportando repositório
export default EmployeeRepository;