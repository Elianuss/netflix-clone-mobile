import React from 'react';
import { Caption, Title } from 'react-native-paper';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
3
import styles from './styles';

const Episode = ({ episode }) => {
  return (
    <TouchableOpacity style={styles.episodeContainer}>
      <View style={styles.infoContainer}>
        <Image 
          style={styles.episodeThumb}
          source={{ uri: episode?.capa }}
        />
        <View style>
          <Title style={[styles.textWhite, { fontSize: 15 }]}>{episode?.numero}. {episode?.titulo}</Title>
          <Caption style={styles.textWhite}>45 min</Caption>
        </View>
      </View>
      <Caption style={styles.descriptionCaption}>
        {episode?.descricao}
      </Caption>
    </TouchableOpacity>
  )
}

export default Episode;