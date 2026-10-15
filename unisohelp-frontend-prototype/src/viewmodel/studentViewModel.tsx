//importando elementos essenciais
import studentRepository from "../data/repository/studentRepository";

//classe principal
class StudentViewModel {

  //função que retorna todos os cargos
  getAll() {
    return studentRepository;
  };

  //função que retorna o cargo por id
  getById(id: number) {
    for (const student in studentRepository) {
      if (studentRepository[student].id === id){
        return studentRepository[student];
      }
    }
    return null;
  };

};

//exportando classe
export default StudentViewModel;