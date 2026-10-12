//importando elementos essenciais
import SectorModel from "../../model/sectorModel";

//dicionário para simular dados carregados do banco de dados
const SectorRepository: Record<number, SectorModel> = {
    1: {id: 1, name: 'Clínica de nutrição', number: 15981472631},
    2: {id: 2, name: 'Clínica de odontologia', number: 15908372613},
    3: {id: 3, name: 'Clínica veterinária universitária', number: 15938274615},
    4: {id: 4, name: 'Clínica-escola de psicologia', number: 15961728493},
    5: {id: 5, name: 'EAD', number: 15984517260},
    6: {id: 6, name: 'Farmácia comunitária ("Vital Brazil")', number: 15929463871},
    7: {id: 7, name: 'FIES', number: 15973190584},
    8: {id: 8, name: 'Financeiro', number: 15946821735},
    9: {id: 9, name: 'Graduação', number: 15995368142},
    10: {id: 10, name: 'Green Academy', number: 15917649283},
    11: {id: 11, name: 'LACQ', number: 15952487016},
    12: {id: 12, name: 'MyBox', number: 15968235197},
    13: {id: 13, name: 'Pós-Graduação', number: 15934781926},
    14: {id: 14, name: 'ProUni', number: 15986241573},
    15: {id: 15, name: 'SAA', number: 15921579468},
    16: {id: 16, name: 'TI', number: 15957632841},
    17: {id: 17, name: 'Uniso Tech', number: 15943867152},
};

//exportando repositório
export default SectorRepository;