import React from 'react';
import { Text, View } from 'react-native';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.bgDark}>
      <Header />
      <Hero />
      <Text>Home</Text>
    </View>
  )
}

export default Home;