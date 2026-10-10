import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen  from './src/view/pages/login';
import IndexScreen from './src/view/pages/index';
import GuideScreen from './src/view/pages/guide';
import ServiceScreen from './src/view/pages/service';
import EmployeesScreen from './src/view/pages/employees';
import CalendarsScreen from './src/view/pages/calendars';
import SettingsScreen from './src/view/pages/settings';
import AccessibilityScreen from './src/view/pages/accessibility';
import ProfileScreen from './src/view/pages/profile';

export type RootStackParamList  = {
  login: undefined;
  index: undefined;
  guide: undefined;
  service: undefined;
  forum: undefined;
  employees: undefined;
  calendars: undefined;
  settings: undefined;
  accessibility: undefined;
  profile: undefined;
};
document.addEventListener("load", funcX);

function funcX(){
  console.log("hi");
}
const Stack = createStackNavigator<RootStackParamList >();

const Routes =()=> {

  let changeInitialRoute = "login";

    if (localStorage.getItem("login") === "isLoggedIn") {
      changeInitialRoute = "index";
    }

    
    console.log(changeInitialRoute);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={changeInitialRoute as keyof RootStackParamList}>
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="index" component={IndexScreen} options={{headerShown: false}}/>
        <Stack.Screen name="guide" component={GuideScreen} options={{headerShown: false}}/>
        <Stack.Screen name="service" component={ServiceScreen} options={{headerShown: false}}/>
        <Stack.Screen name="employees" component={EmployeesScreen} options={{headerShown: false}}/>
        <Stack.Screen name="calendars" component={CalendarsScreen} options={{headerShown: false}}/>
        <Stack.Screen name="settings" component={SettingsScreen} options={{headerShown: false}}/>
        <Stack.Screen name="accessibility" component={AccessibilityScreen} options={{headerShown: false}}/>
        <Stack.Screen name="profile" component={ProfileScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;