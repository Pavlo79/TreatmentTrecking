import Header from './components/Heder';
import { Navigation } from './screens/Navigation';
import { StyleSheet } from 'react-native';
import { BottomTabNavigation } from './screens/BottomTabNavigation';


export default function App() {
  return (
    <>
      <Header />
      <BottomTabNavigation />
    </>
  );
}