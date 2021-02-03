import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont()

import styles from './styles';

const ButtonVertical = ({ text, icon }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Icon name={icon} color='#fff' size={25} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default ButtonVertical;