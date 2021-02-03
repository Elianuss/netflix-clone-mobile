import React, { useState } from 'react'
import { Image, View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import styles from './styles';

const Login = () => {

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  return (
    <View style={styles.bgDark}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <TextInput
        mode='flat'
        style={styles.input}
        label="Email ou número de telefone"
        value={credentials.email}
        onChangeText={text => setText([...credentials, email.text])}
      />
      <TextInput
        mode='flat'
        style={styles.input}
        label="senha"
        value={credentials.senha}
        onChangeText={text => setText([...credentials, senha.text])}
      />
       <Button 
        mode="contained" 
        style={styles.button}
        onPress={() => console.log('Pressed')}>
        Entrar
      </Button>
       <Button 
        mode="text" 
        style={styles.button}
        theme={{colors: {primary: '#fff'}}}
        onPress={() => console.log('Pressed')}>
        Recuperar senha
      </Button>
      <Text style={styles.textSmall}>O acesso está protegido pelo Google reCAPTCHA para garantir que você não é um robo. Saiba mais.</Text>
    </View>
  )
}

export default Login;