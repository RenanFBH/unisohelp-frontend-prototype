//importando elementos essenciais
import { Linking } from "react-native";

//classe que contém funções gerais
class Functions {

    //função para formatar telefone
    formatPhone(phone: number) {
        const stringPhone = phone.toString();
        const ddd = stringPhone.substring(0, 2);
        const prefix = stringPhone.substring(2, 7);
        const suffix = stringPhone.substring(7, 11)
        const phoneFormatted = "(" + ddd + ") " + prefix + "-" + suffix;
        return phoneFormatted;
    };

    //função para formatar lista de cargos
    formatPositions(position: string) {
        let positionFormatted = "";
        const p = position.split(" ");
        for (let i = 0; i < p.length; i++) {
            if (i === p.length - 1 || i === 0) {
                positionFormatted += p[i];
                continue
            }
            positionFormatted += ", " + p[i];
        }
        return positionFormatted.toString();
    };

    //função para retirar título do nome
    formatEmployeeName(name: string) {
        let employeeNameFormatted = "";
        const n = name.split(" ");
        for (let i = 1; i < n.length; i++) {
            if (i != 1) {
                employeeNameFormatted += " " + n[i];
                continue;
            } 
            employeeNameFormatted += n[i];
        }
        return employeeNameFormatted.toLowerCase();
    };

    //função para abrir urls
    openURL(url: string) {
        Linking.openURL(url);
    };

};

//exportando classe
export default Functions;