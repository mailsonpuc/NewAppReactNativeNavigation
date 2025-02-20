import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import React from 'react';
import Logo from './Logo';

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const handleLogin = () => {
    const result = `Seu email é ${email}, senha ${senha}`;
    navigation.navigate('Logado', { result }); // Passa o resultado para a tela Logado
  };

  return (
    <View>
      <View style={styles.container}>
        <Logo />
      </View>

      <TextInput
        style={styles.input}
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        label="Senha"
        value={senha}
        secureTextEntry
        onChangeText={(text) => setSenha(text)}
      />

     
     
     <View style={styles.container}>
      <TouchableOpacity 
      style={styles.button}
       onPress={handleLogin}>
          <Text  style={styles.texto} >Login</Text>
      </TouchableOpacity>
      </View>

      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin:10
  },
  button: {
    backgroundColor:'#808080',
    width:100,
    height:30,
    marginTop:8,
  
  },
  texto: {
    textAlign:'center',
    color:'white'
  }
});

export default Login;
