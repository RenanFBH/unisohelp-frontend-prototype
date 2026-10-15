//importando elementos essenciais
import GuideModel from "../../model/guideModel";

//dicionário para simular guias carregados do banco de dados
const guideRepository: Record<number, GuideModel> = {
  1: {id: 1, title: "Guia do calouro"}
};

//exportando repositório
export default guideRepository;