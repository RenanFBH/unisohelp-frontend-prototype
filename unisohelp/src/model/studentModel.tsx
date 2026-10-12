//importando elementos essenciais
import CourseModel from "./courseModel";

//modelo do aluno
interface StudentModel {
    ra: number,
    password: string,
    remember: string,
    name: string
    course: CourseModel[]
};

//exportando modelo
export default StudentModel;