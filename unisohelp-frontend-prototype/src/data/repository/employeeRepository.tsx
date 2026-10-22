//importando elementos essenciais
import EmployeeModel from "../../model/employeeModel";
import PositionViewModel from "../../viewmodel/positionViewModel";
import CourseViewModel from "../../viewmodel/courseViewModel";

//instanciando objeto cargo e objeto curso
const positionViewModel = new PositionViewModel;
const courseViewModel = new CourseViewModel;

//dicionário para simular funcionários carregados do banco de dados
const employeeRepository: Record<number, EmployeeModel> = {
    1: {
        id: 1, 
        name: "Dra. Beatriz Souza", 
        position: [
            positionViewModel.getById(1)!, 
            positionViewModel.getById(2)!
        ], 
        course:[
            courseViewModel.getById(1)!, 
            courseViewModel.getById(2)!, 
            courseViewModel.getById(3)!
        ],
        email: "beatriz@uniso.br",
        photo: "default.png"
    },
    2: {
        id: 2, 
        name: "Ma. Larissa Antunes", 
        position: [
            positionViewModel.getById(1)!, 
        ], 
        course:[
            courseViewModel.getById(4)!,
        ],
        email: "larissa@uniso.br",
        photo: "default.png"
    },
    3: {
        id: 3, 
        name: "Dr. Rodrigo Costa", 
        position: [
            positionViewModel.getById(1)!, 
        ], 
        course:[
            courseViewModel.getById(2)!,
        ],
        email: "rodrigo@uniso.br",
        photo: "default.png"
    },
    4: {
        id: 4, 
        name: "Me. Thiago Mendonça", 
        position: [
            positionViewModel.getById(1)!, 
        ], 
        course:[
            courseViewModel.getById(1)!,
        ],
        email: "thiago@uniso.br",
        photo: "default.png"
    },
    5: {
        id: 5, 
        name: "Dra. Camila Oliveira", 
        position: [
            positionViewModel.getById(3)!, 
        ], 
        course:[],
        email: "camila@uniso.br",
        photo: "default.png"
    },
        6: {
        id: 6,
        name: "Dra. Mariana Ferreira",
        position: [
            positionViewModel.getById(2)!,
        ],
        course: [
            courseViewModel.getById(1)!,
            courseViewModel.getById(3)!,
        ],
        email: "mariana@uniso.br",
        photo: "default.png"
    },
    7: {
        id: 7,
        name: "Me. Gabriel Martins",
        position: [
            positionViewModel.getById(1)!,
        ],
        course: [
            courseViewModel.getById(2)!,
            courseViewModel.getById(4)!,
        ],
        email: "gabriel@uniso.br",
        photo: "default.png"
    },
    8: {
        id: 8,
        name: "Dr. Felipe Almeida",
        position: [
            positionViewModel.getById(3)!,
        ],
        course: [
            courseViewModel.getById(1)!,
        ],
        email: "felipe@uniso.br",
        photo: "default.png"
    },
    9: {
        id: 9,
        name: "Ma. Juliana Ribeiro",
        position: [
            positionViewModel.getById(2)!,
        ],
        course: [
            courseViewModel.getById(3)!,
            courseViewModel.getById(4)!,
        ],
        email: "juliana@uniso.br",
        photo: "default.png"
    },
    10: {
        id: 10,
        name: "Me. Lucas Carvalho",
        position: [
            positionViewModel.getById(1)!,
        ],
        course: [
            courseViewModel.getById(2)!,
        ],
        email: "lucas@uniso.br",
        photo: "default.png"
    },
    11: {
        id: 11,
        name: "Dra. Ana Beatriz Lima",
        position: [
            positionViewModel.getById(3)!,
        ],
        course: [
            courseViewModel.getById(1)!,
            courseViewModel.getById(4)!,
        ],
        email: "anabeatriz@uniso.br",
        photo: "default.png"
    },
    12: {
        id: 12,
        name: "Dr. Rafael Mendes",
        position: [
            positionViewModel.getById(2)!,
        ],
        course: [
            courseViewModel.getById(2)!,
            courseViewModel.getById(3)!,
        ],
        email: "rafael@uniso.br",
        photo: "default.png"
    },
    13: {
        id: 13,
        name: "Ma. Isabela Fernandes",
        position: [
            positionViewModel.getById(1)!,
        ],
        course: [
            courseViewModel.getById(4)!,
        ],
        email: "isabela@uniso.br",
        photo: "default.png"
    },
    14: {
        id: 14,
        name: "Me. Pedro Henrique Rocha",
        position: [
            positionViewModel.getById(3)!,
        ],
        course: [
            courseViewModel.getById(1)!,
            courseViewModel.getById(2)!,
        ],
        email: "pedro@uniso.br",
        photo: "default.png"
    },
    15: {
        id: 15,
        name: "Dra. Carolina Barros",
        position: [
            positionViewModel.getById(2)!,
        ],
        course: [],
        email: "carolina@uniso.br",
        photo: "default.png"
    },
};

//exportando repositório
export default employeeRepository;