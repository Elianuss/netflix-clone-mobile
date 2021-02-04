import React from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const Hero = ({ mainMovie }) => {
  return(
    <ImageBackground
      style={styles.hero} 
      resizeMode='cover'
      source={{ uri: mainMovie.capa }}>
      <Image 
        style={styles.logo}
        resizeMode='contain'
        source={{ uri: mainMovie.logoMobile ? mainMovie.logoMobile : mainMovie.logo }}
      />
      <View style={styles.containerTop10}>
        <Image 
          resizeMode='contain'
          style={styles.top10Badge}
          source={require('../../assets/badge-top-10.png')}
        />
        <Text style={styles.top10Text}>Top 1 de hoje no Brasil</Text>
      </View>
      <LinearGradient 
        style={styles.gradient} 
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 1.0)']}
      />
    </ImageBackground>
  );
}

export default Hero;