//importando elementos essenciais
import CourseModel from "../../model/courseModel";

//dicionário para simular cursos carregados do banco de dados
const courseRepository: Record<number, CourseModel> = {
    1: {id: 1, name: "Análise e Desenvolvimento de Sistemas"},
    2: {id: 2, name: "Ciência da Computação"},
    3: {id: 3, name: "Engenharia da Computação"},
    4: {id: 4, name: "Ciência de Dados e Inteligência Artificial"}
};

//exportando repositório
export default courseRepository;