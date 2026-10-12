//importando elementos essenciais
import PositionRepository from "../data/repository/positionRepository";

//classe principal
class PositionViewModel {

    //função que retorna todos os cargos
    getAll() {
        return PositionRepository;
    };

    //função que retorna o cargo por id
    getById(id: number) {
        for (const position in PositionRepository) {
            if (PositionRepository[position].id === id) {
                return PositionRepository[position];
            };
        };
        return null;
    };

    //função que retorna o cargo por descrição
    getByName(description: string) {
        const listPosition = [];
        for (const position in PositionRepository) {
            if (PositionRepository[position].description === description) {
                listPosition.push(position);
            };
        };
        return listPosition;
    };

};

//exportando classe principal
export default PositionViewModel;