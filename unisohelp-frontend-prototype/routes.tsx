//importando elementos essenciais
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

//importando páginas
import LoginScreen  from './src/view/pages/login';
import IndexScreen from './src/view/pages/index';
import GuideScreen from './src/view/pages/guide';
import ContactScreen from './src/view/pages/contact';
import EmployeeScreen from './src/view/pages/employee';
import CalendarScreen from './src/view/pages/calendar';
import SettingScreen from './src/view/pages/setting';
import AccessibilityScreen from './src/view/pages/accessibility';
import ProfileScreen from './src/view/pages/profile';

//exportando 
export type RootStackParamList  = {
  login: undefined;
  index: undefined;
  guide: undefined;
  contact: undefined;
  forum: undefined;
  employee: undefined;
  calendar: undefined;
  setting: undefined;
  accessibility: undefined;
  profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList >();

//função principal
const Routes =()=> {

  //definindo rota inicial
  let changeInitialRoute = "login";

  //alterando rota caso esteja logado e o sistema for web
  if (Platform.OS === "web") {
    if (localStorage.getItem("login") === "isLoggedIn") {
      changeInitialRoute = "index";
    }
  }

  //criando rotas
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={changeInitialRoute as keyof RootStackParamList}>
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="index" component={IndexScreen} options={{headerShown: false}}/>
        <Stack.Screen name="guide" component={GuideScreen} options={{headerShown: false}}/>
        <Stack.Screen name="contact" component={ContactScreen} options={{headerShown: false}}/>
        <Stack.Screen name="employee" component={EmployeeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="calendar" component={CalendarScreen} options={{headerShown: false}}/>
        <Stack.Screen name="setting" component={SettingScreen} options={{headerShown: false}}/>
        <Stack.Screen name="accessibility" component={AccessibilityScreen} options={{headerShown: false}}/>
        <Stack.Screen name="profile" component={ProfileScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//exportando função principal
export default Routes;