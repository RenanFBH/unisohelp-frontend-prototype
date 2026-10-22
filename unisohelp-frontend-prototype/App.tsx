import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Routes from './routes';

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "main");
}

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Routes />
    </GestureHandlerRootView>
  );
};

export default App;