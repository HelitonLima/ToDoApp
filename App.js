import { StyleSheet, View } from 'react-native';
import Home from './src/pages/Home';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Home></Home>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
