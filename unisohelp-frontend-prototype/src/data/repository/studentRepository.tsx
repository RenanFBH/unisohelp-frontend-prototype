//importando elementos essenciais
import StudentModel from "../../model/studentModel";
import CourseViewModel from "../../viewmodel/courseViewModel";

//instanciando objeto curso
const courseModel = new CourseViewModel();

//dicionário para simular estudantes carregados do banco de dados
const studentRepository: Record<number, StudentModel> = {
  1: {id: 1, ra: 19112026, password: "senha", name: "Renan", course: [courseModel.getById(1)!], photo: "foto.png"},
  2: {id: 2, ra: 10000000, password: "senha", name: "Aline", course: [courseModel.getById(2)!], photo: "foto.png"}
};

//exportando repositório
export default studentRepository;