import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  
  let [newTask, setNewTask] = React.useState('');
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      

      {/*<Text>Digite seu nome</Text>
      <TextInput placeholder='Nome' style={styles.textinp} />

      <Text>Digite sua idade</Text>
      <TextInput placeholder='Idade' style={styles.textinp} />

      <Text>Digite seu email</Text>
      <TextInput placeholder='Email' style={styles.textinp} />

      <Text>Digite sua senha</Text>
      <TextInput placeholder='Senha' style={styles.textinp} secureTextEntry={true} />*/}

      <Text>Trabalhando com Hook useState</Text>
      <TextInput onChangeText={setNewTask} placeholder='tarefa' style={styles.textinp} />
      <Text></Text>
      <Text>Elemento digitado</Text>
      <Text>{newTask}</Text>

      {/*<TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text>Adicionar tarefas</Text>
      </TouchableOpacity>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#483D8B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinp: {
    backgroundColor: '#F8F8FF',
    width: 300,
    height: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#A9A9A9',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 5,
    width: 300,
  },
});
