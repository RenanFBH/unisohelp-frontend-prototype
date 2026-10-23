//importando elementos essenciais
import { View, Text, Pressable, Linking } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Functions from "../../services/functions";

//importando estilo
import modal from "../components/modal-layout";
import global from "../components/global";
import { ScrollView } from "react-native-gesture-handler";

//instanciando functions
const functions = new Functions();

//
type ModalProps = {
    onClose: () => void;
};

//modal do App do Aluno
const AppDoAluno =({ onClose }: ModalProps)=> {
  return (
    <View style={modal.background}>
      <View style={modal.card}>
        <ScrollView style={modal.scroll}>
          <View style={modal.header}>
            <Text style={modal.title}>App da UNISO</Text>
            <Pressable style={modal.close} onPress={onClose}>
              <FontAwesomeIcon icon={faCircleXmark} size={30} style={global.icon} />
            </Pressable>
          </View>
          <View style={modal.content}>
            <Text style={modal.subtitle}>Smartphone</Text>
            <Text style={modal.text}>1° Instale o aplicativo do aluno.</Text>
            <Pressable style={modal.button} onPress={() => {functions.openURL("https://play.google.com/store/apps/details?id=com.uniso.appaluno&hl=pt_BR")}}>
              <Text style={modal.textButton}>Play Store</Text>
            </Pressable>
            <Pressable style={modal.button} onPress={() => {functions.openURL("https://apps.apple.com/br/app/uniso/id1007008585")}}>
              <Text style={modal.textButton}>App Store</Text>
            </Pressable>
            <Text style={modal.text}>2° Abra o aplicativo instalado.</Text>
            <Text style={modal.text}>3° Faça o login inserindo o RA* no campo de usuário e o RG** na senha.</Text>
            <Text style={modal.subtitle}>Desktop/Laptop</Text>
            <Text style={modal.text}>1° Acesse o link abaixo.</Text>
            <Pressable onPress={() => {functions.openURL("https://sistema.uniso.br/appaluno/dashboard")}}>
              <Text style={modal.textLink}>https://sistema.uniso.br/appaluno/</Text>
            </Pressable>
            <Text style={modal.text}>2° Faça o login inserindo o RA* no campo de usuário e o RG** na senha.</Text>
            <Text style={modal.text}>*RA está disponível no documento de matrícula, na tela inicial e nas configurações do aplicativo.</Text>
            <Text style={modal.text}>**Caso o RG não funcione, utilize o seu CPF (apenas números) como senha.</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

//modal do UNISO Virtual
const UNISOVirtual =({ onClose }: ModalProps)=> {
  return (
    <View style={modal.background}>
      <View style={modal.card}>
        <ScrollView style={modal.scroll} showsVerticalScrollIndicator={false}>
          <View style={modal.header}>
            <Text style={modal.title}>UNISO Virtual (Moodle)</Text>
            <Pressable style={modal.close} onPress={onClose}>
              <FontAwesomeIcon icon={faCircleXmark} size={30} style={global.icon} />
            </Pressable>
          </View>
          <View style={modal.content}>
            <Text style={modal.subtitle}>Smartphone</Text>
            <Text style={modal.text}>1° Instale o aplicativo do aluno.</Text>
            <Pressable style={modal.button} onPress={() => {functions.openURL("https://play.google.com/store/apps/details?id=com.uniso.appaluno&hl=pt_BR")}}>
              <Text style={modal.textButton}>Play Store</Text>
            </Pressable>
            <Pressable style={modal.button} onPress={() => {functions.openURL("https://apps.apple.com/br/app/uniso/id1007008585")}}>
              <Text style={modal.textButton}>App Store</Text>
            </Pressable>
            <Text style={modal.text}>2° Abra o aplicativo instalado.</Text>
            <Text style={modal.text}>3° Selecione a opção estudante.</Text>
            <Text style={modal.text}>4° Digitar “https://ead.uniso.br” no campo endereço de site.</Text>
            <Text style={modal.text}>5° Digite o RA* no campo de identificação de usuario e CPF na senha.</Text>
            <Text style={modal.subtitle}>Desktop/Laptop</Text>
            <Text style={modal.text}>1° Acesse o link abaixo.</Text>
            <Pressable onPress={() => {functions.openURL("https://ead.uniso.br/login/uniso/login.html")}}>
              <Text style={modal.textLink}>https://ead.uniso.br/login/uniso/login.html</Text>
            </Pressable>
            <Text style={modal.text}>2° Faça o login inserindo o RA* no campo de usuário e o CPF** na senha.</Text>
            <Text style={modal.text}>*RA está disponível no documento de matrícula, na tela inicial e nas configurações do aplicativo.</Text>
            <Text style={modal.text}>**Caso o CPF não funcione, utilize o seu RG (apenas números) como senha.</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

//modal do Wifi do Aluno
const WifiDoAluno =({ onClose }: ModalProps)=> {
  return (
    <View style={modal.background}>
      <View style={modal.card}>
        <ScrollView style={modal.scroll} showsVerticalScrollIndicator={false}>
          <View style={modal.header}>
            <Text style={modal.title}>Wi-Fi do Aluno</Text>
            <Pressable style={modal.close} onPress={onClose}>
              <FontAwesomeIcon icon={faCircleXmark} size={30} style={global.icon} />
            </Pressable>
          </View>
          <View style={modal.content}>
            <Text style={modal.text}>1° Acesse as configurações de WI-FI do dispositivo.</Text>
            <Text style={modal.text}>2° Selecione a rede “Alunos”.</Text>
            <Text style={modal.text}>3° Selecione a opção estudante.</Text>
            <Text style={modal.text}>*RA está disponível no documento de matrícula, na tela inicial e nas configurações do aplicativo.</Text>
            <Text style={modal.text}>**Caso o RG não funcione, utilize o seu CPF (apenas números) como senha.</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

//modal dos Laboratórios de Informática
const LabInformatica =({ onClose }: ModalProps)=> {
  return (
    <View style={modal.background}>
      <View style={modal.card}>
        <ScrollView style={modal.scroll} showsVerticalScrollIndicator={false}>
          <View style={modal.header}>
            <Text style={modal.title}>Laboratórios de Informática</Text>
            <Pressable style={modal.close} onPress={onClose}>
              <FontAwesomeIcon icon={faCircleXmark} size={30} style={global.icon} />
            </Pressable>
          </View>
          <View style={modal.content}>
            <Text style={modal.text}>Para obter acesso aos computadores dos laboratórios, compareça ao Apoio 1 - sala 005 para realizar o cadastro.</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

//modal da Biblioteca A
const BibliotecaA =({ onClose }: ModalProps)=> {
  return (
    <View style={modal.background}>
      <View style={modal.card}>
        <ScrollView style={modal.scroll} showsVerticalScrollIndicator={false}>
          <View style={modal.header}>
            <Text style={modal.title}>Biblioteca A</Text>
            <Pressable style={modal.close} onPress={onClose}>
              <FontAwesomeIcon icon={faCircleXmark} size={30} style={global.icon} />
            </Pressable>
          </View>
          <View style={modal.content}>
            <Text style={modal.subtitle}>Primeiro acesso - Desktop/Laptop</Text>
            <Text style={modal.text}>1° Acesse o site da UNISO.</Text>
            <Pressable onPress={() => {functions.openURL("https://uniso.br/")}}>
              <Text style={modal.textLink}>https://uniso.br/</Text>
            </Pressable>
            <Text style={modal.text}>2° Selecione “Área do aluno”.</Text>
            <Text style={modal.text}>3° Clique em “Acessos Acadêmicos - App do Aluno”.</Text>
            <Text style={modal.text}>4° Opção “biblioteca virtual”.</Text>
            <Text style={modal.text}>5° Clique em “biblioteca a+”.</Text>
            <Text style={modal.text}>6° Coloque o RA* no campo usuário e RG** na senha.</Text>
            <Text style={modal.text}>7° Dentro da plataforma, vá em “biblioteca A”.</Text>
            <Text style={modal.text}>8° Clique em “Acessar Acervo”.</Text>
            <Text style={modal.text}>9° No ícone de perfil, dentro de “meus dados”.</Text>
            <Text style={modal.text}>10° Edite a senha.</Text>
            <Text style={modal.subtitle}>Smartphone</Text>
            <Text style={modal.text}>1° Com a senha alterada instale o aplicativo Biblioteca a+.</Text>
            <Pressable style={modal.button} onPress={() => {functions.openURL("https://play.google.com/store/apps/details?id=com.binpar.bibliotecaarg&hl=pt_BR")}}>
              <Text style={modal.textButton}>Play Store</Text>
            </Pressable>
            <Pressable style={modal.button} onPress={() => {functions.openURL("https://apps.apple.com/us/app/biblioteca-a/id6444824032")}}>
              <Text style={modal.textButton}>App Store</Text>
            </Pressable>
            <Text style={modal.text}>2° Faça login com os dados cadastrados no primeiro acesso.</Text>
            <Text style={modal.subtitle}>Desktop/Laptop</Text>
            <Text style={modal.text}>1° Acesse o link abaixo.</Text>
            <Pressable onPress={() => {functions.openURL("https://login.read.garden/pt/login?token=cGbhJyezUIJiOiIsIiN1I6ICc5RnJCVXpkIdqJye.9yNWZTR3IiOiQXZDcVJ3Zqdk4SQtAq42MrBD9GbiwiImcQ5WanclRWa29dtlOiMn9mcwJCLmT0NWZqI6ISZtFpxmYpJkE2YlR3bnIsISYtYlp2byBnVHbTR3J3ZiojISYt8Gc1dlJnIsIyVlbyVHhmI6ICbiOzBHd0bilmYv8jVGdvlGJnLh1SY2ZuQWYlIuVGZyFylGZiwiNXd0NWZmOiwmcVIswGb15jVmcpRm9GVzVHdmOi4WZrIswGb15lZnclNnRXdvJlcHaiojIlL6MHc0RsJWai9yNWZ09WamcuEWLhYn5CZhVv4WZkJXwiIyJTYXanVmcicVJXZ0N15mOiwmVnIswGbWYNJXZzcVxWY1515mOiwmNmIswGbWbvR3c1bpRXY6lisnOi42VGZhVGaHaiojIyL6MHc0RsJWai9yNWZ09WamcuEWLhYn5CZhVv4WZkJXd2Ln1WaWLvBXdyZhVGavE2NnLyVGhmIsIyZkclRWYlQldWYtliojI0xWlGbilmQSYjVGdvciwiIh1yFWbpJH9GbvNUezIiojIyQzM0MENlNnIsIyFGZu92YGbvNUeyIiojIy9BZTQGZ0ZmIsISQWYGRnbvOikHbp1iJWaHJihmIsIyckclRWYlbs92QnJjIiOiI3MTOzI2MmIs0nI5ZjlmdlRldnI6ISRmIsIiYXZjlmdlam52bDN9tnOicWQXYpJCLzN3EjOiNwYTOxkQFY.9hTE-Hc5Iz2anLDloaDxB2rrf3vJ73pf8W0uHgOUB-o")}}>
              <Text style={modal.textLink}>Biblioteca-a | Login</Text>
            </Pressable>
            <Text style={modal.text}>2° Faça o login inserindo o e-mail e senha cadastrados no primeiro acesso.</Text>
            <Text style={modal.text}>*RA está disponível no documento de matrícula, na tela inicial e nas configurações do aplicativo.</Text>
            <Text style={modal.text}>**Caso o CPF não funcione, utilize o seu RG (apenas números) como senha.</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

//modal do Microsoft 365
const Microsoft =({ onClose }: ModalProps)=> {
  return (
    <View style={modal.background}>
      <View style={modal.card}>
        <ScrollView style={modal.scroll} showsVerticalScrollIndicator={false}>
          <View style={modal.header}>
            <Text style={modal.title}>Microsoft 365</Text>
            <Pressable style={modal.close} onPress={onClose}>
              <FontAwesomeIcon icon={faCircleXmark} size={30} style={global.icon} />
            </Pressable>
          </View>
          <View style={modal.content}>
            <Text style={modal.text}>1° Acesse o link abaixo.</Text>
            <Pressable onPress={() => {functions.openURL("https://www.microsoft.com/pt-br/microsoft-365/microsoft-office")}}>
              <Text style={modal.textLink}>https://www.microsoft.com/pt-br/microsoft-365/microsoft-office</Text>
            </Pressable>
            <Text style={modal.text}>2° Selecione a opção “Entrar”.</Text>
            <Text style={modal.text}>3° Digite o seu e-mail institucional*.</Text>
            <Text style={modal.text}>4° Digite o CPF** no campo senha.</Text>
            <Text style={modal.text}>*RA está disponível no documento de matrícula, na tela inicial e nas configurações do aplicativo.</Text>
            <Text style={modal.text}>**Caso o RG não funcione, utilize o seu CPF (apenas números) como senha.</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

//modal das Atividades complementares
const AtividadesComplementares =({ onClose }: ModalProps)=> {
  return (
    <View style={modal.background}>
      <View style={modal.card}>
        <ScrollView style={modal.scroll} showsVerticalScrollIndicator={false}>
          <View style={modal.header}>
            <Text style={modal.title}>Atividades complementares</Text>
            <Pressable style={modal.close} onPress={onClose}>
              <FontAwesomeIcon icon={faCircleXmark} size={30} style={global.icon} />
            </Pressable>
          </View>
          <View style={modal.content}>
            <Text style={modal.text}>1° Acesse o app da UNISO. </Text>
            <Text style={modal.text}>2° Acesse o menu lateral esquerdo.</Text>
            <Text style={modal.text}>3° Clique na opção Acadêmico.</Text>
            <Text style={modal.text}>4° Clique na opção Atividades complementares.</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

//modal de erro de login
const Error =({onClose}: ModalProps)=> {
  return (
    <View style={modal.background}>
      <View style={modal.cardError}>
        <ScrollView style={modal.scrollError} showsVerticalScrollIndicator={false}>
          <View style={modal.header}>
            <Text style={modal.titleError}>Erro!</Text>
            <Pressable style={modal.close} onPress={onClose}>
              <FontAwesomeIcon icon={faCircleXmark} size={30} style={modal.icon} />
            </Pressable>
          </View>
          <View style={modal.content}>
            <Text style={modal.textError}>Login ou senha inválidos!</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

//exportando modais
export {AppDoAluno, UNISOVirtual, WifiDoAluno, LabInformatica, BibliotecaA, Microsoft, AtividadesComplementares, Error};