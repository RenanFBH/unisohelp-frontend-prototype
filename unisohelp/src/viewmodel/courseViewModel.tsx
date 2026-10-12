//importando elementos essenciais
import CourseRepository from "../data/repository/courseRepository";

//classe principal
class CourseViewModel {

    //função que retorna todos os cursos
    getAll() {
        return CourseRepository;
    };

    //função que retorna o curso por id
    getById(id: number) {
        for (const course in CourseRepository) {
            if (CourseRepository[course].id === id) {
                return CourseRepository[course];
            };
        };
        return null;
    };

    //função que retorna o curso por nome
    getByName(name: string) {
        const listCourse = [];
        for (const course in CourseRepository) {
            if (CourseRepository[course].name === name) {
                listCourse.push(course);
            };
        };
        return listCourse;
    };

};

//exportando classe principal
export default CourseViewModel;