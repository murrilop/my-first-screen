import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>Digite seu nome</Text>
      <TextInput placeholder='Nome' style={styles.textinp} />

      <Text>Digite seu email</Text>
      <TextInput placeholder='Email' style={styles.textinp} />

      <Text>Digite sua senha</Text>
      <TextInput placeholder='Senha' style={styles.textinp} secureTextEntry={true} />

      <Text>Digite sua idade</Text>
      <TextInput placeholder='Idade' style={styles.textinp} />

      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008B8B',
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
    marginTop: 20,
    width: 300,
  },
});
