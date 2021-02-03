import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const PreviewItem = ({ index }) => {
  return(
  <TouchableOpacity
  key={index} 
  style={{
    marginLeft: index == 0 ? 20 : 0, 
    marginRight: 10, 
  }}>
    <View style={styles.oval}>
      <Image resizeMode='cover' style={styles.cover} source={{ uri: 'https://i.imgur.com/88RFIe9.jpg' }} />
      <Image resizeMode='contain' style={styles.logo} source={{ uri: 'https://i.imgur.com/WaSZvXT.png' }} />
      <LinearGradient 
        style={styles.gradient}
        colors={['rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.9)']}
      />
    </View>
  </TouchableOpacity>
  );
}

export default PreviewItem;