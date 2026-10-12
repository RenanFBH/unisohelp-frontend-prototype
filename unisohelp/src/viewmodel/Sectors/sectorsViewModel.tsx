//função principal
const SectorsViewModel =()=> {

    //dicionário para simular dados carregados do banco de dados
    const dictionarySector: Record<string, number> = {
        'Clínica de nutrição': 15981472631,
        'Clínica de odontologia': 15908372613,
        'Clínica veterinária universitária': 15938274615,
        'Clínica-escola de psicologia': 15961728493,
        'EAD': 15984517260,
        'Farmácia comunitária ("Vital Brazil")': 15929463871,
        'FIES': 15973190584,
        'Financeiro': 15946821735,
        'Graduação': 15995368142,
        'Green Academy': 15917649283,
        'LACQ': 15952487016,
        'MyBox': 15968235197,
        'Pós-Graduação': 15934781926,
        'ProUni': 15986241573,
        'SAA': 15921579468,
        'TI': 15957632841,
        'Uniso Tech': 15943867152
    }
    return dictionarySector;

}

//exportando função principal
export default SectorsViewModel;