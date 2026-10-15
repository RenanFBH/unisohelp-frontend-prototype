//importando elementos essenciais
import sectorRepository from "../data/repository/sectorRepository";

//classe principal
class SectorViewModel {

    //função que retorna todos os setores
    getAll() {
        return sectorRepository;
    };

};

//exportando classe principal
export default SectorViewModel;