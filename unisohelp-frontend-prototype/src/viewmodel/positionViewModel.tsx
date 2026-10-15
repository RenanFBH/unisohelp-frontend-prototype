//importando elementos essenciais
import positionRepository from "../data/repository/positionRepository";

//classe principal
class PositionViewModel {

    //função que retorna todos os cargos
    getAll() {
        return positionRepository;
    };

    //função que retorna o cargo por id
    getById(id: number) {
        for (const position in positionRepository) {
            if (positionRepository[position].id === id) {
                return positionRepository[position];
            }
        }
        return null;
    };

    //função que retorna o cargo por descrição
    getByName(description: string) {
        const listPosition = [];
        for (const position in positionRepository) {
            if (positionRepository[position].description === description) {
                listPosition.push(position);
            }
        }
        return listPosition;
    };

};

//exportando classe principal
export default PositionViewModel;