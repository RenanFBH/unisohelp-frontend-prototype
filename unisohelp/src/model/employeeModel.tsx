//importando elementos essenciais
import PositionModel from "./positionModel";
import CourseModel from "./courseModel";

//modelo do funcionário
interface EmployeeModel {
    id: number,
    name: string,
    position: PositionModel[],
    course: CourseModel[] | null
};

//exportando modelo
export default EmployeeModel;