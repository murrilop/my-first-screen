import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Digite o seu nome</Text>
      <TextInput placeholder='nome' style={styles.textinp}/>
      <Text>Digite o seu Email: </Text>
      <TextInput placeholder='teste@gmail.com' style={styles.textinp}/>
      <Text>Digite a sua senha</Text>
      <TextInput placeholder='Digite sua senha' style={styles.textinp}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinp:{
    backgroundColor: '#4F4F4F',
    width: 300,
    height: 50,
    borderRadius: 7,
  },
  button:{
    backgroundColor: '#DCDCDC',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
    width: 300,
  }
});
