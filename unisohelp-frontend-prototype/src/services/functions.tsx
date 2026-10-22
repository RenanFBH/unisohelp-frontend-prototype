class Functions {

    formatPhone(phone: number) {
        const stringPhone = phone.toString();
        const ddd = stringPhone.substring(0, 2);
        const prefix = stringPhone.substring(2, 7);
        const suffix = stringPhone.substring(7, 11)
        const phoneFormatted = "(" + ddd + ") " + prefix + "-" + suffix;
        return phoneFormatted;
    };

    formatPositions(position: string) {
        const p = position.split(" ");
        let positionFormatted = "";
        for (let i = 0; i < p.length; i++) {
            if (i == p.length - 1 || i == 0) {
                positionFormatted += p[i];
                continue
            }
            positionFormatted += ", " + p[i];
        }
        return positionFormatted.toString();
    }

};

export default Functions;

