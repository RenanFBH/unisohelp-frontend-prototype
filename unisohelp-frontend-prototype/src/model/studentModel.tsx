//importando elementos essenciais
import CourseModel from "./courseModel";

//modelo do aluno
interface StudentModel {
    id: number,
    ra: number,
    password: string,
    name: string,
    email: string,
    course: CourseModel[],
    photo: string
};

//exportando modelo
export default StudentModel;