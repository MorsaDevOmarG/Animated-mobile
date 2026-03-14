import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Animacion1 from './components/Animacion1';

const AppContent = () => {
  return (
    <>
      <View style={styles.contenido}>
        <Text>App Content</Text>

        <Animacion1 />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenido: {
    marginTop: 100,
  },
});

export default AppContent;
