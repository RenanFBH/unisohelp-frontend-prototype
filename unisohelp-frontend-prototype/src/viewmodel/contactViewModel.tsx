//importando elementos essenciais
import contactRepository from "../data/repository/contactRepository";

//classe principal
class ContactViewModel {

    //função que retorna todos os setores
    getAll() {
        return contactRepository;
    };

};

//exportando classe principal
export default ContactViewModel;