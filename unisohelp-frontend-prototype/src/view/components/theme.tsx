//variáveis de cores
let primaryColor;
let secondaryColor;
let tertiaryColor;
let quaternaryColor;
let quinaryColor;

//verificando qual tema está ativo
if (localStorage.getItem("theme") === "main") {
  primaryColor  = "#fff";
  secondaryColor = "#1E3ABA";
  tertiaryColor = "#EEE";
  quaternaryColor = "#FFD000";
  quinaryColor = "#1E3ABA";
} else if (localStorage.getItem("theme") === "dark") {
  primaryColor  = "#00082C";
  secondaryColor = "#FFF";
  tertiaryColor = "#000415";
  quaternaryColor = "#00082C";
  quinaryColor = "#1E3ABA";
} else if (localStorage.getItem("theme") === "contrast") {
  primaryColor  = "#000";
  secondaryColor = "#FFF";
  tertiaryColor = "#000";
  quaternaryColor = "#000";
  quinaryColor = "#FFF";
}

//criando tema
const theme =  {
  colors: {
    primary: primaryColor,
    secondary: secondaryColor,
    tertiary: tertiaryColor,
    quaternary: quaternaryColor,
    quinary: quinaryColor,
  }
};

//exportando tema
export default theme;