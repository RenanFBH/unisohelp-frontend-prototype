//importando elementos essenciais
import courseRepository from "../data/repository/courseRepository";

//classe principal
class CourseViewModel {

    //função que retorna todos os cursos
    getAll() {
        return courseRepository;
    };

    //função que retorna o curso por id
    getById(id: number) {
        for (const course in courseRepository) {
            if (courseRepository[course].id === id) {
                return courseRepository[course];
            }
        }
        return null;
    };

    //função que retorna o curso por nome
    getByName(name: string) {
        const listCourse = [];
        for (const course in courseRepository) {
            if (courseRepository[course].name === name) {
                listCourse.push(course);
            }
        }
        return listCourse;
    };

};

//exportando classe principal
export default CourseViewModel;