import React, { useState, useEffect } from 'react'
import { Image, View, Text, ActivityIndicator } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import styles from './styles';

const Login = ({ navigation }) => {

  /**
   * status | description
   * 0      | loading; 
   * 1      | logged in; 
   * 2      | logged out
   */ 
  const [logged, setLogged] = useState(0);

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const checkLogin = async () => {
    const user = await AsyncStorage.getItem('@user');
    if(user){
      setLogged(1);
      navigation.replace('Home');
    } else {
      setLogged(2);
    }
  }

  const login = async () => {
    try {
      const response = await api.post('/usuario/login', { email: credentials.email.toLowerCase(), senha: credentials.password });
      const res = response.data;
      if(res.error) {
        alert(res.mensagem);
        return false;
      }
      await AsyncStorage.setItem('@user', JSON.stringify(res.usuario));
      navigation.replace('Home');

    } catch(err) {
      alert(err.message);
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <View style={styles.bgDark}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />

      {logged == 0 && (
        <ActivityIndicator color={'#fff'} size={'large'} />
      )}

      {logged == 2 && (
        <>
          <TextInput
            mode='flat'
            style={styles.input}
            label="Email ou número de telefone"
            value={credentials.email}
            onChangeText={text => setCredentials({...credentials, email: text})}
          />
          <TextInput
            mode='flat'
            style={styles.input}
            label="Senha"
            secureTextEntry={true}
            value={credentials.password}
            onChangeText={text => setCredentials({...credentials, password: text})}
          />
          <Button 
            mode="contained" 
            style={styles.button}
            onPress={() => {login()}}>
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
        </>
      )}
    </View>
  )
}

export default Login;