//importando elementos essenciais
import StudentModel from "../../model/studentModel";
import CourseViewModel from "../../viewmodel/courseViewModel";

//instanciando objeto curso
const courseModel = new CourseViewModel();

//dicionário para simular estudantes carregados do banco de dados
const studentRepository: Record<number, StudentModel> = {
  1: {id: 1, ra: 19112026, password: "senha", name: "Renan", email: "renan@gmail.com", course: [courseModel.getById(1)!], photo: "foto1.png"},
  2: {id: 2, ra: 10000000, password: "senha", name: "Aline", email: "aline@gmail.com", course: [courseModel.getById(2)!], photo: "foto2.png"},
  3: {id: 3, ra: 10000001, password: "senha", name: "João", email: "joao@gmail.com", course: [courseModel.getById(3)!], photo: "foto3.png"},
  4: {id: 4, ra: 10000002, password: "senha", name: "Guilherme", email: "guilherme@gmail.com", course: [courseModel.getById(4)!], photo: "foto4.png"}
};

//exportando repositório
export default studentRepository;