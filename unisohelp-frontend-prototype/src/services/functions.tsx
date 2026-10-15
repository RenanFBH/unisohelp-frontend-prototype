class Functions {

    formatPhone(phone: number) {
        const stringPhone = phone.toString();
        const ddd = stringPhone.substring(0, 2);
        const prefix = stringPhone.substring(2, 7);
        const suffix = stringPhone.substring(7, 11)
        const phoneFormatted = "(" + ddd + ") " + prefix + "-" + suffix;
        return phoneFormatted;
    };

};

export default Functions;

