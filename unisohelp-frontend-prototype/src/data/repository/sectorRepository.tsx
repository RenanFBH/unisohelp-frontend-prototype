//importando elementos essenciais
import SectorModel from "../../model/sectorModel";

//dicionário para simular setores carregados do banco de dados
const sectorRepository: Record<number, SectorModel> = {
    1: {id: 1, name: 'Clínica de nutrição', phone: 15981472631},
    2: {id: 2, name: 'Clínica de odontologia', phone: 15908372613},
    3: {id: 3, name: 'Clínica veterinária universitária', phone: 15938274615},
    4: {id: 4, name: 'Clínica-escola de psicologia', phone: 15961728493},
    5: {id: 5, name: 'EAD', phone: 15984517260},
    6: {id: 6, name: 'Farmácia comunitária ("Vital Brazil")', phone: 15929463871},
    7: {id: 7, name: 'FIES', phone: 15973190584},
    8: {id: 8, name: 'Financeiro', phone: 15946821735},
    9: {id: 9, name: 'Graduação', phone: 15995368142},
    10: {id: 10, name: 'Green Academy', phone: 15917649283},
    11: {id: 11, name: 'LACQ', phone: 15952487016},
    12: {id: 12, name: 'MyBox', phone: 15968235197},
    13: {id: 13, name: 'Pós-Graduação', phone: 15934781926},
    14: {id: 14, name: 'ProUni', phone: 15986241573},
    15: {id: 15, name: 'SAA', phone: 15921579468},
    16: {id: 16, name: 'TI', phone: 15957632841},
    17: {id: 17, name: 'Uniso Tech', phone: 15943867152},
};

//exportando repositório
export default sectorRepository;