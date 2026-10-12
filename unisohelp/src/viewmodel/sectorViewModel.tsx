//importando elementos essenciais
import SectorRepository from "../data/repository/sectorRepository";

//classe principal
class SectorViewModel {

    //função que retorna todos os setores
    getAll() {
        return SectorRepository;
    };

};

//exportando classe principal
export default SectorViewModel;