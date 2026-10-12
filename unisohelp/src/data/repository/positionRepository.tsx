//importando elementos essenciais
import PositionModel from "../../model/positionModel";

//dicionário para simular cargos carregados do banco de dados
const PositionRepository: Record<number, PositionModel> = {
    1: {id: 1, description: "Professor"},
    2: {id: 2, description: "Coordenador"},
    3: {id: 3, description: "Reitor"}
};

//exportando repositório
export default PositionRepository;